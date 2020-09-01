import React from 'react';
import Head from 'next/head';
import withData from '../utils/apollo';
import Nav from "../components/nav";
import { ApolloProvider } from '@apollo/react-hooks';
import '../assets/css/style.css';

const App = ({ Component, pageProps, apollo }) => {
    return (
        <ApolloProvider client={apollo}>
            <Head>
                <title>Codekhavui</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
                <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
            </Head>
            <Nav></Nav>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default withData(App);