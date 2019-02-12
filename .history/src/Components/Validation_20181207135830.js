import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text long enough':

    if(props.inputLength <= 5){
        validationMessage ='Text too short';
    }

    return (
        <div>
            <div>text too short</div>
            <div>text long enough</div>
        </div>
    );
};

export default validation;