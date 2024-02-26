import { PageTitle } from '../component/common/PageTitle';
import FAQMainContainer from '../container/faq/FAQMainContainer';
import styled from 'styled-components';
import SpeechBubble from '../component/common/SpeechBubble';

export default function FAQMainPage() {
    return (
        <FAQPageWrapper>
            <TitleWrapper>
                <PageTitle title='FAQ' />
            </TitleWrapper>
            <SpeechBubbleWrapper>
                <div>
                    <SpeechBubble partName={'common'} />
                </div>
            </SpeechBubbleWrapper>
            <FAQMainContainer />
        </FAQPageWrapper>
    );
}

const FAQPageWrapper = styled.div`
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    @media (max-width: 350px) {
        padding: 0 1rem;
    }
`;

const TitleWrapper = styled.div`
    padding-top: ${(props) => props.theme.padding.bigDesktop.contentTop};
    @media (max-width: 1800px) {
        padding-top: ${(props) => props.theme.padding.desktop.contentTop};
        grid-template-columns: 1fr;
    }
    @media (max-width: 1200px) {
        padding-top: ${(props) => props.theme.padding.tablet.contentTop};
    }
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
    @media (max-width: 768px) {
        padding-top: ${(props) => props.theme.padding.smallTablet.contentTop};
    }
    @media (max-width: 576px) {
        padding-top: ${(props) => props.theme.padding.mobile.contentTop};
    }
`;

const SpeechBubbleWrapper = styled.div`
    display: flex;
    justify-content: center;
    & > div {
        width: 70%;
    }
`;
