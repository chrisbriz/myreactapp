import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return props.persons.map((person, index) => {
            return (
                <Person
                    click={() => props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => props.changed(event, person.id)}
                />
            );
        });
    }

};

export default persons;
