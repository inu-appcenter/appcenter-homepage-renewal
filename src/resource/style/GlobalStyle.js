import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  //이 안에 전체 프로젝트에 적용될 css를 작성하면 됩니다~!
  body {
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }
`

export default GlobalStyle;