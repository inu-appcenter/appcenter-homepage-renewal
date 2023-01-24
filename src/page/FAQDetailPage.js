import styled from "styled-components";
import {useState} from "react";
import {partString} from "../resource/string/partString";
import {Outlet, useLocation} from "react-router-dom";
import {FAQDetailPartButtonList} from "../component/FAQDetailPartButtonList";

export default function FAQDetailPage(){
  const location = useLocation();
  return(
    <>
      <FAQDetailBox>
        <FAQDetailPartButtonList
          url={location.pathname}
        />
        <Outlet/>
      </FAQDetailBox>
    </>
  );
}

const FAQDetailBox = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  max-width: 1200px;
  @media (max-width: 1400px) {
    margin: 0 100px;
  }
  h1 {
    font-size: 70px;
    font-weight: 700;
    color: ${props => props.theme.color.primary};
  }
`;

