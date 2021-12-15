import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Container from './theme/container';

const App = () => (
    <Container>
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </Suspense>
    </Container>
);

export default App;
