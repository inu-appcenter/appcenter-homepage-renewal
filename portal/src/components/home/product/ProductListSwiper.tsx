import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import useGetIntroductionBoardPublicAllQuery from '@api/query/useGetIntroductionBoardPublicAllQuery.ts';
import ProductItem from '@components/home/product/ProductItem.tsx';

const ProductListSwiper = () => {
  const { data } = useGetIntroductionBoardPublicAllQuery();

  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination
        navigation
        loop
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          475: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        speed={2000}
        slidesPerView={2}
        spaceBetween={10}
      >
        {data.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductListSwiper;
