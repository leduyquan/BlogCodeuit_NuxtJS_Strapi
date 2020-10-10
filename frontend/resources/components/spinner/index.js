import React, { useEffect } from 'react';
import './styles.scss';

const Spinner = () => {
    return (
        <div class="page-loader">
            <div class="loader">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        </div>
    );
};

export default Spinner;
