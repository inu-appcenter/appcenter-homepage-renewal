import { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal'; // react-modal 라이브러리 import
import { RMclose } from '../../modules/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function RoleRegis() {
    const [data, setData] = useState([]);

    // 상태관리 관련
    const dispatch = useDispatch();
    const regisModalOpen = useSelector((state) => state.product.regisModalOpen);

    // 새 멤버 추가 입력받을 상태 변수
    const [newRole, setNewRole] = useState({
        roleName: '',
        description: '',
    });

    const addData = async () => {
        try {
            const result = await axios.post(
                'https://server.inuappcenter.kr/roles',
                newRole
            );
            console.log('Success:', result.data);

            // POST 요청 성공 시, 새로운 역할을 data 상태 변수에 추가합니다.
            setData([...data, result.data]);

            setNewRole({
                roleName: '',
                description: '',
            });
            dispatch(RMclose());
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    // 모달을 닫아주고 스크롤을 풀어줌.
    const closeModal = () => {
        dispatch(RMclose());
        openScroll();
    };

    const openScroll = useCallback(() => {
        document.body.style.removeProperty('overflow');
    }, []);

    return (
        <>
            <ModalContainer
                isOpen={regisModalOpen}
                onRequestClose={closeModal}
                contentLabel='Edit Role Modal'
            >
                <ModalTitle>역할 등록</ModalTitle>
                <ModalLabel>역할 이름</ModalLabel>
                <ModalInput
                    type='text'
                    value={newRole.roleName}
                    placeholder='역할 이름을 입력해주세요'
                    onChange={(e) =>
                        setNewRole({ ...newRole, roleName: e.target.value })
                    }
                />
                <ModalLabel>설명</ModalLabel>
                <ModalInput
                    type='text'
                    value={newRole.description}
                    placeholder='설명을 입력해주세요'
                    onChange={(e) =>
                        setNewRole({ ...newRole, description: e.target.value })
                    }
                />
                <ModalButtonWrapper>
                    <ModalButton onClick={addData}>등록</ModalButton>
                    <ModalButton onClick={closeModal}>취소</ModalButton>
                </ModalButtonWrapper>
            </ModalContainer>
            ;
        </>
    );
}

const ModalContainer = styled(Modal)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f8;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 500px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ModalTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 15px;
    margin-right: auto;
    margin-top: 0;
    font-weight: 400;
`;

const ModalLabel = styled.label`
    font-size: 1rem;
    margin-bottom: 5px;
    margin-right: auto;
    margin-left: 75px;
`;

const ModalInput = styled.input`
    width: 70%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 1rem;

    &: (6) {
        width: 80%;
    }
`;

const ModalButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`;

const ModalButton = styled.button`
    background-color: #1e88e5;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    & + & {
        margin: 0 10px;
    }

    &:hover {
        background-color: #8181f7;
    }
`;
