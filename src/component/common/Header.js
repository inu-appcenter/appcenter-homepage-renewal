import styled from "styled-components";
import {Link} from "react-router-dom";

// TODO: 디버깅 - HomePage와 SubPage에만 Header가 호출되어 sub 안의 페이지에서는 active 상태가 바뀌지 않음. (hook 사용하여 리렌더 되도록 바꾸기?)
const Header = props => {
  console.log(currentPath);
  return (
    <HeaderBox>
      <LogoContainer to='/'>
        <img src='../../img/logo720_128.png' alt='INU_APPCENTER' />
      </LogoContainer>
      <NavBar>
        <Links />
      </NavBar>
    </HeaderBox>
  );
}

export default Header;

let currentPath = window.location.pathname;

const navItemList = [
  {link: '/', text: 'Home'},
  {link: '/sub/join', text: 'Join Us'},
  {link: '/sub/faq', text: 'FAQ'},
  {link: '/sub/faq/detail', text: 'FAQ Detail'},
];
const Links = () =>
  navItemList.map((item) =>
    <Link
      key={item.link}
      className={item.link === currentPath ? 'navbar__item active' : 'navbar__item'}
      to={item.link}
    >{item.text}</Link>
  );

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
  }
  & .navbar__item.active {
    color: #FEC853;
  }
  & .navbar__item + .navbar__item {
    margin-left: 100px;
  }
`;
