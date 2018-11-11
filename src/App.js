import React, { Component } from 'react';
import './App.css';

// Components
import Appnav from './components/Appnav';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Appnav/>
      </div>
    );
  }
}

export default App;
