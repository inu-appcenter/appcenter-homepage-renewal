import styled from "styled-components";
import {Link} from "react-router-dom";
import {useState} from "react";

const Header = props => {
  const initialPage = navItemList.filter(item => item.link === window.location.pathname);
  const [currentPage, setPage] = useState(initialPage[0].text);
  return (
    <HeaderBox>
      <LogoContainer to='/'>
        <img src='../../img/logo720_128.png' alt='INU_APPCENTER' />
      </LogoContainer>
      <NavBar>
        {navItemList.map((item) =>
          <Link
            key={item.text}
            className={item.text === currentPage ? 'navbar__item active' : 'navbar__item'}
            onClick={e => setPage(item.text)}
            to={item.link}
          >{item.text}</Link>
        )}
      </NavBar>
    </HeaderBox>
  );
}

export default Header;

const navItemList = [
  {link: '/', text: 'Home'},
  {link: '/sub/join', text: 'Join Us'},
  {link: '/sub/faq', text: 'FAQ'},
  {link: '/sub/faq/detail', text: 'FAQ Detail'},
];

const HeaderBox = styled.div`
  height: 5rem;
  padding: 0 5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1773E0;  // palette 설정 후 바꿀 것
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
    color: #fff;
    font-size: 1.125rem;
    font-weight: 600;
  }
  & .navbar__item.active {
    color: #FEC853;
  }
  & .navbar__item + .navbar__item {
    margin-left: 100px;
  }
`;
