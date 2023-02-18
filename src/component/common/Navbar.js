import {fullPath} from "../../resource/string/routerPath";
import logo from "../../resource/img/navbar_logo/navbar_logo.svg";
import logo_medium from "../../resource/img/navbar_logo/navbar_logo_medium.svg";
import logo_small from "../../resource/img/navbar_logo/navbar_logo_small.svg";
import {navBarInfoList} from "../../resource/string/navBarString";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import {Toolbar} from "@mui/material";
import {useLayoutEffect, useState} from "react";
import {debounce, throttle} from "lodash";

export default function Navbar() {
    const location = useLocation();
    const [prevY, setPrevY] = useState(0);
    const [navVisibility, setNavVisibility] = useState(true);
    const [isTop, setIsTop] = useState(true);
    const [scrollDirection, setScrollDirection] = useState(true)    //  true: going up, false: going down
    const handleScroll = throttle(
        e => {
            const diff = window.scrollY - prevY;
            if (diff < 0 && !navVisibility) { // going up
                setScrollDirection(true);
                setNavVisibility(true);
            } else if (diff > 0 && navVisibility) {
                setScrollDirection(false);
                setNavVisibility(false);
            }
            setPrevY(window.scrollY);
        }, 500
    );
    const stopScroll = debounce(
        e => {
            if (window.scrollY < 50) {
                setNavVisibility(true);
                setIsTop(true);
            } else {
                setIsTop(false);
                scrollDirection ? setNavVisibility(true) : setNavVisibility(false);
            }
        }, 1500
    );
    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll, stopScroll]);
    useLayoutEffect(() => {
        window.addEventListener('scroll', stopScroll);
        return () => {
            window.removeEventListener('scroll', stopScroll);
        }
    })
    
    return (
        <StyledToolbar className={navVisibility ? (isTop ? 'top' : '') : 'hide'}>
            <NavLogo to={fullPath.home}>
                <img className="logo" src={logo} alt='Inu App Center. logo'/>
                <img className="logo--medium" src={logo_medium} alt='Inu App Center. logo'/>
                <img className="logo--small" src={logo_small} alt='Inu App Center. logo'/>
            </NavLogo>
            <NavItems>
                {navBarInfoList.map((item) =>
                    <Link
                        key={item.id}
                        className={location.pathname===item.url ? 'navbar__item active' : 'navbar__item'}
                        to={item.url}
                    >{item.title}</Link>
                )}
            </NavItems>
        </StyledToolbar>
    );
}

const StyledToolbar = styled(Toolbar)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${props => props.theme.color.primary};
    padding: 1rem ${props => props.theme.padding.navBarInside};
    border-bottom-left-radius: 10vw;
    border-bottom-right-radius: 10vw;
    box-sizing: border-box;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    transition: .5s;
    transition-delay: .1s;
    z-index: 2000;
    &.hide {
        visibility: hidden;
        //opacity: 0;
        top: -9rem
    }
    &.top {
        box-shadow: none;
    }
    @media(max-width: 576px) {
        height: 9rem;
        flex-direction: column;
    }
`;
const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    flex-grow: 1;
    .logo {
        object-fit: cover;
        width: 400px;
        @media(max-width: 992px) {
            width: 300px;
        }
        @media(max-width: 768px) {
            display: none;
        }
    }
    .logo--medium {
        display: none;
        width: 100px;
        @media(max-width: 576px) {
            display: inline;
        }
    }
    .logo--small {
        display: none;
        width: 100px;
        @media(max-width: 768px) {
            display: inline;
        }
        @media(max-width: 576px) {
            display: none;
        }
    }
`
const NavItems = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    .navbar__item {
        color: ${props => props.theme.color.white};
        font-size: 1.25rem;
        font-weight: 600;
        @media(max-width: 992px) {
            font-size: 1rem;
        }
        @media(max-width: 768px) {
            font-size: 1.25rem;
        }
        @media(max-width: 576px) {
            font-size: 1rem;
            margin-top: 1rem;
        }
    }
    .navbar__item.active {
        color: ${props => props.theme.color.secondary};
    }
    @media(max-width: 576px) {
        width: 80%;
    }
`;