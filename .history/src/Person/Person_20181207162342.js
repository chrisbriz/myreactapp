import React from 'react';
import './Person.css';
import Radium from 'radium';

//props = properties on the element in app.js
const person = (props) => {
  const style ={
    '@media(min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    <div className="Person">
      <p onClick={props.click}>i'm {props.name} and i am {props.age}!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default Radium(person);