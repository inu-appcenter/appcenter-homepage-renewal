import styled from "styled-components";
import {PageTitle} from "../component/common/PageTitle";
import {viewHeightCalc, viewWidthCalc} from "../lib/viewportCalculate";
import TempAppImage from "../resource/dummy/temp_app_image.png"

export default function ProductContainer(){
    return(
        <ProductWrapper>
            <PageTitle
                title="Product"
                topMargin={viewHeightCalc(50)}
                subTitle='앱센터에서 만든 앱들을 소개합니다'
            />
            <TempImage src={TempAppImage} alt='임시 이미지'/>
        </ProductWrapper>
    );
}

const ProductWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const TempImage = styled.img`
  height: ${viewWidthCalc(940)};
  margin-top: ${viewWidthCalc(20)};
`
