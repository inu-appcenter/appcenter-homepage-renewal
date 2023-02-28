import styled from "styled-components";
import {Link} from "react-router-dom";
import {viewHeightCalc, viewWidthCalc} from "../../lib/viewportCalculate";
import registerStep from "../../resource/string/registerStep";


export default function RegisterStep(){
    return(
        <CardWrap>
            {
                registerStep.map((item)=>(
                    <Card key={item.key}>
                        <p className="title">{item.step}</p>
                        <p></p>
                        <p className="question">{item.content}</p>
                        <p></p>
                    </Card>
                ))
            }
        </CardWrap>
    );
}

const CardWrap = styled.div`
  color: ${props => props.theme.color.black};
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  column-gap: ${viewWidthCalc(70)};
  row-gap: ${viewHeightCalc(30)};
`;

const Card = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${props => props.theme.color.primaryLight};
  border-radius: 30px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  .title {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    padding: 8px 16px 8px 16px;
    width:100px;
    color: ${props => props.theme.color.primary};
    font-weight: 700;
    border-radius: 24px;
    background: ${props => props.theme.color.white};
  }
  .question {
    grid-column: 1 / 3;
    color: ${props => props.theme.color.black};
    font-weight: 600;
    margin: 0 40px;
  }
`
