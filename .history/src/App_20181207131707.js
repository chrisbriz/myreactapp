import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  //state = component internal data, data source
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

  deletePersonHandler = () => {

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
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              click={this.deletePersonHandler}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
