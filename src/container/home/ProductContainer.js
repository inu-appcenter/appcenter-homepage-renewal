import styled from "styled-components";
import {PageTitle} from "../../component/common/PageTitle";
import {viewHeightCalc} from "../../lib/viewportCalculate";
import ProductionDesktop from "../../component/home/ProductionDesktop";
import ProductionMobile from "../../component/home/ProductionMobile";
import "swiper/css/pagination";


export default function ProductContainer({mref}){
    return(
        <ProductWrapper ref={mref}>
            <PageTitle
                title="Product"
                topMargin={viewHeightCalc(50)}
                subTitle='앱센터에서 만든 앱들을 소개합니다'
            />
            <DesktopSizeBox>
                <ProductionDesktop/>
            </DesktopSizeBox>
            <MobileSizeBox>
                <ProductionMobile/>
            </MobileSizeBox>
        </ProductWrapper>
    );
}

const ProductWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const DesktopSizeBox = styled.div`
  @media(max-width:680px){
    display: none;
  }
`

const MobileSizeBox = styled.div`
  @media(min-width:680px){
    display: none;
  }
`
