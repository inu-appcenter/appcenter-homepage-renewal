import {PageTitle} from "../component/common/PageTitle";
import styled from "styled-components";
import Slogan from "../component/aboutus/Slogan";
import Interview from "../component/aboutus/Interview";
import {viewHeightCalc} from "../lib/viewportCalculate";

export default function AboutUsContainer(){
    return(
        <>
            <AboutUsWrapper>
                <PageTitle title="About Us"/>
                <Slogan/>
                <Interview/>
            </AboutUsWrapper>
        </>
    );
}

const AboutUsWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
