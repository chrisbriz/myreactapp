import React from 'react';

const withClass = (WrappedComponent) => (
    <div className={props.classes}>
        {props.children}
    </div>
)

export default withClass;
