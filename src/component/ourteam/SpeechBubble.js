import styled from "styled-components";
import speechBubble from "../../resource/img/speech-bubble.svg";
import {viewHeightCalc, viewWidthCalc} from "../../lib/viewportCalculate";
import {partInfoByName} from "../../resource/string/partInfo";

export default function SpeechBubble({partName = 'Android'}){
    return(
        <>
            <RowStack>
                <Emoji src={partInfoByName[partName].emoji} alt='emoji'/>
                <SpeechBubbleStyle>
                    {partInfoByName[partName].speechBubble}
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
  background-size: auto 100%;
  padding: 8px 16px 16px 16px;
  width: ${viewWidthCalc(750)};
  height: ${viewHeightCalc(170)};
  font-size: ${props=>props.theme.fontSize.default.plainText};
`
