import styled from "styled-components";
import speechBubble from "../../resource/img/speech-bubble.svg";
import {partInfoByName} from "../../resource/string/partInfo";

export default function SpeechBubble({partName = 'Android'}){
    return(
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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
  max-width: 50%;
  font-size: ${props=>props.theme.fontSize.default.plainText};
  @media(max-width: 1200px) {
    font-size: 25px;
  }
  @media(max-width: 768px) {
    font-size: 20px;
  }
  @media(max-width: 576px) {
    font-size: 15px;
  }
`

const SpeechBubbleContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 70%;
  margin:16px;
`
