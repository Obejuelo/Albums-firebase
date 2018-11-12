import React, { Component } from 'react';
import './App.css';

// Components
import Appnav from './components/Appnav';
import Albums from './containers/Albums';
import Album from './containers/Album';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Appnav/>
        <Album/>
        <Albums/>
      </div>
    );
  }
}

export default App;
