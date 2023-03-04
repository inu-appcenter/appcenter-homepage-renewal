import AspectRatio from "@mui/joy/AspectRatio";
import styled from "styled-components";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFlip, Autoplay, Pagination, Navigation} from "swiper";
import "swiper/css/effect-flip";
import productList from "../../resource/string/productList";

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
            >
                {
                    productList.map((item) => (
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
                                            <div key={value.key} className='div-border-01-basic'>
                                                <a href={value.url} target="_blank" rel="noreferrer">
                                                    <img
                                                        src={value.image}
                                                        loading="lazy"
                                                        alt="store logo"
                                                    />
                                                </a>
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
  margin-top: 30px;

  .card {
    width: 250px;
    @media (max-width: 300px){
      width: 200px;
    }
  }

  .swiper {
    width: 250px;
    padding-bottom: 30px;
    @media (max-width: 300px){
      width: 200px;
    }
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
