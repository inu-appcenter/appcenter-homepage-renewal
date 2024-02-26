import { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal'; // react-modal 라이브러리 import
import { RMclose } from '../../modules/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import IMAGE from '../../resource/img/product/image_FILL0_wght400_GRAD0_opsz24.png';
import DELETE from '../../resource/img/product/backspace_FILL0_wght400_GRAD0_opsz24.png';
import CloseButton from '../../resource/img/product/close_button.png';

export default function ProductRegis() {
    const [data, setData] = useState([]);
    const [uploadImgUrl, setUploadImgUrl] = useState('');
    const [showImages, setShowImages] = useState([]);

    const [upload, setUpload] = useState([]);
    const [uploadImage, setUploadImage] = useState([]);

    // 입력받은 데이터를 저장
    const [newProduct, setNewProduct] = useState({
        body: '',
        title: '',
        subTitle: '',
        androidStoreLink: '',
        appleStoreLink: '',
    });

    // 상태관리 관련
    const dispatch = useDispatch();
    const regisModalOpen = useSelector((state) => state.product.regisModalOpen);

    const deleteProduct = (index) => {
        return () => {
            const newShowImages = [...showImages];
            const newUploadImage = [...uploadImage];
            newShowImages.splice(index, 1);
            newUploadImage.splice(index, 1);
            setShowImages(newShowImages);
            setUploadImage(newUploadImage);
            console.log(newUploadImage);
        };
    };

    // 서버에 데이터를 저장하는 함수
    const addData = async () => {
        try {
            const formData = new FormData();
            console.log(upload);
            console.log(uploadImage);

            formData.append('title', newProduct.title);
            formData.append('subTitle', newProduct.subTitle);
            formData.append('androidStoreLink', newProduct.androidStoreLink);
            formData.append('appleStoreLink', newProduct.appleStoreLink);
            formData.append('body', newProduct.body);

            formData.append(
                'multipartFiles',
                new Blob([upload], { type: 'image/png' })
            );

            uploadImage.forEach((image) => {
                formData.append(
                    'multipartFiles',
                    new Blob([image], { type: 'image/png' })
                );
                console.log(image);
            });

            console.log(formData.get('multipartFiles'));

            for (let key of formData.keys()) {
                console.log(key);
            }

            for (let value of formData.values()) {
                console.log(value);
            }

            let imageSum = 0;
            imageSum += upload.size;
            for (const image of uploadImage) {
                imageSum += image.size;
            }

            if (imageSum > 15 * 1024 * 1024) {
                alert('이미지 용량이 15MB를 초과합니다.');
                return;
            }

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
            });

            dispatch(RMclose());
            setUpload();
            setUploadImage();

            // POST 요청 성공 시, 새로운 동아리원을 data 상태 변수에 추가
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    const openScroll = useCallback(() => {
        document.body.style.removeProperty('overflow');
    }, []);

    // 모달을 닫아주고 스크롤을 풀어줌.
    const closeModal = () => {
        dispatch(RMclose());
        openScroll();
    };

    const onchangeImageUpload = (e) => {
        const { files } = e.target;
        setUpload(files[0]);
        const uploadFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(uploadFile);
        reader.onloadend = () => {
            setUploadImgUrl(reader.result);
        };
    };

    const handleAddImages = (e) => {
        const imageLists = e.target.files;
        console.log(e.target.files[0]);
        let imageUrlLists = [...showImages];
        let realImageLists = [...uploadImage];
        console.log(realImageLists);

        for (let i = 0; i < imageLists.length; i++) {
            const realImage = imageLists[i];
            realImageLists.push(realImage);
        }

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
        }
        if (imageUrlLists.length > 3) {
            alert('이미지는 최대 3개까지만 등록 가능합니다.');
            return;
        }

        console.log(realImageLists);

        setShowImages(imageUrlLists);
        setUploadImage(realImageLists);
    };

    return (
        <div>
            <ModalContainer
                isOpen={regisModalOpen}
                onRequestClose={closeModal}
                contentLabel='Product Modal'
            >
                <div>
                    <CloseImg src={CloseButton} onClick={closeModal} />
                    <div>
                        <Photolabel htmlFor='input_img'>
                            <PhotoImg src={IMAGE} />
                        </Photolabel>
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
                    <LinkBox>
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
                    </LinkBox>
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
                            <img src={IMAGE} alt='' />
                        </label>
                        <ImageInput
                            type='file'
                            multiple
                            id='input_file'
                            onChange={handleAddImages}
                        />
                    </div>
                    {showImages &&
                        showImages.map((image, index) => (
                            <ImageBox>
                                <DetailImage src={image} />
                                <DeleteBtn
                                    onClick={deleteProduct(index)}
                                    regisModalOpen={regisModalOpen}
                                >
                                    <img src={DELETE} alt='' />
                                </DeleteBtn>
                            </ImageBox>
                        ))}

                    {showImages.length === 0 && (
                        <ImageBox>
                            <DetailImage />
                            <DetailImage />
                            <DetailImage />
                        </ImageBox>
                    )}
                </div>
                <NavBar>
                    <Regisbutton
                        onClick={() => {
                            addData();
                        }}
                    >
                        등록
                    </Regisbutton>
                </NavBar>
            </ModalContainer>
        </div>
    );
}

const CloseImg = styled.img`
    position: absolute;
    left: 42.2rem;
    top: -0.5rem;
    border: 1px solid black;
    border-radius: 50%;
    z-index: 1000;
    background-color: white;

    &: hover {
        transition: 0.3s ease-in-out;
        cursor: pointer;
        opacity: 0.5;
    }
`;

const Photolabel = styled.label`
    position: absolute;
    height: 110px;
    width: 110px;
    border: 2px solid black;
    border-radius: 8px;
    left: 1.4rem;
    top: -1.6rem;
    opacity: 0.4;
    z-index: 1;

    &:hover {
        transition: 0.2s ease-in;
        opacity: 1;
    }
`;

const ImageBox = styled.span`
    position: relative;
`;

const DetailImage = styled.img`
    position: relative;
    border-radius: 8px;
    border: 1px groove black;
    width: 202px;
    height: 400px;
    z-index: 0;

    margin-top: 1rem;
    margin-left: 0.01rem;
    margin-right: 0.72rem;
`;

const DeleteBtn = styled.button`
    position: absolute;
    border: none;
    background-color: transparent;
    border-radius: 15px;
    left: 10.8rem;
    margin-top: 1rem;
    z-index: 1;

    ${({ regisModalOpen }) => !regisModalOpen && `display: none`}
`;

const NavBar = styled.div`
    position: absolute;
    display: flex;
    width: 44rem;
    height: 2.5rem;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    align-items: center;

    top: 43.5rem;
    left: -1rem;
`;

const LinkBox = styled.div`
    display: flex;
    position: absolute;

    top: 4.7rem;
    left: 9.2rem;
    width: 48rem;
    height: 1rem;
`;

const Regisbutton = styled.button`
    border: none;
    background-color: #1e88e5;
    border-radius: 5px;
    color: white;
    width: 5rem;
    height: 2rem;
    margin-left: 35rem;

    &:hover {
        transition: 0.1s ease-in;
        background-color: #8181f7;
    }
`;

const InstallBtn = styled.input`
    border: none;
    width: 27%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border: 0.5px solid silver;

    & + & {
        margin-left: 1rem;
    }
`;

const PhotoImg = styled.img`
    display: flex;
    margin-left: auto;
    z-index: 0;
`;

const TitleInput = styled.input`
    width: 67%;
    height: 1.5rem;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border: 0.5px solid silver;
`;

const SubTitleInput = styled.input`
    width: 45%;
    height: 0.8rem;
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

const DetailInfo = styled.div`
    position: relative;
    width: 70%;
    margin: 0 auto;
    top: -0.2rem;
`;

const ModalContainer = styled(Modal)`
    position: absolute;
    top: 35%;
    left: 50%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    max-width: 650px;
    height: 250px;
    width: 100%;
    position: relative;
    transform: translate(-50%, -50%);
    z-index: 100;
    background-color: rgba(255, 255, 255, 1);
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
    top: -2rem;
    left: 8rem;
`;

const AppDescription = styled.p`
    font-size: 16px;
    color: #666;
    position: relative;
    top: -2.8rem;
    left: 8rem;
`;
