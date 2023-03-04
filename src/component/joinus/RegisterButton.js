import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {Button} from "@mui/material";
import styled from "styled-components";

export default function RegisterButton() {
    return (
        <ButtonWrapper>
            <Button
                variant='outlined'
                href=""
                target="_blank"
            >
                지원하러 가기
                <ArrowRightAltIcon sx={{fontSize: 40}}/>
            </Button>
        </ButtonWrapper>
    );
}

const ButtonWrapper = styled.div`
    text-align: center;
    & > Button {
      width: fit-content;
      color: ${props => props.theme.color.primary};
      font-weight: 600;
      background: ${props => props.theme.color.white};
      margin: 2rem auto 0;
      padding: 6px 18px;
      border: 1px solid ${props => props.theme.color.primary};
      border-radius: 999px;
    
      font-size: ${props => props.theme.fontSize.bigDesktop.text};
      @media (max-width: 1800px) {
        font-size: ${props => props.theme.fontSize.desktop.text};
      }
      @media (max-width: 1200px) {
        font-size: ${props => props.theme.fontSize.tablet.text};
      }
      @media (max-width: 768px) {
        font-size: ${props => props.theme.fontSize.smallTablet.text};
      }
    }
`;