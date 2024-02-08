import AspectRatio from '@mui/joy/AspectRatio';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFlip, Pagination } from 'swiper';
import 'swiper/css/effect-flip';
import GooglePlay from '../../resource/img/product/google_play_logo.svg';
import AppStore from '../../resource/img/product/app_store_logo.svg';
import { Button } from '@mui/material';

export default function ProductionMobile() {
    const [data, setData] = useState([]);

    // 서버에서 데이터를 불러온다
    useEffect(() => {
        const fetchData = async () => {
            const viewData = await axios //eslint-disable-line no-unused-vars
                .get(
                    'https://server.inuappcenter.kr/introduction-board/public/all-boards-contents'
                )
                .then((res) => {
                    setData(res.data);
                });
        };
        fetchData();
    }, [data.length]);

    return (
        <ProductionLayout>
            <Swiper
                effect={'flip'}
                slidesPerView={1}
                loop={true}
                modules={[EffectFlip, Autoplay, Pagination]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                pagination={true}
                navigation={false}
            >
                {data &&
                    data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='card'>
                                <TransparentAspectRatio ratio={'1'}>
                                    <figure>
                                        <AppImage
                                            src={
                                                item.images[
                                                    Object.keys(item.images)[0]
                                                ]
                                            }
                                            loading='lazy'
                                            alt=''
                                        />
                                    </figure>
                                </TransparentAspectRatio>
                                <StoreImageBox>
                                    {item.appleStoreLink && (
                                        <StoreButton
                                            href={item.appleStoreLink}
                                            target='_blank'
                                            rel='noreferrer'
                                            key={item.id}
                                        >
                                            <img
                                                src={AppStore}
                                                loading='lazy'
                                                alt='store logo'
                                            />
                                        </StoreButton>
                                    )}
                                    {item.androidStoreLink && (
                                        <StoreButton
                                            href={item.androidStoreLink}
                                            target='_blank'
                                            rel='noreferrer'
                                            key={item.id}
                                        >
                                            <img
                                                src={GooglePlay}
                                                loading='lazy'
                                                alt='store logo'
                                            />
                                        </StoreButton>
                                    )}
                                </StoreImageBox>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </ProductionLayout>
    );
}

const AppImage = styled.img`
    border-radius: 8px;
`;

const ProductionLayout = styled.div`
    display: flex;
    margin-top: 30px;

    .card {
        width: 250px;
        @media (max-width: 300px) {
            width: 200px;
        }
    }

    .swiper {
        width: 250px;
        padding-bottom: 30px;
        @media (max-width: 300px) {
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
`;

const StoreButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(props) => props.theme.color.primary};
    border-radius: 27.5px;
    padding: 10px 20px;
`;
const TransparentAspectRatio = styled(AspectRatio)`
    background-color: transparent;

    .MuiAspectRatio-content {
        background-color: transparent;
    }
`;
