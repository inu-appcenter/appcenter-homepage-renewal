import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import {navBarInfoList} from "../../resource/string/navBarString";

const Header = props => {
    const location = useLocation();
    return (
        <HeaderBox>
            <LogoContainer to='/'>
                <img src='../../img/logo720_128.png' alt='INU_APPCENTER'/>
            </LogoContainer>
            <NavBar>
                {navBarInfoList.map((item) =>
                    <Link
                        key={item.id}
                        className={item.url === location.pathname ? 'navbar__item active' : 'navbar__item'}
                        to={item.url}
                    >{item.title}</Link>
                )}
            </NavBar>
        </HeaderBox>
    );
}

export default Header;

const HeaderBox = styled.div`
  height: 5rem;
  padding: 0 5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.color.primary}; // palette 설정 후 바꿀 것
  border-bottom-left-radius: 8rem;
  border-bottom-right-radius: 8rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
`;
const LogoContainer = styled(Link)`
  margin-top: 10px;

  img {
    max-height: 3rem;
  }
`;
const NavBar = styled.div`
  display: flex;

  & .navbar__item {
    color: ${props => props.theme.color.white};
    font-size: 1.125rem;
    font-weight: 600;
  }

  & .navbar__item.active {
    color: ${props => props.theme.color.secondary};
  }

  & .navbar__item + .navbar__item {
    margin-left: 100px;
  }
`;
