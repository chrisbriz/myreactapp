import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    souldComponentUpdate(Props, State) {
        console.log('[Persons.js] souldComponentUpdate');
        return true;
    }

    getSnapShotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
    }

    compoenentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    render() {
        console.log('[Person.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        });
    }
}

export default Persons;
