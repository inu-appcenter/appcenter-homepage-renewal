import styled from 'styled-components';

export default function WelcomeText() {
    return (
        <TextWrapper>
            <h2>안녕하세요!</h2>
            <h1>인천대학교</h1>
            <h1>
                <span>앱센터</span>입니다
            </h1>
        </TextWrapper>
    );
}

const TextWrapper = styled.div`
    width: 300px;
    min-width: 300px;

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 0.5;
        color: ${(props) => props.theme.color.white};
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 2;
        color: ${(props) => props.theme.color.white};
    }

    span {
        color: ${(props) => props.theme.color.secondary};
    }

    @media (max-width: 768px) {
        text-align: center;
        margin: 0 auto;
    }
    @media (max-width: 576px) {
        width: 220px;
        min-width: 220px;
        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 1.5rem;
            line-height: 1;
        }
    }
`;
