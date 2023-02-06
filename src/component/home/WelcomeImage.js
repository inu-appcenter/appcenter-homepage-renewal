import template from "../../resource/img/welcomeImages/mockup_template.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade} from "swiper";
import {mainImages} from "../../resource/string/mainImages";
import {useEffect, useState} from "react";
import styled from "styled-components";

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
                <img className="splash-image-frame" src={template} alt="show" />
                <div className="splash-image-template">
                    <Swiper
                        modules={[EffectFade]}
                        effect="fade"
                        slidesPerView={1}
                        loop={true}
                        onSwiper={setSplashSwiper}
                    >
                        {mainImages.map(el =>
                            <SwiperSlide key={el.id}>
                                <img src={el.splash} alt={el.title}/>
                            </SwiperSlide>)}
                    </Swiper>
                </div>
                <div className="logo-image-template">
                    <Swiper
                        modules={[EffectFade]}
                        effect="fade"
                        slidesPerView={1}
                        loop={true}
                        onSwiper={setLogoSwiper}
                    >
                        {mainImages.map(el =>
                            <SwiperSlide key={el.id}>
                                <img src={el.icon} alt={el.title}/>
                            </SwiperSlide>)}
                    </Swiper>
                </div>
            </SwiperContainer>
        </>
    )
}

const SwiperContainer = styled.div`
    @media(max-width: 768px) {
        display: none;
    }
    //flex-grow: 1;
    position: relative;
    width: 370px;
    height: 520px;
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
        width: 240px;
        height: 490px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, .25);
        background: white;
        overflow: hidden;
    }
    .logo-image-template {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        background: white;
        border-radius: 50px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
        overflow: hidden;
        z-index: 3;
        img {
            width: 100%;
            height: 100%;
        }
    }
`;