import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal'; // react-modal 라이브러리 import
import { RMopen, RMclose } from '../../modules/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function RegisModal() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const regisModalOpen = useSelector((state) => state.product.regisModalOpen);

    // 서버에 데이터를 저장한다.
    const addData = async () => {
        try {
            const result = await axios.post(
                'https://server.inuappcenter.kr/introduction-board',
                newProduct
            );
            console.log('Success:', result.data);

            // POST 요청 성공 시, 새로운 동아리원을 data 상태 변수에 추가합니다.
            setData([...data, result.data]);

            setNewProduct({
                body: '',
                title: '',
                subTitle: '',
                androidStoreLink: '',
                appleStoreLink: '',
                email: '',
                gitRepositoryLink: '',
            });
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    const [newProduct, setNewProduct] = useState({
        body: '',
        title: '',
        subTitle: '',
        androidStoreLink: '',
        appleStoreLink: '',
        email: '',
        gitRepositoryLink: '',
    });

    const closeModal = () => {
        dispatch(RMclose());
    };

    return (
        <div>
            <ModalContainer
                isOpen={regisModalOpen}
                onRequestClose={closeModal}
                contentLabel='Product Modal'
            >
                <div>
                    <figure>
                        <AppImage />
                    </figure>
                    <AppTitle></AppTitle>
                    <AppDescription></AppDescription>

                    <DetailInfo></DetailInfo>
                    <DetailImage />
                    <DetailImage />
                    <DetailImage />
                </div>
            </ModalContainer>
        </div>
    );
}

const DetailImage = styled.img`
    position: absolute;
    border-radius: 8px;
    left: 0.5rem;
    top: 16rem;
    width: 200px;
    height: 400px;
    z-index: 5;
    & + & {
        left: 13.7rem;
    }
    & + & + & {
        left: 27rem;
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
    left: 32rem;
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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 600px;
    height: 250px;
    width: 100%;
    position: relative;
    transform: translate(-50%, -50%);
    z-index: 100;
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
