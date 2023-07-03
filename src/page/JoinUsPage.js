import JoinUsMainContainer from '../container/joinjs/JoinUsMainContainer';
import ArchiveContainer from '../container/joinjs/ArchiveContainer';
import RegisterStepContainer from '../container/joinjs/RegisterStepContainer';
import ContactContainer from '../container/joinjs/ContactContainer';
import styled from 'styled-components';
import { PageTitle } from '../component/common/PageTitle';
import RegisterButton from '../component/joinus/RegisterButton';
import { viewWidthCalc } from '../lib/viewportCalculate';

export default function JoinUsPage() {
    return (
        <JoinUsPageWrapper>
            <TitleWrapper>
                <PageTitle title='Join Us!' />
            </TitleWrapper>
            <JoinUsMainContainer />
            <ArchiveContainer />
            <RegisterStepContainer />
            <RegisterButton />
            <ContactContainer />
        </JoinUsPageWrapper>
    );
}
const JoinUsPageWrapper = styled.div`
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 4rem;
    @media (max-width: 1800px) {
        row-gap: 9rem;
    }
    @media (max-width: 768px) {
        row-gap: 2rem;
    }
    @media (max-width: 350px) {
        padding: 0 1rem;
    }
`;

const TitleWrapper = styled.div`
    padding-top: ${(props) => props.theme.padding.bigDesktop.contentTop};
    @media (max-width: 1800px) {
        padding-top: ${(props) => props.theme.padding.desktop.contentTop};
        grid-template-columns: 1fr;
        padding-left: ${viewWidthCalc(130)};
    }
    @media (max-width: 1200px) {
        padding-top: ${(props) => props.theme.padding.tablet.contentTop};
        padding-left: ${viewWidthCalc(90)};
    }
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        padding-left: ${viewWidthCalc(70)};
    }
    @media (max-width: 768px) {
        padding-top: ${(props) => props.theme.padding.smallTablet.contentTop};
        padding-left: ${viewWidthCalc(30)};
    }
    @media (max-width: 576px) {
        padding-top: ${(props) => props.theme.padding.mobile.contentTop};
        padding-left: 0;
    }
`;
