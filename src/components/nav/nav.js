import React from 'react';
import StyledNav from './styles/styledNav';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <StyledNav>
            <div className="navbrand">
                <a href="#home"><p>LO<br />GO</p></a>
            </div>
            <div className="navmenu">
                <ul>
                    <li><Link to="/">link1</Link></li>
                    
                    <li><Link to="/">link2</Link></li>
                    
                </ul>
            </div>

        </StyledNav>
    );
}

export default Navbar;