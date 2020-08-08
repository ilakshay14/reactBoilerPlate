import React from 'react';

const Anchor = ({ link, target, children }) => (<a href={link} target={target}>{children}</a>);

export default Anchor;