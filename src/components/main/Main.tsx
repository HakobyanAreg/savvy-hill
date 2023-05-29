import React, { Component } from 'react';
import './Main.scss';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchClients, setDatLanguage, setDatLimit } from '../../store/action-craetors/client';
import { RootState } from '../../store/reducers';
import { Client } from '../../types/client';
import {MainProps} from "./types";


class Main extends Component<MainProps> {
    state = {
        page: 'Min',
    };

    pages = ['Min', 'Mid', 'Max'];

    componentDidMount() {
        const { setDatLanguage, setDatLimit } = this.props;
        setDatLanguage('ru');
        setDatLimit('min');
        this.fetchClientsData();
    }

    componentDidUpdate(prevProps: MainProps) {
        if (prevProps.lang !== this.props.lang || prevProps.limit !== this.props.limit) {
            this.fetchClientsData();
        }
    }

    fetchClientsData() {
        const { lang, limit, fetchClients } = this.props;
        fetchClients(lang, limit);
    }

    formatFullName(fullName: string): string {
        const lastName = fullName.split(' ')[0];
        const firstName = !!fullName.split(' ')[1] ? fullName.split(' ')[1][0] : '';
        return `${lastName} ${firstName}`;
    }

    handleClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
        const value = (e.target as HTMLElement).innerText;
        this.setState({ page: value });
        this.props.setDatLimit(value.toLowerCase());
    };

    render() {
        const { clients, loading, error } = this.props;
        const { page } = this.state;

        if (loading) {
            return <h1>... Loading</h1>;
        }

        if (error) {
            return <h1>{error}</h1>;
        }

        return (
            <div className="main">
                {clients.map((client: Client, index: number) => (
                    <div className="clients-wrapper" key={`${client.name}_${index}`}>
                        <span>{this.formatFullName(client.name)}</span>
                        <span>{client.review}</span>
                        <span>{client.date}</span>
                    </div>
                ))}
                <div className="pagination">
                    {this.pages.map((p: string, index: number) => (
                        <span key={`${p}_${index}`} onClick={this.handleClick} className={p === page ? 'selected' : ''}>
              {p}
            </span>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    clients: state.clients.clients,
    loading: state.clients.loading,
    error: state.clients.error,
    lang: state.clients.lang,
    limit: state.clients.limit,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ fetchClients, setDatLanguage, setDatLimit }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
