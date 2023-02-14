import styled from "styled-components";
import {viewHeightCalc} from "../../lib/viewportCalculate";

export const PageTitle = ({title, topMargin = viewHeightCalc(100), subTitle = null}) => {
    return (
        <TitleTextWrap topMargin={topMargin}>
            <TitleTextBox>{title}</TitleTextBox>
            {
                subTitle &&
                <SubTitle>
                    {subTitle}
                </SubTitle>
            }
        </TitleTextWrap>
    )
}

const TitleTextWrap = styled.div`
  margin-top: ${props => props.topMargin};
  text-transform: uppercase;
`

const TitleTextBox = styled.h1`
  margin: 0 ${props => props.theme.margin.pageTitleOutSide};
  font-size: ${props => props.theme.fontSize.default.title};
  font-weight: 700;
  color: ${props => props.theme.color.primary};
`

const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin:0;
  color: ${props => props.theme.color.gray}
`
