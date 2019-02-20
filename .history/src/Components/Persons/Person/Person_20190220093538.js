import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../HOC/Auxiliary';
import withClass from '../../../HOC/withClass';
import classes from './Person.css';



//props = properties on the element in app.js
class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxiliary>
        <p onClick={this.props.click}>
          i'm {this.props.name} and i am {this.props.age}!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);