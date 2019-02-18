import React, { Component } from 'react';
import classes from './App.css';
import Validation from '../Components/Validation';
import Char from '../Components/Char';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import WithCLass from '../HOC/WithClass';


class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  //state = component internal data, data source
  state = {
    persons: [
      { id: '1', name: 'Anna', age: '32' },
      { id: '2', name: 'Nova', age: '1' },
      { id: '3', name: 'Chris', age: '33' }
    ],
    showPersons: false,
    userInput: '',
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  //IMPORTANT LIFECYCLE HOOK
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  //IMPORTANT LIFECYCLE HOOK
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App-js] shouldComponentUpdate');
    return true;
  }

  //IMPORTANT LIFECYCLE HOOK
  componentDidUpdate() {
    console.log('[App-js] componentDidUpdate');
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
    console.log('[App.js] render')

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
    }

    return (
      <WithCLass classers={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}>
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
        <hr />
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </WithCLass>
    );
  }
}

export default App;
