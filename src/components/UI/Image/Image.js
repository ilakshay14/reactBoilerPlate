import React from 'react';
import classs from './Image.css';

const Image = (props) => (
    <img
        src={props.source}
        alt={props.alternateText}
    />
);

export default Image;   