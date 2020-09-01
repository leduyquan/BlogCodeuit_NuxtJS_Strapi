import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import withApollo from 'next-with-apollo';
import fetch from 'isomorphic-unfetch';

const GRAPHQL_URL = process.env.API_URL || "http://localhost:1337";

const link = createHttpLink({
    fetch, // Switches between unfetch & node-fetch for client & server.
    uri: GRAPHQL_URL + "/graphql"
});

export default withApollo(
    ({ initialState }) =>
        new ApolloClient({
        link: link,
        cache: new InMemoryCache()
            .restore(initialState || {})
    })
);