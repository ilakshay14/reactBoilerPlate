import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

import classes from './Layout.css';

const Layout = () => (
    <>
        <div className="row parentDiv">
            <h1>React Boilerplate</h1>
            <p>Welcome to my basic React boilerplate. Thanks for cloning it.</p>
            <br />
            <div className="span-1-of-2 divLeft">
                <h4>Boilerplate Features -</h4>
                <br />
                <ul>
                    <li>Basic UI elements are available
                    <ol>
                            <li>Anchor</li>
                            <li>Button</li>
                            <li>Ion Icons</li>
                            <li>Image</li>
                            <li>Input</li>
                        </ol>
                    </li>
                    <li>Higher Order Wrapping component ready to use</li>
                    <li>GRID CSS</li>
                    <li>ION ICONS</li>
                    <li>ANIMATE CSS</li>
                    <li>NORMALISE CSS</li>
                    <li>Media queries</li>
                    <li>Basic WEBPACK config</li>
                    <li>LATO Google Font</li>

                </ul>
            </div>
            <div className="span-1-of-2 divRight">
                <h4>Instructions</h4>
                <br />
                <ul>
                    <li>use command npm install to install all the dependencies if you already haven't</li>
                    <li>npm start to run</li>
                    <li>npm build to get the production build</li>
                    <li>
                        <strong>
                            Remove all the code from this Layout component and start adding your code here.
                        </strong>
                    </li>
                </ul>
            </div>

        </div>
    </>
);

export default Layout;