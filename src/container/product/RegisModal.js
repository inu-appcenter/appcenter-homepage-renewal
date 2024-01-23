import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal'; // react-modal 라이브러리 import
import { RMopen, RMclose } from '../../modules/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import IMAGE from '../../resource/img/product/image_FILL0_wght400_GRAD0_opsz24.png';

export default function RegisModal() {
    const [data, setData] = useState([]);
    const [uploadImgUrl, setUploadImgUrl] = useState('');
    const [showImages, setShowImages] = useState([]);

    const [upload, setUpload] = useState('Upload');
    const [uploadImage, setUploadImage] = useState('Upload Images');

    // 입력받은 데이터를 저장
    const [newProduct, setNewProduct] = useState({
        body: '',
        title: '',
        subTitle: '',
        androidStoreLink: '',
        appleStoreLink: '',
        email: '',
        gitRepositoryLink: '',
    });

    // 상태관리 관련
    const dispatch = useDispatch();
    const regisModalOpen = useSelector((state) => state.product.regisModalOpen);

    // 서버에 데이터를 저장하는 함수
    const addData = async () => {
        try {
            const formData = new FormData();
            console.log(showImages);

            formData.append('title', newProduct.title);
            formData.append('subTitle', newProduct.subTitle);
            formData.append('androidStoreLink', newProduct.androidStoreLink);
            formData.append('appleStoreLink', newProduct.appleStoreLink);
            formData.append('body', newProduct.body);

            showImages.forEach((image) => {
                formData.append(
                    'multipartFiles',
                    new Blob([JSON.stringify(image)], {
                        type: 'application/json',
                    })
                );
            });

            const result = await axios.post(
                'https://server.inuappcenter.kr/introduction-board',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            console.log(result.data);

            for (let key of formData.keys()) {
                console.log(key);
            }

            for (let value of formData.values()) {
                console.log(value);
            }

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

            dispatch(RMclose());

            // POST 요청 성공 시, 새로운 동아리원을 data 상태 변수에 추가
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    // 모달을 닫아줌
    const closeModal = () => {
        dispatch(RMclose());
    };

    const onchangeImageUpload = (e) => {
        const { files } = e.target;
        const uploadFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(uploadFile);
        reader.onloadend = () => {
            setUploadImgUrl(reader.result);
        };

        setShowImages(uploadImgUrl); // 이미지 미리보기

        setUpload('');
        console.log(uploadImgUrl);
    };

    const handleAddImages = (e) => {
        const imageLists = e.target.files;
        let imageUrlLists = [...showImages];

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
        }
        if (imageUrlLists.length > 3) {
            alert('이미지는 최대 3개까지만 등록 가능합니다.');
            return;
        }

        setShowImages(imageUrlLists);
        console.log(showImages);
    };

    return (
        <div>
            <ModalContainer
                isOpen={regisModalOpen}
                onRequestClose={closeModal}
                contentLabel='Product Modal'
            >
                <div>
                    <div>
                        <label htmlFor='input_img'>
                            <PhotoImg src={IMAGE} />
                        </label>
                        <ImageInput
                            type='file'
                            id='input_img'
                            onChange={onchangeImageUpload}
                            uploadImgUrl={uploadImgUrl}
                        />
                    </div>
                    {uploadImgUrl && (
                        <figure>
                            <AppImage src={uploadImgUrl} img='img' />
                        </figure>
                    )}
                    <AppTitle>
                        <TitleInput
                            type='text'
                            placeholder='앱 제목'
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    title: e.target.value,
                                })
                            }
                        />
                    </AppTitle>
                    <AppDescription>
                        <SubTitleInput
                            type='text'
                            placeholder='부 제목'
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    subTitle: e.target.value,
                                })
                            }
                        />
                    </AppDescription>
                    <InstallBtn
                        type='text'
                        placeholder='안드로이드'
                        onChange={(e) =>
                            setNewProduct({
                                ...newProduct,
                                androidStoreLink: e.target.value,
                            })
                        }
                    />
                    <InstallBtn
                        type='text'
                        placeholder='iOS'
                        onChange={(e) =>
                            setNewProduct({
                                ...newProduct,
                                appleStoreLink: e.target.value,
                            })
                        }
                    />
                    <DetailInfo>
                        <InfoInput
                            type='text'
                            placeholder='앱에 대한 자세한 설명..'
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    body: e.target.value,
                                })
                            }
                        />
                    </DetailInfo>
                    <div>
                        <label htmlFor='input_file'>
                            <img src={IMAGE} />
                        </label>
                        <ImageInput
                            type='file'
                            multiple
                            id='input_file'
                            onChange={handleAddImages}
                        />
                    </div>
                    {showImages &&
                        showImages.map((image, key) => (
                            <DetailImage src={image} />
                        ))}
                </div>
                <Regisbutton
                    onClick={() => {
                        addData();
                    }}
                >
                    등록
                </Regisbutton>
            </ModalContainer>
        </div>
    );
}

const Regisbutton = styled.button`
    position: absolute;
    border: none;
    background-color: #5858fa;
    border-radius: 5px;
    color: white;
    width: 5rem;
    height: 2rem;
    left: 34.5rem;
    top: 12rem;
    &:hover {
        transition: 0.1s ease-in;
        background-color: #8181f7;
    }
`;

const InstallBtn = styled.input`
    position: absolute;
    border: none;
    width: 20%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border: 0.5px solid silver;
    left: 30rem;
    top: 1.9rem;

    & + & {
        top: 3.5rem;
    }
`;

const PhotoImg = styled.img`
    position: absolute;
    width: 40px;
    height: 40px;
    left: 3rem;
    top: 2rem;
`;

const TitleInput = styled.input`
    width: 30%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border: 0.5px solid silver;
`;

const SubTitleInput = styled.input`
    width: 50%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border: 0.5px solid silver;
`;

const InfoInput = styled.textarea`
    margin-left: -2rem;
    margin-top: -1rem;
    width: 110%;
    height: 8rem;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    word-break: break-all;
    resize: none;
    border: 0.5px solid silver;
`;

const ImageInput = styled.input`
    display: none;
`;

const DetailImage = styled.img`
    border-radius: 8px;
    width: 200px;
    height: 400px;
    z-index: 5;
`;

const DetailInfo = styled.div`
    position: relative;
    width: 70%;
    margin: 0 auto;
    top: -1rem;
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
