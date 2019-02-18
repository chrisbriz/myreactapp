import React, { Component } from 'react';

import Auxiliary from '../../../HOC/Auxiliary';
import classes from './Person.css';



//props = properties on the element in app.js
class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxiliary className={classes.person}>
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

export default Person;