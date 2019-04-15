import React, { Component } from 'react';
import './App.css';
// importing circle and circle selector components
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
        
        <CircleSelector />
        <Circles />
        <Circles />
        <Circles />
        <Circles />
        </main>
      </div>
    );
  }
}

export default App;

