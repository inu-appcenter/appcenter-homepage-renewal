import styled from 'styled-components';
import { viewHeightCalc, viewWidthCalc } from '../../lib/viewportCalculate';
import registerStep from '../../resource/string/registerStep';

export default function RegisterStep() {
    return (
        <CardWrap>
            {registerStep.map((item) => (
                <Card key={item.key}>
                    <p className='title'>{item.step}</p>
                    <p className='question'>{item.content}</p>
                </Card>
            ))}
        </CardWrap>
    );
}

const CardWrap = styled.div`
    padding: 0 6rem;
    color: ${(props) => props.theme.color.black};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    @media (max-width: 1200px) {
        padding: 0 3rem;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    row-gap: ${viewHeightCalc(30)};
    column-gap: ${viewWidthCalc(20)};
`;

const Card = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${(props) => props.theme.color.primaryLight};
    border-radius: 30px;
    font-size: 20px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
    .title {
        margin: 12px 20px 0;
        padding: 8px 16px;
        color: ${(props) => props.theme.color.primary};
        font-weight: 700;
        border-radius: 24px;
        background: ${(props) => props.theme.color.white};
    }
    .question {
        color: ${(props) => props.theme.color.black};
        font-weight: 600;
        margin: 20px 40px 30px;
        word-break: keep-all;
    }
`;
