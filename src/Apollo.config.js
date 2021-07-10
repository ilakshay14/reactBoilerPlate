import { ApolloClient, InMemoryCache, split } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from 'apollo-utilities';

const token = localStorage.getItem('userToken');
const authHeader = token ? `Bearer ${token}` : '';

const wsLink = new WebSocketLink({
    uri: process.env.SUBSCRIPTION_URI,
    options: {
        reconnect: true,
        connectionParams: {
            Authorization: authHeader,
            'x-api-key': process.env.API_KEY,
        },
    },
});

const authLink = setContext(() => ({
    headers: {
        Authorization: authHeader,
        'x-api-key': process.env.API_KEY,
    },
}));

// eslint-disable-next-line new-cap
const httpLink = new createHttpLink({
    uri: process.env.SERVER_URI,
});

const splitLink = split(({ query }) => {
    const definition = getMainDefinition(query);
    return (
        definition.kind === 'OperationDefinition'
        && definition.operation === 'subscription'
    );
}, wsLink, authLink.concat(httpLink));

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

export default client;
