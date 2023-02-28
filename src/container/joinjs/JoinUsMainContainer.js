import RegisterInfo from "../../component/joinus/RegisterInfo";
import styled from "styled-components";
import AppCenterWorkshopImage from "../../resource/img/appcenter_workshop.png"
import {viewHeightCalc, viewWidthCalc} from "../../lib/viewportCalculate";
import {PageTitle} from "../../component/common/PageTitle";

export default function JoinUsMainContainer(){
    return(
        <>
            <JoinUsMainWrapper>
                <RegisterInfo/>
                <Img src={AppCenterWorkshopImage} alt='appcenter workshop image'/>
            </JoinUsMainWrapper>
        </>
    );
}

const JoinUsMainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media(max-width: 576px) {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
  justify-items: center;
`

const Img = styled.img`
  object-fit: contain;
  width: 500px;
  @media(max-width: 1800px) {
    width: 450px;
  }
  @media(max-width: 1200px) {
    width: 400px;
  }
  @media(max-width: 768px) {
    width: 300px;
  }
  @media(max-width: 576px) {
    width: 300px;
  }
`
