import styled, { css } from 'styled-components';
import { PageTitle } from '../component/common/PageTitle';
import { viewHeightCalc } from '../lib/viewportCalculate';
import 'swiper/css/pagination';
import productList from '../resource/string/productList';


export default function ProductPage() {
    return (
        <>
            <PageTitleBox>
                <PageTitle
                    title='Product'
                    topMargin={viewHeightCalc(50)}
                    subTitle='앱센터에서 만든 앱들을 소개합니다'
                />
            </PageTitleBox>
            {productList.map((item) => (
                <ApplicationBox>
                    <figure>
                        <img
                          src={item.image}
                          alt=''
                          loading='lazy'
                        />
                    </figure>
                    <InfoBox>
                       <h2>Example</h2>
                       <h3>how to use</h3>
                    </InfoBox>
                    <DirectBtn>
                        구경하기
                    </DirectBtn>
                </ApplicationBox>
            ))}
        </>
    )
};

const DirectBtn = styled.button`
  border: none;
  background-color: #5858FA;
  border-radius: 5px;
  color: white;
  width: 10rem;
  height: 3rem;
  margin: auto 2rem auto 0 ;

  &:hover {
    transition: 0.1s ease-in;
    background-color: #8181F7;
  }
`

const InfoBox = styled.div`
    width: 100%;
`

const ApplicationBox = styled.div`
    display: flex;
    justify-content: center;
    width: 900px;
    border: 0.8px grey solid;
    border-radius: 20px;
    margin-bottom: 20px;
    

    & + & {
        margin-bottom: 20px;
    }
`

const PageTitleBox = styled.div`
    padding-top: 150px;
    @media (max-width: 1800px) {
        padding-top: 100px;
    }
`;