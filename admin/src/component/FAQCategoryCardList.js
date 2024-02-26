import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FAQCategoryCardList = ({ list }) => {
    return (
        <>
            <CardWrap>
                {list.map((item) => (
                    <Card to={item.url} key={item.id} partname={item.partName}>
                        <TitleText partname={item.partName}>
                            {item.partName}
                        </TitleText>
                        <QuestionText partname={item.partName}>
                            {item.question}
                        </QuestionText>
                        <PlusButton partname={item.partName}>더보기</PlusButton>
                    </Card>
                ))}
            </CardWrap>
        </>
    );
};

const CardWrap = styled.div`
    color: ${(props) => props.theme.color.black};
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    column-gap: 2rem;
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

// partname을 Web으로 바꾸면 원래대로
const Card = styled(Link)`
    display: grid;
    background-color: ${(props) =>
        props.partname !== 'dominion'
            ? props.theme.color.primaryLight
            : 'rgba(128,128,128,0.4)'};
    border-radius: 30px;
    font-size: 20px;
    padding: 16px 20px;
    row-gap: 1rem;
    @media (max-width: 768px) {
        font-size: 16px;
    }
    animation: fadeBottom 1s;
    @keyframes fadeBottom {
        from {
            opacity: 0;
            transform: translate3d(0, 30%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
    }
`;

// partname을 Web으로 바꾸면 원래대로
const TitleText = styled.p`
    justify-self: flex-start;
    padding: 8px 16px;
    margin: 0;
    color: ${(props) =>
        props.partname !== 'dominion'
            ? props.theme.color.primary
            : 'rgba(128,128,128,0.8)'};
    font-weight: 700;
    border-radius: 24px;
    background: ${(props) => props.theme.color.white};
`;

// partname을 Web으로 바꾸면 원래대로
const QuestionText = styled.p`
    justify-self: center;
    margin: 0;
    color: ${(props) => (props.partname !== 'dominion' ? 'black' : '#898989')};
    font-weight: 600;
`;

// partname을 Web으로 바꾸면 원래대로
const PlusButton = styled.button`
    justify-self: flex-end;
    color: ${(props) =>
        props.partname !== 'dominion'
            ? props.theme.color.primary
            : 'rgba(128,128,128,0.8)'};
    font-weight: 700;
    border-radius: 27px;
    border: none;
    background: ${(props) => props.theme.color.white};
    padding: 4px 8px;
`;

export default FAQCategoryCardList;
