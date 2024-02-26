import { Swiper, SwiperSlide } from 'swiper/react';
import PlayStoreBadge from '@assets/svg/google-play-badge.svg';
import AppStoreBadge from '@assets/svg/app-store-badge.svg';
import { Autoplay, Pagination } from 'swiper/modules';
import useGetIntroductionBoardPublicAllQuery from '@api/query/useGetIntroductionBoardPublicAllQuery.ts';

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
        {data.map(({ id, title, images, androidStoreLink, appleStoreLink }) => (
          <SwiperSlide key={id}>
            <div className='flex flex-col gap-y-3'>
              <img
                className='border border-solid rounded-2xl'
                alt={title}
                src={Object.values(images).at(0)}
              />
              <div className='flex flex-col gap-y-1'>
                {androidStoreLink && (
                  <a href={androidStoreLink}>
                    <img
                      className='px-6 w-full'
                      alt={`${title} 플레이스토어 링크`}
                      src={PlayStoreBadge}
                    />
                  </a>
                )}
                {appleStoreLink && (
                  <a href={appleStoreLink}>
                    <img
                      className='px-6 w-full'
                      alt={`${title} 앱스토어 링크`}
                      src={AppStoreBadge}
                    />
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductListSwiper;
