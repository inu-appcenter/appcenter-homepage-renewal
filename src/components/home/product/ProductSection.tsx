import SectionLayout from '../../common/layouts/SectionLayout.tsx';
import Title from '../../common/Title.tsx';
import { Suspense } from 'react';
import ProductListSwiper from './ProductListSwiper.tsx';

const ProductSection = () => {
  return (
    <SectionLayout className='gap-y-8'>
      <Title title='PRODUCT' subtitle='앱센터에서 만든 앱들을 소개합니다' />
      <Suspense>
        <ProductListSwiper />
      </Suspense>
    </SectionLayout>
  );
};

export default ProductSection;
