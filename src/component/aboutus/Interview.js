import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../../lib/viewportCalculate";
import {interviewAnswer, interViewQuestion} from "../../resource/dummy/aboutUs";

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
  font-size: 40px;
  white-space: pre-line;
  margin-right: ${viewWidthCalc(60)};
`

const InterViewBox = styled.div`
  flex-basis: 10%;
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 40px;
  background-color: ${props => props.theme.color.primaryLight};
  padding: ${viewWidthCalc(40)};
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
`
