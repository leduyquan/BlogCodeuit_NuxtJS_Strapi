import React, {useEffect} from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import logo from '../../assets/images/logo.svg'
import socialIcon from '../../assets/images/social.svg'
import './styles.scss';

const Header = () => {
    const router = useRouter()

    useEffect(() => {
        window.onscroll = () => sticky();
    }, [])

    const sticky = () => {
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
    }

    const goHomePage = () => {
        if (router.pathname === '/') router.reload();
        else router.push('/');

    }

    return (
        <header id="myHeader" className="global-header">
            <nav className="wrapper h-center">
                <div className="flex flex-vertical-centered">
                    <Link href='/'>
                        <a className="global-header__logo" onClick={goHomePage}>
                            <img src={logo} alt="logo" height="60" />
                        </a>
                    </Link>
                    {/* <ul className="global-header__social">
                        <li>
                            <Link href="https://www.facebook.com/sharer/sharer.php?text=The+airline+industry+is+ditching+change+fees+because+it%E2%80%99s+desperate+for+people+to+fly&amp;u=https%3A%2F%2Fwww.theverge.com%2F2020%2F8%2F31%2F21409152%2Funited-delta-airlines-change-fee-eliminate-covid">
                                <a className="social-facebook" title="Đăng lên Facebook" data-analytics-social="facebook">
                                    <svg><use href={socialIcon + "#icon-facebook"}></use></svg>
                                    <span className="social-buttons" >
                                        Facebook
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </ul> */}
                </div>
                <span className="global-header__title">Từ Teenager đến Developer</span>
            </nav>
        </header>
    );
};

export default Header;
