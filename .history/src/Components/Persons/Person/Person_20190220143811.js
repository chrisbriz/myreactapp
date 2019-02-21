import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../HOC/Auxiliary';
import withClass from '../../../HOC/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

//props = properties on the element in app.js
class Person extends Component {
constructor(props){
  super(props);
  this.inputElementRef = React.createRef();
}

static contextType = AuthContext;

componentDidMount(){
  // this.inputElement.focus();
  this.inputElementRef.current.focus();
  console.log(this.context.authenticated);
}

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxiliary>
          {this.context => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>
          i'm {this.props.name} and i am {this.props.age}!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);