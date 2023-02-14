import styled from "styled-components";
import {Box} from "@mui/material";
import WelcomeImage from "./WelcomeImage";
import MainToolbar from "./MainToolbar";

export default function MainHeader(){
    return(
        <Box sx={{width: '100%'}}>
            <AppBar>
                <MainToolbar />
                <WelcomeBox>
                    <WelcomeText>
                        <h2>안녕하세요!</h2>
                        <h1>인천대학교</h1>
                        <h1><span>앱센터</span>입니다</h1>
                    </WelcomeText>
                    <WelcomeImage />
                </WelcomeBox>
            </AppBar>
        </Box>
    )
}
const AppBar = styled.div`
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
const WelcomeBox = styled.div`
    margin: 3rem auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    @media(max-width: 576px) {
        margin: 1rem auto;
    }
`;
const WelcomeText = styled.div`
    width: 300px;
    min-width: 300px;
    margin: 0 auto;
    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 0.5;
        color: white;
    }
    h2 {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 2;
        color: white;
    }
    span {
        color: ${props => props.theme.color.secondary};
    }
    @media(max-width: 768px) {
        text-align: center;
    }
    @media(max-width: 576px) {
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
