import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a rest app</h1>
        <Person name="chris" age="33"/>
        <Person name="Anna" age="32">Hello world</Person>
        <Person name="Nova" age="1"/>
      </div>
    );
  }
}

export default App;
