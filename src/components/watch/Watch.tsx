import React, { Component } from 'react';
import "./Watch.scss";

class Watch extends Component {
    state = {
        date: new Date().toLocaleTimeString(),
    };

    interval: NodeJS.Timeout | null = null;

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ date: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { date } = this.state;

        return <div className="watch">{date}</div>;
    }
}

export default Watch;
