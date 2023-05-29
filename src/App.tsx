import React, { Component } from 'react';
import Header from "./components/header/Header";
import Main from "./components/main/Main";

class App extends Component {
    render() {
        return (
            <div className="App">
                <section>
                    <Header />
                </section>
                <section>
                    <Main />
                </section>
            </div>
        );
    }
}

export default App;
