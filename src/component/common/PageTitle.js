import styled from "styled-components";
import {viewHeightCalc} from "../../lib/viewportCalculate";

export const
    PageTitle = ({title, topMargin = viewHeightCalc(100), subTitle = null, bottomMargin='0px'}) => {
    return (
        <TitleTextWrap topMargin={topMargin} bottomMargin={bottomMargin}>
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
  margin-bottom: ${props => props.bottomMargin};
  text-transform: uppercase;
`

const TitleTextBox = styled.span`
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
