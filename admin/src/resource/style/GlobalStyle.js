import { createGlobalStyle } from 'styled-components';
import PretendardMedium from '../fonts/Pretendard-Medium.otf';
import PretendardSemiBold from '../fonts/Pretendard-SemiBold.otf';
import PretendardBold from '../fonts/Pretendard-Bold.otf';

const GlobalStyle = createGlobalStyle`
  //이 안에 전체 프로젝트에 적용될 css를 작성하면 됩니다~!
  * {
    font-family: 'NanumSquareNeo';
  }

  body {
    margin: 0;
  }

  nav {
    position: sticky;
    top: 0;
  }

  main {
    //width: 80%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  footer {
    position: relative;
    bottom: 0;
  }

  a {
    text-decoration: none;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardMedium});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardSemiBold});
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBold});
    font-weight: 700;
    font-style: normal;
  }

`;

export default GlobalStyle;
