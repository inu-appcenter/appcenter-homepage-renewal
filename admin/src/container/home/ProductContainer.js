import styled from 'styled-components';
import { PageTitle } from '../../component/common/PageTitle';
import { viewHeightCalc } from '../../lib/viewportCalculate';
import ProductionDesktop from '../../component/home/ProductionDesktop';
import ProductionMobile from '../../component/home/ProductionMobile';
import 'swiper/css/pagination';

export default function ProductContainer({ mref }) {
    return (
        <ProductWrapper ref={mref}>
            <PageTitleBox>
                <PageTitle
                    title='Product'
                    topMargin={viewHeightCalc(50)}
                    subTitle='앱센터에서 만든 앱들을 소개합니다'
                />
            </PageTitleBox>
            <DesktopSizeBox>
                <ProductionDesktop />
            </DesktopSizeBox>
            <MobileSizeBox>
                <ProductionMobile />
            </MobileSizeBox>
        </ProductWrapper>
    );
}

const ProductWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

const PageTitleBox = styled.div`
    padding-top: 150px;
    @media (max-width: 1800px) {
        padding-top: 100px;
    }
`;

const DesktopSizeBox = styled.div`
    @media (max-width: 680px) {
        display: none;
    }
`;

const MobileSizeBox = styled.div`
    @media (min-width: 680px) {
        display: none;
    }
`;
