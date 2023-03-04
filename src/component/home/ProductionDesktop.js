import AspectRatio from "@mui/joy/AspectRatio";
import styled from "styled-components";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import productList from "../../resource/string/productList";
import 'swiper/css/virtual';
import { v4 as uuidv4 } from 'uuid';


export default function ProductionDesktop() {

    const breakPoint = {
        680:{
            slidesPerView: 3,
            loopedSlides:2,
        },
        880:{
            slidesPerView: 4,
            loopedSlides: 3,
        },
        1100:{
            slidesPerView: 5,
            loopedSlides:4,
        }
    }

    return (
        <ProductionLayout>
            <Swiper
                breakpoints={breakPoint}
                // slidesPerView={4}
                // loopedSlides={3}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={2000}
            >
                {
                    productList.concat(productList).map((item) => (
                        <SwiperSlide key={uuidv4()}>
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
                                            <div key={uuidv4()} className='div-border-01-basic'>
                                                <img
                                                    src={value.image}
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
  .swiper-wrapper{
    transition-timing-function: linear;
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
