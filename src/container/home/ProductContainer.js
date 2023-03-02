import styled from "styled-components";
import {PageTitle} from "../../component/common/PageTitle";
import {viewHeightCalc} from "../../lib/viewportCalculate";
import Production from "../../component/home/Production";

export default function ProductContainer(){
    return(
        <ProductWrapper>
            <PageTitle
                title="Product"
                topMargin={viewHeightCalc(50)}
                subTitle='앱센터에서 만든 앱들을 소개합니다'
            />
            <Production/>
        </ProductWrapper>
    );
}

const ProductWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

