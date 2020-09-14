import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './style.scss';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="w-display m-top-35">
                    <div className="segment w-content">{children}</div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
