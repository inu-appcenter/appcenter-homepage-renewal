import styled from "styled-components";
import WelcomeText from "../../component/welcome/WelcomeText";
import WelcomeImage from "../../component/welcome/WelcomeImage";

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
    background: ${props => props.theme.color.primary};
    height: 100vh;
    box-sizing: border-box;
    padding: 7rem ${props => props.theme.padding.navBarInside} 0;
    border-bottom-left-radius: 50vh;
    @media(max-width: 768px) {
        border-bottom-left-radius: 20vw;
        border-bottom-right-radius: 20vw;
    }
    @media(max-width: 576px) {
        height: 25rem;
    }
`;
const ContentsWrapper = styled.div`
    margin: 3rem auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    @media(max-width: 576px) {
        margin: 1rem auto;
    }
`;