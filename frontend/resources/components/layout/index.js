import React from 'react';
import Header from '../header';
import Footer from '../footer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
