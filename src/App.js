import styled from 'styled-components';

const StyledLayout = styled.div`
    padding: 5%;

    h1 {
        font-size: 350%
    }
`;

const App = () => {

    return (
        <StyledLayout>
            <h2>Hello World!</h2>
        </StyledLayout>
    );
}

export default App;