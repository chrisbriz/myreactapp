import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  //state = component internal data
  state = {
    persons: [
      {
        name: 'Chris',
        age: '33'
      }, {
        name: 'Anna',
        age: '32'
      }, {
        name: 'Nova',
        age: '1'
      }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: '33'
        }, {
          name: 'Anna',
          age: '24'
        }, {
          name: 'Nova',
          age: '1'
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Christopher')}>Switch names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler}>Hello world</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
