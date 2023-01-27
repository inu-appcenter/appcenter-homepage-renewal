import speechBubble from '../resource/img/speech-bubble.svg'
import emoji from '../resource/dummy/temp-emoji.png'
import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../lib/viewportCalculate";

export default function FAQSpeechBubble() {
    return (
        <>
            <RowStack>
                <Emoji src={emoji} alt='emoji'/>
                <SpeechBubble>
                    이곳은 앱센터에 관련된 질문이 있는 공간입니다!
                    <br/>
                    공통질문과 각 파트별 질문이 나눠져 있으니
                    <br/>
                    더보기를 눌러 확인해보세요!
                </SpeechBubble>
            </RowStack>
        </>
    )
}

const RowStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Emoji = styled.img`
  width: 10rem;
`

const SpeechBubble = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${speechBubble});
  background-repeat: no-repeat;
  background-size: auto 100%;
  font-size:24px;
  padding: 8px 16px 16px 16px;
  width: ${viewWidthCalc(750)};
  height: ${viewHeightCalc(170)};
  margin-bottom: 80px;
`