import React, { Component } from 'react';
import './App.css';
import StartMakingPizza from './components/StartMakingPizza';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <StartMakingPizza />
        </main>
      </div>
    );
  }
}

export default App;
