import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a rest app</h1>
        <Person></Person>
      </div>
    );
  }
}

export default App;
