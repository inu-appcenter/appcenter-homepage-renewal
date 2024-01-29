import AspectRatio from '@mui/joy/AspectRatio';
import styled from 'styled-components';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/virtual';
import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CloseButton from '../../resource/img/product/close_button.png';
import Modal from 'react-modal'; // react-modal 라이브러리 import

export default function ProductionDesktop() {
    //서버에서 불러온 데이터를 저장해줌
    const [data, setData] = useState([]);
    const [itemId, setItemId] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [appData, setAppData] = useState([]);
    const [imageData, setImageData] = useState([]);
    const [firstImage, setFirstImage] = useState('');
    const breakPoint = {
        680: {
            slidesPerView: 3,
            loopedSlides: 2,
        },
        880: {
            slidesPerView: 4,
            loopedSlides: 3,
        },
        1100: {
            slidesPerView: 5,
            loopedSlides: 4,
        },
    };

    // 서버에서 데이터를 불러온다
    useEffect(() => {
        const fetchData = async () => {
            const viewData = await axios
                .get(
                    'https://server.inuappcenter.kr/introduction-board/public/all-boards-contents'
                )
                .then((res) => {
                    setData(res.data);
                });
        };
        fetchData();
    }, [data.length]);

    useEffect(() => {
        axios
            .get(
                `https://server.inuappcenter.kr/introduction-board/public/${itemId}`
            )
            .then((res) => {
                setAppData(res.data);
                const imageObject = res.data.images;
                const firstKey = imageObject && Object.keys(imageObject)[0];
                const firstValue = firstKey && imageObject[firstKey];
                const secondKey = imageObject && Object.keys(imageObject)[1];
                const secondValue = secondKey && imageObject[secondKey];
                const thirdKey = imageObject && Object.keys(imageObject)[2];
                const thirdValue = thirdKey && imageObject[thirdKey];
                const fourthKey = imageObject && Object.keys(imageObject)[3];
                const fourthValue = fourthKey && imageObject[fourthKey];

                console.log(res.data);
                console.log(imageObject);

                setImageData([
                    firstValue,
                    secondValue,
                    thirdValue,
                    fourthValue,
                ]);
            });
    }, [itemId]);

    const onClick = (id) => {
        setItemId(id);
        setModalOpen(true);
        console.log(id);
        // 모달이 오픈되어있을 때 스크롤 막아줌
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.removeProperty('overflow');
    };

    return (
        <>
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
                    speed={4000}
                >
                    {data &&
                        data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='card'>
                                    <TransparentAspectRatio
                                        ratio={'1'}
                                        modalOpen={modalOpen}
                                    >
                                        <figure>
                                            <ThumbNail
                                                src={
                                                    item.images[
                                                        Object.keys(
                                                            item.images
                                                        )[0]
                                                    ]
                                                }
                                                loading='lazy'
                                                alt=''
                                            />
                                        </figure>
                                    </TransparentAspectRatio>
                                    <StoreImageBox>
                                        <StoreButton
                                            target='_blank'
                                            rel='noreferrer'
                                            key={item.id}
                                            onClick={() => onClick(item.id)}
                                            modalOpen={modalOpen}
                                        >
                                            자세히 보기
                                        </StoreButton>
                                    </StoreImageBox>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </ProductionLayout>
            <div>
                <ModalContainer
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    contentLabel='Product Modal'
                >
                    <div>
                        <CloseImg src={CloseButton} onClick={closeModal} />
                        <figure>
                            {imageData[0] && (
                                <AppImage src={imageData[0]} alt='' />
                            )}
                        </figure>
                        <AppTitle>{appData.title}</AppTitle>
                        <AppDescription>{appData.subTitle}</AppDescription>
                        {appData.appleStoreLink && (
                            <InstallBtn
                                href={appData.appleStoreLink}
                                target='_blank'
                                rel='noreferrer'
                            >
                                iOS
                            </InstallBtn>
                        )}
                        {appData.androidStoreLink && (
                            <InstallBtn
                                href={appData.androidStoreLink}
                                target='_blank'
                                rel='noreferrer'
                            >
                                Android
                            </InstallBtn>
                        )}
                        <DetailInfo>{appData.body}</DetailInfo>
                        {imageData[1] && <DetailImage src={imageData[1]} />}
                        {imageData[2] && <DetailImage src={imageData[2]} />}
                        {imageData[3] && <DetailImage src={imageData[3]} />}
                    </div>
                    <NavBar />
                </ModalContainer>
            </div>
        </>
    );
}

const ThumbNail = styled.img`
    border-radius: 12px;
`;

const CloseImg = styled.img`
    position: absolute;
    left: 40.5rem;
    top: -0.6rem;
    border: 1px solid black;
    border-radius: 50%;

    &: hover {
        transition: 0.3s ease-in-out;
        cursor: pointer;
        opacity: 0.5;
    }
`;

const NavBar = styled.div`
    position: absolute;
    display: flex;
    width: 42rem;
    height: 2.5rem;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    align-items: center;

    top: 41.2rem;
    left: -0.5rem;
`;

const ProductionLayout = styled.div`
    display: flex;
    margin-top: 50px;

    .card {
        width: 200px;
    }

    .swiper-wrapper {
        transition-timing-function: linear;
    }

    .swiper-slide {
        overflow: hidden;
    }

    ${({ modalOpen }) =>
        modalOpen &&
        `   opacity: 0.01;
            backdrop-filter: blur(5px);
`}
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

    ${({ modalOpen }) =>
        modalOpen &&
        `   opacity: 0.1;
`}
`;
const TransparentAspectRatio = styled(AspectRatio)`
    background-color: transparent;

    .MuiAspectRatio-content {
        background-color: transparent;
    }

    ${({ modalOpen }) =>
        modalOpen &&
        `   opacity: 0.01;
            backdrop-filter: blur(5px);
`}
`;

const DetailImage = styled.img`
    position: absolute;
    border-radius: 8px;
    left: 0.5rem;
    top: 16rem;
    width: 207px;
    height: 400px;
    opacity: 1;
    & + & {
        left: 14rem;
    }
    & + & + & {
        left: 27.5rem;
    }
`;

const DetailInfo = styled.div`
    position: relative;
    width: 70%;
    margin: 0 auto;
    top: -1rem;
`;

const InstallBtn = styled.button`
    position: absolute;
    border: none;
    background-color: #1673e0;
    border-radius: 5px;
    color: white;
    width: 6rem;
    height: 2rem;
    margin: 1rem 3.5rem 0 auto;
    left: 33rem;
    top: 1.2rem;

    transition: 0.3s ease-in-out;
    &:hover {
        background-color: #00489b;
    }

    & + & {
        top: 3.8rem;
    }
`;

const ModalContainer = styled(Modal)`
    position: absolute;
    top: 35%;
    left: 50%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    max-width: 620px;
    height: 250px;
    width: 100%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;

const AppImage = styled.img`
    position: absolute;
    width: 7rem;
    height: 7rem;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;

    top: -1.5rem;
    left: 1.5rem;
`;

const AppTitle = styled.h2`
    position: relative;
    font-size: 24px;
    top: -1rem;
    left: 8rem;
`;

const AppDescription = styled.p`
    font-size: 16px;
    color: #666;
    position: relative;
    top: -2rem;
    left: 8rem;
`;
