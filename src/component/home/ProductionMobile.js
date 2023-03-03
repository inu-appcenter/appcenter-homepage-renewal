import {Box, Card, CardContent, CardOverflow} from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import INUIT from '../../resource/img/product/image_1.png';
import UniLetter from '../../resource/img/product/image_2.png';
import Idorm from '../../resource/img/product/image_3.png';
import CafeTeria from '../../resource/img/product/image_4.png';
import INUM from '../../resource/img/product/image_5.png';
import Image7 from '../../resource/img/product/image_7.png';
import InuBus from '../../resource/img/product/image_8.png';
import AppStore from '../../resource/img/product/app_store_logo.svg';
import GooglePlay from '../../resource/img/product/google_play_logo.svg';
import styled from "styled-components";

import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFlip, Autoplay, Pagination, Navigation} from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import "swiper/css";
import "swiper/css/pagination";

const productImageIcon = [
    {key: 123, image: INUIT, store: [GooglePlay]},
    {key: 124, image: UniLetter, store: [GooglePlay, AppStore]},
    {key: 125, image: Idorm, store: [GooglePlay]},
    {key: 126, image: CafeTeria, store: [GooglePlay, AppStore]},
    {key: 127, image: INUM, store: [AppStore]},
    {key: 128, image: Image7, store: [GooglePlay]},
    {key: 129, image: InuBus, store: [GooglePlay]},
];
export default function ProductionMobile() {
    return (
        <ProductionLayout>
            <Swiper
                effect={"flip"}
                slidesPerView={1}
                loop={true}
                modules={[EffectFlip, Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                pagination={true}
                navigation={true}
                freeMode={true}
            >
                {
                    productImageIcon.map((item) => (
                        <div key={item.key}>
                            <SwiperSlide>
                                <div className='card'>
                                    <AspectRatio ratio={'1'}>
                                        <figure>
                                            <img
                                                src={item.image}
                                                loading="lazy"
                                                alt=""
                                            />
                                        </figure>
                                    </AspectRatio>
                                    <StoreImageBox>
                                        {
                                            item.store.map((value) => (
                                                <div className='div-border-01-basic'>
                                                    <img
                                                        src={value}
                                                        loading="lazy"
                                                        alt="store logo"
                                                    />
                                                </div>
                                            ))
                                        }
                                    </StoreImageBox>
                                </div>
                            </SwiperSlide>
                        </div>

                    ))
                }
            </Swiper>
        </ProductionLayout>
    );
}

const ProductionLayout = styled.div`
  display: flex;

  .card {
    width: 250px;
  }

  .swiper {
    width: 250px;
    padding: 60px;
  }

  .swiper-slide {
    overflow: hidden;
  }
`;

const StoreImageBox = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: fit-content;

  .div-border-01-basic {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.color.primary};
    border-radius: 27.5px;
    padding: 10px 20px;
  }
`
