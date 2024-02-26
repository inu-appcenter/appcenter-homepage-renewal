import template from '../../resource/img/welcomeImages/mockup_template.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import { mainImages } from '../../resource/string/mainImages';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function WelcomeImage() {
    const [index, setIndex] = useState(0);
    const [splashSwiper, setSplashSwiper] = useState(null);
    const [logoSwiper, setLogoSwiper] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((index + 1) % mainImages.length);
            splashSwiper.slideTo(index);
            logoSwiper.slideTo(index);
        }, 3000);
        return () => clearInterval(timer);
    }, [index, splashSwiper, logoSwiper]);

    return (
        <>
            <SwiperContainer>
                <img className='splash-image-frame' src={template} alt='show' />
                <div className='splash-image-template'>
                    <Swiper
                        modules={[EffectFade]}
                        effect='fade'
                        slidesPerView={1}
                        loop={true}
                        onSwiper={setSplashSwiper}
                    >
                        {mainImages.map((el) => (
                            <SwiperSlide key={el.id}>
                                <img src={el.splash} alt={el.title} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='logo-image-template'>
                    <Swiper
                        modules={[EffectFade]}
                        effect='fade'
                        slidesPerView={1}
                        loop={true}
                        onSwiper={setLogoSwiper}
                    >
                        {mainImages.map((el) => (
                            <SwiperSlide key={el.id}>
                                <img src={el.icon} alt={el.title} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </SwiperContainer>
        </>
    );
}

const CONTAINER_RATIO = 0.7115;
const SPLASH_RATIO = 0.5;
const LOGO_RATIO = 1;
const calcHeight = (h) => (h / 700) * 100;

const SwiperContainer = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
    position: relative;
    width: 370px; // splash width(250px) + logo width(150px) - overlap(30px)
    height: 520px; // splash height(500px) + logo height(150px) - overlap(130px)
    .splash-image-frame {
        position: absolute;
        left: 0;
        top: 0;
        width: 250px;
        height: 500px;
        z-index: 2;
    }
    .splash-image-template {
        position: absolute;
        left: 5px;
        top: 5px;
        width: calc(250px - 10px); // assume bezel-width: 10px
        height: calc(500px - 10px); // assume bezel-width: 10px
        border-radius: 30px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        -ms-border-radius: 30px;
        -o-border-radius: 30px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
        background: white;
        overflow: hidden;
        .swiper,
        img {
            width: 100%;
            height: 100%;
        }
    }
    .logo-image-template {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        //background: white;
        border-radius: 50px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        z-index: 3;
        .swiper,
        img {
            width: 100%;
            height: 100%;
        }
    }
    @media (max-height: 700px) {
        width: calc(${calcHeight(520)}vh * ${CONTAINER_RATIO});
        height: ${calcHeight(520)}vh;
        .splash-image-frame {
            width: calc(${calcHeight(500)}vh * ${SPLASH_RATIO});
            height: ${calcHeight(500)}vh;
        }
        .splash-image-template {
            width: calc(
                ${calcHeight(500)}vh * ${SPLASH_RATIO} - ${calcHeight(10)}vh
            );
            height: calc(${calcHeight(500)}vh - ${calcHeight(10)}vh);
            border-radius: ${calcHeight(30)}vh;
        }
        .logo-image-template {
            width: calc(${calcHeight(150)}vh * ${LOGO_RATIO});
            height: ${calcHeight(150)}vh;
            border-radius: ${calcHeight(50)}vh;
        }
    }
`;
