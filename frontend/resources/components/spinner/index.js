import React, { useEffect } from 'react';
import './styles.scss';

const Spinner = () => {
    return (
        <div className="page-loader">
            <div className="loader">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        </div>
    );
};

export default Spinner;
