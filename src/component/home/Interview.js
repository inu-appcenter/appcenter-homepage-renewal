import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../../lib/viewportCalculate";
import {interviewAnswer, interViewQuestion} from "../../resource/data/aboutUs";

export default function Interview() {

    return (
        <InterViewWrapper>
            <QuestionText>
                <div>Q.</div>
                {interViewQuestion}
            </QuestionText>
            <InterViewScrollBox>
                {
                    interviewAnswer.map((item) =>
                        <InterViewBox key={item.key}>
                            <div className="answer">{item.answer}</div>
                            <div className="name">{item.name}</div>
                        </InterViewBox>
                    )
                }
            </InterViewScrollBox>
        </InterViewWrapper>
    );
}

const InterViewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${viewHeightCalc(144)};
`

const InterViewScrollBox = styled.div`
  flex-basis: 60%;
  overflow: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar{
    display: none;
  }
`

const QuestionText = styled.div`
  flex-basis: 40%;
  display: flex;
  color: ${props => props.theme.color.primary};
  font-weight: 600;
  white-space: pre-line;
  margin-right: ${viewWidthCalc(60)};
  font-size: ${props=>props.theme.fontSize.desktop.subtitle};
  @media(max-width: 1800px) {
    font-size: ${props=>props.theme.fontSize.desktop.subtitle};
  }
  @media(max-width: 1200px) {
    font-size: ${props=>props.theme.fontSize.tablet.subtitle};
  }
  @media(max-width: 768px) {
    font-size: ${props=>props.theme.fontSize.smallTablet.subtitle};
  }
  @media(max-width: 576px) {
    font-size: ${props=>props.theme.fontSize.mobile.subtitle};
  }
  @media (max-width: 280px) {
    font-size: ${props => props.theme.fontSize.fold.subtitle};
  }
`

const InterViewBox = styled.div`
  flex-basis: 10%;
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 40px;
  background-color: ${props => props.theme.color.primaryLight};
  margin-right: ${viewWidthCalc(20)};
  white-space: nowrap;
  .answer{
    white-space: pre-line;
  }
  .name {
    color: ${props => props.theme.color.primary};
    font-weight: 600;
    margin-top: ${viewHeightCalc(18)}
  }
  padding: 40px;
  @media(max-width: 1800px) {
    padding: 30px;
  }
  @media(max-width: 1200px) {
    padding: 28px;
  }
  @media(max-width: 768px) {
    border-radius: 30px;
    padding: 20px;
  }
  @media(max-width: 576px) {
    border-radius: 20px;
    padding: 16px;
  }
  @media (max-width: 280px) {
    border-radius: 10px;
    padding: 8px;
  }
`
