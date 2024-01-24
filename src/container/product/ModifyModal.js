import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal'; // react-modal 라이브러리 import
import { MODopen, MODclose } from '../../modules/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import IMAGE from '../../resource/img/product/image_FILL0_wght400_GRAD0_opsz24.png';

export default function ModifyModal(id) {
    const [data, setData] = useState([]);
    const [uploadImgUrl, setUploadImgUrl] = useState('');
    const [showImages, setShowImages] = useState([]);

    const [upload, setUpload] = useState([]);
    const [uploadImage, setUploadImage] = useState([]);

    // 입력받은 데이터를 저장
    const [updateProduct, setUpdateProduct] = useState({
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
    const modifyModalOpen = useSelector(
        (state) => state.product.modifyModalOpen
    );

    const openScroll = useCallback(() => {
        document.body.style.removeProperty('overflow');
    }, []);

    // 모달을 닫아주고 스크롤을 풀어줌.
    const closeModal = () => {
        dispatch(MODclose());
        openScroll();
    };

    const handleEdit = async () => {
        // 수정할 데이터를 가져옵니다.
        const updatedData = {};

        try {
            // member_id를 사용하여 수정 요청을 보냅니다.
            const response = await axios.patch(
                `https://server.inuappcenter.kr/introduction-board?id=${id}`,
                updatedData
            );
            console.log('Member with ID', id, 'has been updated.');
            console.log(response);
            // 업데이트된 데이터를 data 상태에서 업데이트합니다.
            setData((prevData) =>
                prevData.map((item) =>
                    item.member_id === id ? { ...item, ...updatedData } : item
                )
            );
        } catch (error) {
            console.error('Error updating member:', error);
        }
        MODclose();
    };

    const onchangeImageUpload = (e) => {
        const { files } = e.target;
        setUpload(e.target.files);
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
        let realImageLists = [...showImages];

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

        setShowImages(imageUrlLists);
        setUploadImage(realImageLists);
        console.log(showImages);
    };

    return (
        <div>
            <ModalContainer
                isOpen={modifyModalOpen}
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
                                setUpdateProduct({
                                    ...updateProduct,
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
                                setUpdateProduct({
                                    ...updateProduct,
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
                                setUpdateProduct({
                                    ...updateProduct,
                                    androidStoreLink: e.target.value,
                                })
                            }
                        />
                        <InstallBtn
                            type='text'
                            placeholder='iOS'
                            onChange={(e) =>
                                setUpdateProduct({
                                    ...updateProduct,
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
                                setUpdateProduct({
                                    ...updateProduct,
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
                <NavBar>
                    <Regisbutton
                        onClick={() => {
                            handleEdit();
                        }}
                    >
                        등록
                    </Regisbutton>
                </NavBar>
            </ModalContainer>
        </div>
    );
}

const NavBar = styled.div`
    position: absolute;
    display: flex;
    width: 44rem;
    height: 2.5rem;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    align-items: center;

    top: 42.5rem;
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
    background-color: grey;
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
    width: 20%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border: 0.5px solid silver;

    & + & {
        margin-left: 1.5rem;
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
    width: 40%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border: 0.5px solid silver;
`;

const SubTitleInput = styled.input`
    width: 70%;
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
    width: 205px;
    height: 400px;
    z-index: 5;

    margin-left: 0.01rem;
    margin-right: 0.72rem;
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
