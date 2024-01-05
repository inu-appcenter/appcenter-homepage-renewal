import styled, { createGlobalStyle, css } from 'styled-components';
import { HiBars3 } from "react-icons/hi2";


import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Modal from "react-modal"; // react-modal 라이브러리 import

import 'swiper/css/virtual';



export default function DetailPage() {
    const [data, setData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          const viewData = await axios.get('https://server.inuappcenter.kr/introduction-board?id=1').then(res => {
              setData(res.data);
              console.log(data);
            });
        }
        fetchData();
      }, [data]);

    return (
      <>
        <GlobalStyle />
        <NavBar>
            <span className='logo'>흑백 로고</span>
            <HiBars3 className='menu' size={"24px"} />
        </NavBar>
        <WhiteBoard>
        <AppFigure>
                <AppImg
                    src={data.images[0]}
                    loading='lazy'
                    alt=''
                />
        </AppFigure>
        <Text type='title'>{data.title}</Text>
        <Text type='top'>{data.subTitle}</Text>

        <IntroBox>
            {data.body}
        </IntroBox>
        </WhiteBoard>
      </>           
    );
}

const IntroBox = styled.div`
    width: 450px;
    height: 300px;

    position: relative;
    bottom: 11rem;
    left: 2rem;
`

const AppImg = styled.img`
    width: 150px;
    height: 150px;
`

const AppFigure = styled.figure`
    position: relative;
    right: 12rem;
    bottom: 6rem;
`

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #FAFAFA;
    }
`

const WhiteBoard = styled.div`
    padding: 50px 0 0 170px;
    margin: 100px auto 0 auto;
    width: 500px;
    height: 300px;
    background-color: white;
    border-radius: 10px;
    border: none;
`

const NavBar = styled.div`
    position:absolute;
    display: flex;
    justify-content: center;
    position: relative;
    height: 25px;
    width: 730px;
    margin: 45px auto 0 auto;
    background-color: white;
    border-radius: 10px;
    padding: 10px 10px;
    border: 0.2px solid #E6E6E6;
    
    .menu {
        margin-left: auto;
    }
`;

const Text = styled.div`
    font-style: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${(props) => (props.type === 'title' ? '#424242' : '#848484')};
    font-weight: ${(props) =>
        props.type === 'top' ? 100 : props.type === 'title' ? 600 : 100};
    margin-bottom: 3px;
    white-space: pre-line;
    position: relative;
    bottom: 13rem;
    left: 2rem;

    ${(props) =>
        props.type === 'title'
            ? css`
                  font-size: ${(props) =>
                      props.theme.fontSize.tablet.title};`
            : css`
                  font-size: ${(props) =>
                      props.theme.fontSize.tablet.caption};`}
`;





