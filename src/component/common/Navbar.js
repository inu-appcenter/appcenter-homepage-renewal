import {fullPath} from "../../resource/string/routerPath";
import logo from "../../resource/img/navbar_logo/navbar_logo.svg";
import logo_medium from "../../resource/img/navbar_logo/navbar_logo_medium.svg";
import logo_small from "../../resource/img/navbar_logo/navbar_logo_small.svg";
import {navBarInfoList} from "../../resource/string/navBarString";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import {Toolbar} from "@mui/material";
import {useLayoutEffect, useState} from "react";
import useThrottle from "../../lib/hooks/useThrottle";
import useDebounce from "../../lib/hooks/useDebounce";
import {viewWidthCalc} from "../../lib/viewportCalculate";

export default function Navbar() {
    const location = useLocation();
    const [prevY, setPrevY] = useState(0);
    const [navOpaque, setNavOpaque] = useState(true);
    const [navVisibility, setNavVisibility] = useState(true);
    const [scrollDirection, setScrollDirection] = useState(true)    //  true: going up, false: going down
    const handleScroll = useThrottle(
        () => {
            const diff = window.scrollY - prevY;
            if (diff < 0 && !navVisibility) { // going up
                setScrollDirection(true);
                setNavVisibility(true);
            } else if (diff > 0 && navVisibility) {
                setScrollDirection(false);
                setNavVisibility(false);
            }
            setNavOpaque(false);
            setPrevY(window.scrollY);
        }, 0
    );
    const stopScroll = useDebounce(
        () => {
            if (window.scrollY < 50)
                setNavVisibility(true);
            else
                scrollDirection ? setNavVisibility(true) : setNavVisibility(false);
            setNavOpaque(true);
        }, 500
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
        <StyledToolbar className={navVisibility ? '' : 'hide'} opaque={navOpaque.toString()}>
            <NavLogo to={fullPath.home}>
                <img className="logo" src={logo} alt='Inu App Center. logo'/>
                <img className="logo--medium" src={logo_medium} alt='Inu App Center. logo'/>
                <img className="logo--small" src={logo_small} alt='Inu App Center. logo'/>
            </NavLogo>
            <NavItems>
                {navBarInfoList.map((item) =>
                    <div className='navbar__item' key={item.id}>
                        <Link
                            key={item.id}
                            className={location.pathname.includes(item.url) ? 'navbar__item_title active' : 'navbar__item_title'}
                            to={item.url}
                        >{item.title}</Link>
                        <div className='navbar__item_child'>
                            {item.child && item.child.map(sub =>
                                <ChildLink
                                    key={sub.id}
                                    to={sub.url}
                                    point={location.pathname === sub.url ? 1 : 0}
                                >{sub.title}</ChildLink>
                            )}
                        </div>
                    </div>
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
  padding: 1rem ${viewWidthCalc(150)};
  border-bottom-left-radius: 10vw;
  border-bottom-right-radius: 10vw;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(54, 113, 217, .25);
  transition: .5s;
  z-index: 2000;
  opacity: ${props=>props.opaque ? 1 : .5};

  &.hide {
    visibility: hidden;
    //opacity: 0;
    top: -9rem
  }
  
  @media (max-width: 1200px) {
    padding: 1rem ${props => props.theme.padding.navBarInside};
  }
  @media (max-width: 576px) {
    height: 9rem;
    flex-direction: column;
  }
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
`
const NavItems = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  .navbar__item {
    position: relative;

    .navbar__item_title {
      color: ${props => props.theme.color.white};
      font-size: 1.25rem;
      font-weight: 600;
      padding: 1rem 0;
      @media (max-width: 992px) {
        font-size: 1rem;
      }
      @media (max-width: 768px) {
        font-size: 1.25rem;
      }
      @media (max-width: 576px) {
        font-size: 1rem;
        margin-top: 1rem;
      }
    }

    .navbar__item_title.active {
      color: ${props => props.theme.color.secondary};
    }

    .navbar__item_child {
      width: 8rem;
      position: absolute;
      top: 2rem;
      left: calc(50% - 4rem);
      display: flex;
      justify-content: center;
      flex-direction: column;
      background: ${props => props.theme.color.primary};
      border-bottom-right-radius: 1.5rem;
      border-bottom-left-radius: 1.5rem;
      box-shadow: 0 4px 4px rgba(54, 113, 217, .25);
      transition: opacity .5s;
      visibility: hidden;
      opacity: 0;

      a {
        font-size: 1.125rem;
        text-align: center;
        margin: 0.75rem 0;
      }

      @media (max-width: 992px) {
        width: 6rem;
        left: calc(50% - 3rem);
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
        a {
          font-size: 1rem;
          margin: .5rem 0;
        }
      }
      @media (max-width: 768px) and (min-width: 577px) {
        width: 8rem;
        left: calc(50% - 4rem);
        border-bottom-right-radius: 1.5rem;
        border-bottom-left-radius: 1.5rem;
        a {
          font-size: 1.125rem;
          margin: 0.75rem 0;
        }
      }
    }

    @media (hover: hover) and (pointer: fine) {
      :hover .navbar__item_child {
        visibility: visible;
        opacity: 1;
      }
    }

  }

  @media (max-width: 576px) {
    width: 80%;
  }
`;

const ChildLink = styled(Link)`
  color: ${props=>props.point===1 ? props.theme.color.yellow : props.theme.color.white};
  &:hover {
    color: ${props => props.theme.color.yellow};
  }
`;
