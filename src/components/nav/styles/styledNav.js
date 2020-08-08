import styled from 'styled-components';
import { FlexRow } from '../../../theme/defaultStyles';

const StyledNav = styled.nav`

    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    background-color: #ffffff;
    z-index: 100;
    ${FlexRow}
    justify-content:space-between;

    

    .navbrand{
        margin-left: 2%;
        ${FlexRow}
    }

    .navbrand p {
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.5em;
    }

    .navmenu {
        //border: 1px solid black;
        width: 350px;
        ${FlexRow}
        margin-right: 2%;
    }

    .navmenu ul {
        width: 100%;
        ${FlexRow};
        justify-content: space-evenly;
        list-style: none;
    }

    .navmenu li {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0.02em;
        padding: 3px;
        cursor: pointer;
        
        a {
            padding: 15px;            
            transition: box-shadow 0.2s, padding-bottom 0.2s;
        }

        a:hover{
            box-shadow: 0 8px 6px -6px black;
        }
    }

    @media screen and (min-width: 768px) {
        box-shadow: 0px 4px 5px rgba(255, 255, 255, 0.25);
    }

`;

export default StyledNav;