import JoinUsMainContainer from "../container/joinjs/JoinUsMainContainer";
import ArchiveContainer from "../container/joinjs/ArchiveContainer";
import RegisterStepContainer from "../container/joinjs/RegisterStepContainer";
import ContactContainer from "../container/joinjs/ContactContainer";
import styled from "styled-components";
import {PageTitle} from "../component/common/PageTitle";

export default function JoinUsPage(){
    return(
        <JoinUsPageWrapper>
            <TitleWrapper>
                <PageTitle
                    title="Join Us!"
                />
            </TitleWrapper>
            <JoinUsMainContainer/>
            <ArchiveContainer/>
            <RegisterStepContainer/>
            <ContactContainer />
        </JoinUsPageWrapper>
    );
}
const JoinUsPageWrapper = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 5rem;
  @media (max-width: 1800px){
    row-gap: 10rem;
  }
  @media (max-width: 768px){
    row-gap: 2rem;
  }
`

const TitleWrapper = styled.div`
  padding-top: ${props=>props.theme.padding.bigDesktop.contentTop};
`
