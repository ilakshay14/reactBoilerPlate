import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home';
import Container from './theme/container';

const App = () => (
    <Container>
        <Suspense fallback={<p>Loading...</p>}>
            <Route exact path='/' component={Home} />
        </Suspense>
    </Container>
);

export default App;
