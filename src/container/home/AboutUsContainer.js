import {PageTitle} from "../../component/common/PageTitle";
import styled from "styled-components";
import Slogan from "../../component/aboutus/Slogan";
import Interview from "../../component/aboutus/Interview";
import {viewHeightCalc} from "../../lib/viewportCalculate";

export default function AboutUsContainer(){
    return(
        <>
            <AboutUsWrapper>
                <PageTitleWrapper>
                    <PageTitle title="About Us"/>
                </PageTitleWrapper>
                <Slogan/>
                <Interview/>
            </AboutUsWrapper>
        </>
    );
}

const AboutUsWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageTitleWrapper = styled.div`
  padding-top: 100px;
`;
