import React, { Component } from 'react';
import { Slider } from './src/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>🎚 React Smooth Input Range</h1>
          <div style={{ padding: '50px 20px 20px', width: '50%' }}>
            <Slider value={1} min={1} max={30} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
