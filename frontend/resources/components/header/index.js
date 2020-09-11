import React from 'react';
import Router from 'next/router'
import Link from 'next/link'
import logo from '../../assets/images/logo.svg'
import './styles.scss';

const Header = () => {
    // const sticky = () => {
    //     var header = document.getElementById("myHeader");
    //     var sticky = header.offsetTop;
    //     if (window.pageYOffset > sticky) {
    //       header.classList.add("sticky");
    //     } else {
    //       header.classList.remove("sticky");
    //     }
    //   }

    // useEffect(() => {
    //     window.onscroll = () => sticky();

    // }, [])

    return (
        <header id="myHeader" className="global-header">
            <nav className="wrapper w-display">
                <Link href='/'>
                    <a className="global-header__logo" onClick={() => Router.reload()}>
                        <img src={logo} alt="logo" height="60" />
                    </a>
                </Link>
                <ul className="global-header__social">
                    <li>
                        <a className="social__facebook" href="https://www.facebook.com/sharer/sharer.php?text=The+airline+industry+is+ditching+change+fees+because+it%E2%80%99s+desperate+for+people+to+fly&amp;u=https%3A%2F%2Fwww.theverge.com%2F2020%2F8%2F31%2F21409152%2Funited-delta-airlines-change-fee-eliminate-covid" data-analytics-social="facebook">
                            {/* <svg role="img" class="p-svg-icon c-social-buttons__svg"><use href="#icon-facebook"></use></svg> */}
                            <span className="c-social-buttons__text">
                                Facebook
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
