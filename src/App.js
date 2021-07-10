import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Home from './pages/home';
import Container from './theme/container';

import client from './Apollo.config';

const App = () => (
    <ApolloProvider client={client}>
        <Container>
            <Suspense fallback={<p>Loading...</p>}>
                <Route exact path='/' component={Home} />
            </Suspense>
        </Container>
    </ApolloProvider>
);

export default App;
