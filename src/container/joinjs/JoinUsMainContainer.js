import RegisterInfo from "../../component/joinus/RegisterInfo";
import styled from "styled-components";
import AppCenterWorkshopImage from "../../resource/img/appcenter_workshop.png"
import {viewHeightCalc, viewWidthCalc} from "../../lib/viewportCalculate";
import {PageTitle} from "../../component/common/PageTitle";

export default function JoinUsMainContainer(){
    return(
        <>
            <PageTitle
                title="Join Us!"
            />
            <JoinUsMainWrapper>
                <RegisterInfo/>
                <Img src={AppCenterWorkshopImage} alt='appcenter workshop image'/>
            </JoinUsMainWrapper>
        </>
    );
}

const JoinUsMainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: ${viewHeightCalc(44)};
`

const Img = styled.img`
  object-fit: contain;
  width: ${viewWidthCalc(525)};
`
