import styled from "styled-components";
import {Link} from "react-router-dom";
import {fullPath} from "../../resource/string/routerPath";
import logo from "../../resource/img/header_logo.svg";
import template from "../../resource/img/welcomeImages/mockup_template.png";
import {navBarInfoList} from "../../resource/string/navBarString";
import {Box, Toolbar as MuiToolbar} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import {mainImages} from "../../resource/string/mainImages";
import {useState, useEffect} from "react";

export default function MainHeader() {
    const [index, setIndex] = useState(0);
    const [splashSwiper, setSplashSwiper] = useState(null);
    const [logoSwiper, setLogoSwiper] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((index + 1) % mainImages.length);
            splashSwiper.slideTo(index);
            logoSwiper.slideTo(index);
            console.log(index);
        }, 3000);
        return () => clearInterval(timer);
    }, [index, splashSwiper, logoSwiper]);

    return (
        <Box sx={{width: '100%'}}>
            <AppBar>
                <Toolbar sx={{height: '5rem'}}>
                    <Logo to={fullPath.home}>
                        <img src={logo} alt='Inu App Center. logo'/>
                    </Logo>
                    <NavBar>
                        {navBarInfoList.map((item) =>
                            <Link
                                key={item.id}
                                className='navbar__item'
                                to={item.url}
                            >{item.title}</Link>
                        )}
                    </NavBar>
                </Toolbar>
                <WelcomeBox>
                    <WelcomeText>
                        <h2>안녕하세요!</h2>
                        <h1>인천대학교</h1>
                        <h1><span>앱센터</span>입니다</h1>
                    </WelcomeText>
                    <WelcomeImage>
                        <img className="splash-image-frame" src={template} alt="show"/>
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
                    </WelcomeImage>
                </WelcomeBox>
            </AppBar>
        </Box>
    )
}
const AppBar = styled.div`
  padding-inline: ${props => props.theme.padding.navBarInside};
  background: ${props => props.theme.color.primary};
  border-bottom-left-radius: 50vh;
  height: 100vh;
`;

const Toolbar = styled(MuiToolbar)`
  padding: 2rem 0;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  flex-grow: 1;

  img {
    object-fit: cover;
    width: 400px;
  }
`
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  & .navbar__item {
    color: ${props => props.theme.color.white};
    font-size: 1.25rem;
    font-weight: 600;
  }

  & .navbar__item.active {
    color: ${props => props.theme.color.secondary};
  }
`;
const WelcomeBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 100px auto;
`
const WelcomeText = styled.div`
  & h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 0.5;
    color: white;
  }

  & h2 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 2;
    color: white;
  }

  & span {
    color: ${props => props.theme.color.secondary};
  }
`;
const WelcomeImage = styled.div`
  position: relative;
  width: 370px;
  height: 520px;

  & .splash-image-frame {
    position: absolute;
    left: 0;
    top: 0;
    width: 250px;
    height: 500px;
    z-index: 2;
  }

  & .splash-image-template {
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

  & .logo-image-template {
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
