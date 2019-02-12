import React, { Component } from 'react';
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
    ],
    showPersons: false
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Chris',
          age: '33'
        }, {
          name: event.target.value,
          age: '24'
        }, {
          name: 'Nova',
          age: '1'
        }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
   }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch names</button>
        {
          this.state.showPersons === true ?
            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this
                  .switchNameHandler
                  .bind(this, 'Chris!')} changed={this.nameChangedHandler}>Hello world</Person>
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div> : null
        }
      </div>
    );
  }
}

export default App;
