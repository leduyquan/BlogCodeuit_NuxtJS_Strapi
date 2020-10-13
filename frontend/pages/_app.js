import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import Head from 'next/head';
import Layout from '../resources/components/layout';
import withData from '../resources/utils/apollo';
import favicon from '../resources/assets/images/favicon.ico';
import '../resources/assets/css/style.scss';

const App = ({ Component, pageProps, apollo }) => {
    return (
        <ApolloProvider client={apollo}>
            <Head>
                <title>Codeuit</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={favicon} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed|Muli&display=swap" rel="stylesheet"></link>
                <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v8.0&appId=1002148063583402&autoLogAppEvents=1" nonce="o8xuXGfe"></script>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>

        </ApolloProvider>
    )
}

export default withData(App);