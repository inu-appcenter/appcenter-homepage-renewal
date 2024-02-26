import { AbsolutePath } from '../../resource/string/routerPath';
import logo from '../../resource/img/navbar_logo/navbar_logo.svg';
import logo_medium from '../../resource/img/navbar_logo/navbar_logo_medium.svg';
import logo_small from '../../resource/img/navbar_logo/navbar_logo_small.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Toolbar } from '@mui/material';
import { useEffect, useLayoutEffect, useState } from 'react';
import useThrottle from '../../lib/hooks/useThrottle';
import useDebounce from '../../lib/hooks/useDebounce';
import { viewWidthCalc } from '../../lib/viewportCalculate';
import NavItems from './NavItems';

export default function Navbar() {
    const [prevY, setPrevY] = useState(0);
    const [navOpaque, setNavOpaque] = useState(true);
    const [navVisibility, setNavVisibility] = useState(true);
    const [scrollDirection, setScrollDirection] = useState(true); //  true: going up, false: going down
    const handleScroll = useThrottle(() => {
        const diff = window.scrollY - prevY;
        if (diff < 0 && !navVisibility) {
            // going up
            setScrollDirection(true);
            setNavVisibility(true);
        } else if (diff > 0 && navVisibility) {
            setScrollDirection(false);
            setNavVisibility(false);
        }
        setNavOpaque(false);
        setPrevY(window.scrollY);
    }, 0);
    const stopScroll = useDebounce(() => {
        if (window.scrollY < 50) {
            setNavVisibility(true);
            setNavOpaque(true);
        } else
            scrollDirection ? setNavVisibility(true) : setNavVisibility(false);
    }, 0);
    const stopScrollDelay = useDebounce(() => {
        setNavOpaque(true);
    }, 300);
    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, stopScroll]);
    useEffect(() => {
        window.addEventListener('scroll', stopScroll);
        return () => {
            window.removeEventListener('scroll', stopScroll);
        };
    });
    useEffect(() => {
        window.addEventListener('scroll', stopScrollDelay);
        return () => {
            window.removeEventListener('scroll', stopScrollDelay);
        };
    });

    return (
        <StyledToolbar
            className={navVisibility ? '' : 'hide'}
            opaque={navOpaque ? '_' : ''}
        >
            <NavLogo to={AbsolutePath.home}>
                <img className='logo' src={logo} alt='Inu App Center. logo' />
                <img
                    className='logo--medium'
                    src={logo_medium}
                    alt='Inu App Center. logo'
                />
                <img
                    className='logo--small'
                    src={logo_small}
                    alt='Inu App Center. logo'
                />
            </NavLogo>
            <NavItems visibility={navVisibility} />
        </StyledToolbar>
    );
}

const StyledToolbar = styled(Toolbar)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background: ${(props) => props.theme.color.primary};
  padding: 1rem ${viewWidthCalc(150)};
  border-bottom-left-radius: 10vw;
  border-bottom-right-radius: 10vw;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(54, 113, 217, .25);
  transition: top .5s, opacity .5s, visibility .5s;
  z-index: 2000;
  opacity: ${(props) => (props.opaque ? 1 : 0.5)};

  &.hide {
    visibility: hidden;
    top: -9rem
  }

  @media (max-width: 1200px) {
    padding: 1rem ${(props) => props.theme.padding.navBarInside};
  }
  @media (max-width: 576px) {
    height: 9rem;
    flex-direction: column;
    padding: 0;
`;

const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    flex-grow: 1;
    position: relative;
    top: -5px;

    .logo {
        object-fit: cover;
        width: 400px;
        @media (max-width: 992px) {
            width: 300px;
        }
        @media (max-width: 768px) {
            display: none;
        }
    }

    .logo--medium {
        display: none;
        width: 100px;
        @media (max-width: 576px) {
            display: inline;
        }
    }

    .logo--small {
        display: none;
        width: 100px;
        @media (max-width: 768px) {
            display: inline;
        }
        @media (max-width: 576px) {
            display: none;
        }
    }
`;
