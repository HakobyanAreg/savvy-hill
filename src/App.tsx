import React from 'react';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

function App() {
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

export default App;
