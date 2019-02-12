import React from 'react';


//props = properties of the element
const person = (props) => {
  return (
    <div>
      <p>i'm {props.name} and i am {props.age}!</p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;