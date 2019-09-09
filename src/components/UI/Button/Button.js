import React from 'react';
import classes from './Button';

const Button = (props) => (
    <button
        className={props.class}
        onClick={props.clicked}

    >
        {props.children}
    </button>
);

export default Button;
