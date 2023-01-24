import styled from "styled-components";

export const PageTitle = ({title}) =>{
    return(
        <TitleTextWrap>
            <TitleTextBox>{title}</TitleTextBox>
            <TitleTextBox> </TitleTextBox>
        </TitleTextWrap>
    )
}

const TitleTextWrap = styled.div`
  display: flex;
  justify-content: space-around;
`

const TitleTextBox = styled.h1`
  font-size: 70px;
  font-weight: 700;
  color: ${props => props.theme.color.primary};
`