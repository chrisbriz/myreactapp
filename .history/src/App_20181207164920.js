import React, { Component } from 'react';
import Person from './Person/Person';
import classes from'./App.css';
import Validation from './Components/Validation';
import Char from './Components/Char';


class App extends Component {
  //state = component internal data, data source
  state = {
    persons: [
      { id: '1', name: 'Anna', age: '32' },
      { id: '2', name: 'Nova', age: '1' },
      { id: '3', name: 'Chris', age: '33' }
    ],
    showPersons: false,
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value })
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
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
    persons[personIndex] = person;

    this.setState({ persons: persons })
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

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
      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, i'm a react app</h1>
        <p className={classes.join(' ')}>My react project</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <hr />
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
