import React, { useEffect, useState, useRef} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import logo from '../../assets/images/logo.svg';
import socialIcon from '../../assets/images/social.svg';
import { FacebookProvider, Like , Share } from 'react-facebook';
import './styles.scss';

const Header = () => {
    const [href, setHref] = useState('https://codeuit.com');
    const router = useRouter();
    const firstRender = useRef(true);
    useEffect(() => {
        window.onscroll = () => sticky();
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHref(window.document.URL);
        }
        //window.FB && window.FB.XFBML.parse();
    
    });

    const sticky = () => {
        var header = document.getElementById('myHeader');
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

    const goHomePage = () => {
        if (router.pathname === '/') router.reload();
        else router.push('/');
    };

    return (
        <header id="myHeader" className="global-header">
            <nav className="wrapper h-center">
                <div className="flex flex-vertical-centered">
                    <Link href="/">
                        <a className="global-header__logo" onClick={goHomePage}>
                            <img src={logo} alt="logo" height="60" />
                        </a>
                    </Link>
                    {router.pathname !=='/' && <div className="global-header__social">
                        <FacebookProvider appId="1002148063583402">
                            <span >
                                <Like href={href} colorScheme="light" showFaces layout="button_count" size="large" share />
                            </span>
                        </FacebookProvider>
                    </div>}
                </div>
                <span className="global-header__title">Từ Teenager đến Developer</span>
            </nav>
        </header>
    );
};

export default Header;
