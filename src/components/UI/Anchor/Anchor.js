import React from 'react';
import classes from './Anchor.css';

const Anchor = (props) => (

    <a
        className={props.btnType}
        href={props.link}
        target={props.target}
    >
        {props.children}
    </a>
);

export default Anchor;