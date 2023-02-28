import styled from "styled-components";
import speechBubble from "../../resource/img/speech-bubble.svg";
import {partInfoByName} from "../../resource/string/partInfo";

export default function SpeechBubble({partName = 'Android'}) {
    return (
        <>
            <RowStack>
                <Emoji src={partInfoByName[partName].emoji} alt='emoji'/>
                <SpeechBubbleStyle>
                    <SpeechBubbleContent>
                        {partInfoByName[partName].speechBubble}
                    </SpeechBubbleContent>
                </SpeechBubbleStyle>
            </RowStack>
        </>
    )
}

const RowStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    display: none;
  }
`

const Emoji = styled.img`
  width: 10rem;
  margin-right: 70px;
`

const SpeechBubbleStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${speechBubble});
  background-repeat: no-repeat;
  padding-top: 8px;
  padding-bottom: 16px;
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
  @media (max-width: 576px) {
    font-size: ${props => props.theme.fontSize.mobile.text};
  }
`

const SpeechBubbleContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 80%;
  height: 70%;
  margin: 16px;
`
