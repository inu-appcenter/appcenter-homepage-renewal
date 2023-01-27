import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {Box, Toolbar} from "@mui/material";
import {navBarInfoList} from "../../resource/string/navBarString";
import logo from '../../resource/img/navbar_logo.svg'
import {fullPath} from "../../resource/string/routerPath";

const Header = () => {
    const location = useLocation();
    return (
        <>
            <Box sx={{width: '100%'}}>
                <AppBar>
                    <Toolbar sx={{height:'100%'}}>
                        <Logo to={fullPath.home}>
                            <img src={logo} alt='Inu App Center. logo'/>
                        </Logo>
                        <NavBar>
                            {navBarInfoList.map((item) =>
                                <Link
                                    key={item.id}
                                    className={item.url === location.pathname ? 'navbar__item active' : 'navbar__item'}
                                    to={item.url}
                                >{item.title}</Link>
                            )}
                        </NavBar>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default Header;

const AppBar = styled.div`
  position: sticky;
  height: ${props => props.theme.height.headerBarHeight};
  padding-left:  ${props => props.theme.padding.navBarInside};
  padding-right: ${props => props.theme.padding.navBarInside};
  background: ${props => props.theme.color.primary};
  border-bottom-left-radius: 8rem;
  border-bottom-right-radius: 8rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
`;
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  flex-grow: 1;
  img {
    object-fit: cover;
    height: 100%;
  }
`
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  & .navbar__item {
    color: ${props => props.theme.color.white};
    font-size: 1.125rem;
    font-weight: 600;
  }

  & .navbar__item.active {
    color: ${props => props.theme.color.secondary};
  }
`;
