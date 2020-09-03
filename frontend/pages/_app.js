import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import Head from 'next/head';
import withData from '../resources/utils/apollo';
// import Nav from '..resources/components/nav';
import '../resources/assets/css/style.scss';

const App = ({ Component, pageProps, apollo }) => {
    return (
        <ApolloProvider client={apollo}>
            <Head>
                <title>Codekhavui</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
            </Head>
            {/* <Nav></Nav> */}
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default withData(App);