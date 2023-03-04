import Subtitle from "../../component/joinus/Subtitle";
import styled from "styled-components";
import {viewHeightCalc} from "../../lib/viewportCalculate";
import RegisterStep from "../../component/joinus/RegisterStep";
import RegisterButton from "../../component/joinus/RegisterButton";

export default function RegisterStepContainer(){
    return(
        <RegisterStepContainerWrapper>
            <div id='registerStep'><Subtitle
                title='지원 방법'
            /></div>
            <RegisterStep/>
            <RegisterButton />
        </RegisterStepContainerWrapper>
    )
}

const RegisterStepContainerWrapper =  styled.div`
    margin-top: ${viewHeightCalc(70)};
`;
