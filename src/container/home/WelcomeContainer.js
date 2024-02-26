import styled from 'styled-components';
import WelcomeText from '../../component/welcome/WelcomeText';
import WelcomeImage from '../../component/welcome/WelcomeImage';

export default function WelcomeContainer() {
    return (
        <WelcomeWrapper>
            <ContentsWrapper>
                <WelcomeText />
                <WelcomeImage />
            </ContentsWrapper>
        </WelcomeWrapper>
    );
}

const WelcomeWrapper = styled.div`
    width: 100%;
    background: ${(props) => props.theme.color.primary};
    height: 100vh;
    box-sizing: border-box;
    padding-top: 7rem;
    border-bottom-left-radius: 50vh;
    @media (max-width: 768px) {
        border-bottom-left-radius: 20vw;
        border-bottom-right-radius: 20vw;
    }
    @media (max-width: 576px) {
        padding-top: 8.5rem;
        height: 25rem;
    }
`;

const ContentsWrapper = styled.div`
    width: 750px;
    margin: 3rem auto;
    display: flex;
    justify-content: space-between;
    @media (min-height: 700px) {
        margin-top: calc(
            40vh - ${7 * 0.4}rem - ${520 * 0.4}px
        ); // header 부분 제외한 화면 크기의 위에서 40% 위치
    }
    @media (max-width: 768px) {
        width: unset;
    }
    @media (max-width: 576px) {
        margin: 1rem auto;
    }
`;
