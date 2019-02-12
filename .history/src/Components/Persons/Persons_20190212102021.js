import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={this.person.name}
                    age={this.person.age}
                    key={this.person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        });
    }
};

export default persons;
