import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
    padding: 5%;
    color: ${ ({ theme }) => theme.colors.text};

    & h1 {
        font-size: 350%
    }
`;


const Layout = () => (
    <StyledLayout>
        <div className="row parentDiv">
            <h1>React Boilerplate</h1>
            <h2>Hello World!</h2>

        </div>
    </StyledLayout>
);

export default Layout;