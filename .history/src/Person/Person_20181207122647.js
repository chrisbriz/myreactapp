import React from 'react';

//props = properties on the element in app.js
const person = (props) => {
  return (
    <div className="person">
      <p onClick={props.click}>i'm {props.name}
        and i am {props.age}!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;