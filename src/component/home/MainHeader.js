import styled from "styled-components";
import {Link} from "react-router-dom";
import {fullPath} from "../../resource/string/routerPath";
import logo from "../../resource/img/navbar_logo_main.svg";
import logo_medium from "../../resource/img/navbar_logo_medium.svg";
import logo_small from "../../resource/img/navbar_logo_small.svg";
import {navBarInfoList} from "../../resource/string/navBarString";
import {Box, Toolbar} from "@mui/material";
import "swiper/css";
import "swiper/css/effect-fade";
import WelcomeImage from "./WelcomeImage";

export default function MainHeader(){
    return(
        <Box sx={{width: '100%'}}>
            <AppBar>
                <StyledToolbar>
                    <Logo to={fullPath.home}>
                        <img className="logo" src={logo} alt='Inu App Center. logo'/>
                        <img className="logo--medium" src={logo_medium} alt='Inu App Center. logo'/>
                        <img className="logo--small" src={logo_small} alt='Inu App Center. logo'/>
                    </Logo>
                    <NavBar>
                        {navBarInfoList.map((item) =>
                            <Link
                                key={item.id}
                                className='navbar__item'
                                to={item.url}
                            >{item.title}</Link>
                        )}
                    </NavBar>
                </StyledToolbar>
                <WelcomeBox>
                    <WelcomeText>
                        <h2>안녕하세요!</h2>
                        <h1>인천대학교</h1>
                        <h1><span>앱센터</span>입니다</h1>
                    </WelcomeText>
                    <WelcomeImage />
                </WelcomeBox>
            </AppBar>
        </Box>
    )
}
const AppBar = styled.div`
    background: ${props => props.theme.color.primary};
    height: 100vh;
    box-sizing: border-box;
    padding: 2rem ${props => props.theme.padding.navBarInside} 0;
    border-bottom-left-radius: 50vh;
    @media(max-width: 768px) {
        border-bottom-left-radius: 20vw;
        border-bottom-right-radius: 20vw;
    }
    @media(max-width: 576px) {
        height: 25rem;
    }
`;
const StyledToolbar = styled(Toolbar)`
    height: 5rem;
    @media(max-width: 576px) {
        height: 8rem;
        flex-direction: column;
    }
`;
const Logo = styled(Link)`
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
const NavBar = styled.div`
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
        width: 100%;
    }
`;
const WelcomeBox = styled.div`
    margin: 3rem auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    @media(max-width: 576px) {
        margin: 1rem auto;
    }
`;
const WelcomeText = styled.div`
    width: 300px;
    min-width: 300px;
    margin: 0 auto;
    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 0.5;
        color: white;
    }
    h2 {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 2;
        color: white;
    }
    span {
        color: ${props => props.theme.color.secondary};
    }
    @media(max-width: 768px) {
        text-align: center;
    }
    @media(max-width: 576px) {
        width: 220px;
        min-width: 220px;
        h1 {
          font-size: 2.5rem;
        }
        h2 {
            font-size: 1.5rem;
            line-height: 1;
        }
    }
`;
