import styled from 'styled-components';
import speechBubbleTail from '../../resource/img/speech-bubble-tail.svg';
import { partInfoByName } from '../../resource/string/partInfo';

export default function SpeechBubble({ partName = 'Android' }) {
    return (
        <>
            <RowStack>
                <Emoji src={partInfoByName[partName].emoji} alt='emoji' />
                <SpeechBubbleStyle>
                    <SpeechBubbleContent>
                        {partInfoByName[partName].speechBubble}
                    </SpeechBubbleContent>
                </SpeechBubbleStyle>
            </RowStack>
        </>
    );
}

const RowStack = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    @media (max-width: 576px) {
        display: none;
    }
`;

const Emoji = styled.img`
    width: 10rem;
    margin-right: 70px;
    margin-top: 30px;
`;

const SpeechBubbleStyle = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background: rgba(254, 200, 83, 0.4);
    border-radius: 30px;
    &::before {
        content: '';
        position: absolute;
        bottom: -10px;
        left: -30px;
        width: 90px;
        height: 60px;
        background-image: url(${speechBubbleTail});
        background-repeat: no-repeat;
    }
`;

const SpeechBubbleContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    word-break: keep-all;
    width: 80%;
    min-width: 250px;
    height: 70%;
    font-size: ${(props) => props.theme.fontSize.desktop.text};
    @media (max-width: 1200px) {
        font-size: ${(props) => props.theme.fontSize.tablet.text};
    }
    @media (max-width: 768px) {
        font-size: ${(props) => props.theme.fontSize.smallTablet.text};
    }
    @media (max-width: 576px) {
        font-size: ${(props) => props.theme.fontSize.mobile.text};
    }
`;
