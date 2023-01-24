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
`

const TitleTextBox = styled.h1`
  margin-left: 100px;
  font-size: 70px;
  font-weight: 700;
  color: ${props => props.theme.color.primary};
`