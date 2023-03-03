import {PageTitle} from "../../component/common/PageTitle";
import styled from "styled-components";
import Slogan from "../../component/home/Slogan";
import Interview from "../../component/home/Interview";
import {viewHeightCalc} from "../../lib/viewportCalculate";

export default function AboutUsContainer(){
    return(
        <>
            <AboutUsContainerBox>
                <SloganBox>
                    <PageTitleWrapper>
                        <PageTitle title="About Us"/>
                    </PageTitleWrapper>
                    <Slogan/>
                </SloganBox>
                <InterviewBox>
                    <Interview/>
                </InterviewBox>
            </AboutUsContainerBox>
        </>
    );
}

const AboutUsContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageTitleWrapper = styled.div`
  padding: 100px 0;
`;

const SloganBox = styled.div`
  height: auto;
  @media (max-width: 1800px){
    height: 90vh;
  }
  @media (max-width: 576px){
    height: auto;
  }
`

const InterviewBox = styled.div`
  height: auto;
  @media (max-width: 1800px){
    height: 70vh;
  }
  @media (max-width: 576px){
    height: auto;
  }
`
