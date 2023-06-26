import styled from 'styled-components';
import { viewHeightCalc } from '../../lib/viewportCalculate';
import {
    interviewAnswer,
    interViewQuestion,
} from '../../resource/data/aboutUs';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-cards';

import { Autoplay, EffectCards, Pagination } from 'swiper';

export default function Interview() {
    return (
        <InterViewLayout>
            <QuestionText>{interViewQuestion}</QuestionText>
            <InterViewScrollBox>
                <Swiper
                    effect='cards'
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={true}
                    loop={true}
                    modules={[Pagination, Autoplay, EffectCards]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                >
                    {interviewAnswer.map((item) => (
                        <SwiperSlide key={item.key}>
                            <div>
                                <div className='answer'>{item.answer}</div>
                                <div className='name'>{item.name}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </InterViewScrollBox>
        </InterViewLayout>
    );
}

const InterViewLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, auto));
    column-gap: 3rem;
    justify-items: center;
    @media (max-width: 950px) {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`;

const InterViewScrollBox = styled.div`
    .swiper {
        padding: 0 120px 40px 40px;
        width: 500px;
        @media (max-width: 1200px) {
            width: 400px;
        }
        @media (max-width: 576px) {
            width: 200px;
            padding: 0 70px 40px 50px;
        }
        @media (max-width: 320px) {
            width: 150px;
        }
    }

    .swiper-pagination {
        left: 10px;
    }

    .swiper-slide {
        display: flex;
        flex-direction: column;
        border-radius: 40px;
        background-color: ${(props) => props.theme.color.primaryLight};
        white-space: nowrap;
        padding: 40px;

        .answer {
            white-space: pre-line;
            @media (max-width: 768px) {
                font-size: ${(props) => props.theme.fontSize.smallTablet.text};
            }
            @media (max-width: 576px) {
                font-size: ${(props) => props.theme.fontSize.mobile.text};
            }
        }

        .name {
            color: ${(props) => props.theme.color.primary};
            font-weight: 600;
            margin-top: ${viewHeightCalc(18)};
        }

        @media (max-width: 1800px) {
            padding: 30px;
        }
        @media (max-width: 1200px) {
            padding: 28px;
        }
        @media (max-width: 768px) {
            border-radius: 30px;
            padding: 20px;
        }
        @media (max-width: 576px) {
            border-radius: 20px;
            padding: 16px;
        }
        @media (max-width: 280px) {
            padding: 12px;
        }
    }
`;

const QuestionText = styled.p`
    margin: 0 0 0 2rem;
    color: ${(props) => props.theme.color.primary};
    font-weight: 600;
    white-space: pre-line;
    font-size: ${(props) => props.theme.fontSize.bigDesktop.subtitle};
    text-indent: -1em;
    @media (max-width: 1800px) {
        font-size: ${(props) => props.theme.fontSize.desktop.subtitle};
    }
    @media (max-width: 1200px) {
        font-size: ${(props) => props.theme.fontSize.tablet.subtitle};
    }
    @media (max-width: 768px) {
        font-size: ${(props) => props.theme.fontSize.smallTablet.subtitle};
    }

    &::before {
        content: 'Q.';
        position: relative;
    }
`;
