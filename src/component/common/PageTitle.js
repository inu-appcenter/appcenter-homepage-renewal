import styled from "styled-components";

export const PageTitle = ({title}) =>{
    return(
        <TitleTextWrap>
            <TitleTextBox>{title}</TitleTextBox>
        </TitleTextWrap>
    )
}

const TitleTextWrap = styled.div`
  display: flex;
  margin-top:${props => props.theme.margin.pageTitleTop}
`

const TitleTextBox = styled.h1`
  margin: 
          0 
          ${props=>props.theme.margin.pageTitleOutSide} 
          0 
          ${props=>props.theme.margin.pageTitleOutSide};
  font-size: 70px;
  font-weight: 700;
  color: ${props => props.theme.color.primary};
`