import "./Header.scss";
import React, { Component } from 'react';
import clientLogo from "./../../assets/images/client.png";
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setDatLanguage } from "../../store/action-craetors/client";
import data from './../../data/data.json';
import Watch from "../watch/Watch";
import {HeaderProps} from "./types";

class Header extends Component<HeaderProps> {
    handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        const lang = (e.target as HTMLElement).innerText.toLowerCase() as keyof typeof data;
        this.props.setDatLanguage(lang);
    };

    render() {
        return (
            <header>
                <div className="logo-wrapper">
                    <img src={clientLogo} alt="Client Logo" />
                </div>
                <div className="watch-wrapper">
                    <Watch />
                </div>
                <div className="language-wrapper">
                    <span onClick={this.handleClick}>en</span>
                    <span onClick={this.handleClick}>ru</span>
                </div>
            </header>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ setDatLanguage }, dispatch);
};

export default connect(null, mapDispatchToProps)(Header);
