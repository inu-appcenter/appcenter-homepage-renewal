import styled from "styled-components";
import {viewHeightCalc} from "../../lib/viewportCalculate";

export const PageTitle = ({title, topMargin=viewHeightCalc(100)}) =>{
    return(
        <TitleTextWrap topMargin={topMargin}>
            <TitleTextBox>{title}</TitleTextBox>
        </TitleTextWrap>
    )
}

const TitleTextWrap = styled.div`
  display: flex;
   margin-top:${props => props.topMargin};
  text-transform: uppercase;
`

const TitleTextBox = styled.h1`
  margin: 
          0 
          ${props=>props.theme.margin.pageTitleOutSide} 
          0 
          ${props=>props.theme.margin.pageTitleOutSide};
  font-size: 55px;
  font-weight: 700;
  color: ${props => props.theme.color.primary};
`
