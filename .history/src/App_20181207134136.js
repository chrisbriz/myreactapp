import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  //state = component internal data, data source
  state = {
    persons: [
      { id: '1', name: 'Anna', age: '32' },
      { id: '2', name: 'Nova', age: '1' },
      { id: '3', name: 'Chris', age: '33' }
    ],
    showPersons: false
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]= person;

    this.setState({
      persons: [
        { name: 'Chris', age: '33' },
        { name: event.target.value, age: '24' },
        { name: 'Nova', age: '1' }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    /*spread operator = spreads le element of the initial array into a new array
    we now manipulate a copy of the original state (mutating the state directly is bad practice)
    then updating the state*/
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
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
