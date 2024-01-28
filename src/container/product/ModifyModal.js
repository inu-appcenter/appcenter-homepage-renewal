import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal'; // react-modal 라이브러리 import
import { MODopen, MODclose } from '../../modules/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import IMAGE from '../../resource/img/product/image_FILL0_wght400_GRAD0_opsz24.png';
import EDIT from '../../resource/img/product/edit_note_FILL0_wght400_GRAD0_opsz24.png';
import { set } from 'lodash';

export default function ModifyModal(props) {
    const { id } = props;
    const [data, setData] = useState([]);
    const [uploadImgUrl, setUploadImgUrl] = useState('');
    const [showImages, setShowImages] = useState([]);
    const [imageData, setImageData] = useState([]);
    const [photoIds, setPhotoids] = useState([]);
    const [isMod, setIsMod] = useState(false);

    const [headKey, setHeadKeys] = useState([]);
    const [belowKey, setBelowKeys] = useState([]);
    const [upload, setUpload] = useState([]);
    const [uploadImage, setUploadImage] = useState([]);
    const [detailImageData, setDetailImageData] = useState([]);
    const [modifyImageData, setModifyImageData] = useState([]);

    // 입력받은 데이터를 저장
    const [updateProduct, setUpdateProduct] = useState({
        body: '',
        title: '',
        subTitle: '',
        androidStoreLink: '',
        appleStoreLink: '',
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

    // 특정 인덱스 요소만 변경
    const updateElementAtIndex = (index, newValue) => {
        setDetailImageData((prevArray) => {
            // 이전 배열 복사
            const newArray = [...prevArray];
            // 특정 인덱스의 요소 변경
            newArray[index] = newValue;
            return newArray;
        });
    };

    const updateURLElementAtIndex = (index, newValue) => {
        setShowImages((prevArray) => {
            // 이전 배열 복사
            const newArray = [...prevArray];
            // 특정 인덱스의 요소 변경
            newArray[index] = newValue;
            return newArray;
        });
    };

    const handleEdit = async () => {
        // 수정할 데이터를 가져옵니다.
        const formData = new FormData();
        const newPhotoId = [...photoIds];

        formData.append('title', updateProduct.title);
        formData.append('subTitle', updateProduct.subTitle);
        formData.append('androidStoreLink', updateProduct.androidStoreLink);
        formData.append('appleStoreLink', updateProduct.appleStoreLink);
        formData.append('body', updateProduct.body);

        uploadImgUrl && formData.append('multipartFiles', imageData[0]);

        isMod &&
            modifyImageData.map((item) =>
                formData.append('multipartFiles', item)
            );

        const photoIdParam = newPhotoId.join(',');

        try {
            // id를 사용하여 수정 요청을 보냅니다.
            const response = await axios.patch(
                `https://server.inuappcenter.kr/introduction-board/${photoIdParam}?board_id=${id}`,
                formData
            );
            console.log('Member with ID', id, 'has been updated.');
            console.log(response);
            // 업데이트된 데이터를 data 상태에서 업데이트합니다.
            setData((prevData) =>
                prevData.map((item) =>
                    item.id === id ? { ...item, ...formData } : item
                )
            );
        } catch (error) {
            console.error('Error updating member:', error);
        }
        dispatch(MODclose());
    };

    useEffect(() => {
        console.log(id);
        axios
            .get(
                `https://server.inuappcenter.kr/introduction-board/public/${id}`
            )
            .then((res) => {
                setUpdateProduct(res.data);
                const imageObject = res.data.images;
                const firstKey = imageObject && Object.keys(imageObject)[0];
                const firstValue = firstKey && imageObject[firstKey];
                const secondKey = imageObject && Object.keys(imageObject)[1];
                const secondValue = secondKey && imageObject[secondKey];
                const thirdKey = imageObject && Object.keys(imageObject)[2];
                const thirdValue = thirdKey && imageObject[thirdKey];
                const fourthKey = imageObject && Object.keys(imageObject)[3];
                const fourthValue = fourthKey && imageObject[fourthKey];

                console.log(secondValue, thirdValue, fourthValue);

                // 썸네일 키
                setHeadKeys([firstKey]);
                // 디테일 키
                setBelowKeys([secondKey, thirdKey, fourthKey]);

                // 썸네일 이미지
                setImageData([firstValue]);
                // 디테일 이미지
                setDetailImageData([secondValue, thirdValue, fourthValue]);
            });
    }, []);

    const onClick = (index) => {
        return () => {
            const newShowImages = [...showImages];
            const newUploadImage = [...detailImageData];
            newShowImages.splice(index, 1);
            newUploadImage.splice(index, 1);
            setShowImages(newShowImages);
            setUploadImage(newUploadImage);
        };
    };

    const onchangeImageUpload = (e) => {
        const { files } = e.target;
        const modifyIds = [...photoIds];
        setImageData(files);
        modifyIds.push(headKey[0]);

        const uploadFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(uploadFile);
        reader.onloadend = () => {
            setUploadImgUrl(reader.result);
        };

        setPhotoids(modifyIds);
        console.log(e.target);
    };

    const handleAddImages = (index) => (e) => {
        setIsMod(true);
        const imageLists = e.target.files;
        const modifyList = [...modifyImageData];
        const modifyIds = [...photoIds];
        console.log(imageLists);

        const realImage = imageLists[0];
        modifyList.push(realImage);
        modifyIds.push(belowKey[index]);

        const currentImageUrl = URL.createObjectURL(imageLists[0]);
        updateURLElementAtIndex(index, currentImageUrl);

        setModifyImageData(modifyList);
        setPhotoids(modifyIds);
        console.log(modifyList);
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
                    {imageData && !uploadImgUrl && (
                        <figure>
                            <AppImage src={imageData[0]} img='img' />
                        </figure>
                    )}
                    <AppTitle>
                        <TitleInput
                            type='text'
                            value={updateProduct.title}
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
                            value={updateProduct.subTitle}
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
                            value={updateProduct.androidStoreLink}
                            onChange={(e) =>
                                setUpdateProduct({
                                    ...updateProduct,
                                    androidStoreLink: e.target.value,
                                })
                            }
                        />
                        <InstallBtn
                            type='text'
                            value={updateProduct.appleStoreLink}
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
                            value={updateProduct.body}
                            onChange={(e) =>
                                setUpdateProduct({
                                    ...updateProduct,
                                    body: e.target.value,
                                })
                            }
                        />
                    </DetailInfo>
                    <ImageBox>
                        <DetailImage src={detailImageData[0]} />
                        <Imagelabel htmlFor='input_file1'>
                            <img src={IMAGE} />
                        </Imagelabel>
                        <ImageInput
                            type='file'
                            id='input_file1'
                            onChange={handleAddImages(0)}
                        />
                    </ImageBox>
                    <ImageBox>
                        <DetailImage src={detailImageData[1]} />
                        <Imagelabel htmlFor='input_file2'>
                            <img src={IMAGE} />
                        </Imagelabel>
                        <ImageInput
                            type='file'
                            id='input_file2'
                            onChange={handleAddImages(1)}
                        />
                    </ImageBox>
                    <ImageBox>
                        <DetailImage src={detailImageData[2]} />
                        <Imagelabel htmlFor='input_file3'>
                            <img src={IMAGE} />
                        </Imagelabel>
                        <ImageInput
                            type='file'
                            id='input_file3'
                            onChange={handleAddImages(2)}
                        />
                    </ImageBox>
                </div>
                <NavBar>
                    <Regisbutton
                        onClick={() => {
                            handleEdit();
                        }}
                    >
                        수정
                    </Regisbutton>
                </NavBar>
            </ModalContainer>
        </div>
    );
}

const Imagelabel = styled.label`
    position: absolute;
    left: 11rem;
    top: rem;
`;

const DeleteBtn = styled.button`
    position: absolute;
    border: none;
    background-color: transparent;
    border-radius: 15px;
    left: 10.8rem;
    z-index: 1;
`;

const ImageBox = styled.span`
    position: relative;
`;

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
    width: 27%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border: 0.5px solid silver;

    & + & {
        margin-left: 1rem;
    }
`;

const PhotoImg = styled.img`
    position: absolute;
    width: 30px;
    height: 30px;
    left: 1rem;
    top: 6rem;
`;

const TitleInput = styled.input`
    width: 40%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border: 0.5px solid silver;
`;

const SubTitleInput = styled.input`
    width: 67%;
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
