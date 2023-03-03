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

import React, {useEffect, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";


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
export default function ProductionDesktop() {
    const swiperRef = useRef(null);

    useEffect(()=>{
        swiperRef.current.addEventListener('progress', (e)=>{
            const [swiper, progress] = e.detail;
            console.log(swiper, progress);
        });
    },[])

    const breakPoint = {
        680:{
            slidesPerView: 3,
        },
        880:{
            slidesPerView: 4,
        },
        1100:{
            slidesPerView: 5,
        }
    }

    return (
        <ProductionLayout>
            <Swiper
                ref={swiperRef}
                breakpoints={breakPoint}
                loopedSlides={1}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: true,
                }}
                speed={500}
                freeMode={true}
            >
                {
                    productImageIcon.map((item) => (
                        <SwiperSlide key={item.key}>
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
                    ))
                }
            </Swiper>
        </ProductionLayout>
    );
}

const ProductionLayout = styled.div`
  display: flex;
  margin-top: 50px;
  .card{
    width: 200px;
  }
  .swipe-wrapper{
    transition-timing-function: linear
  }
  .swiper-slide{
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
