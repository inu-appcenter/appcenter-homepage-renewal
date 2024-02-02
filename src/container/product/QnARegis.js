import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal'; // react-modal 라이브러리 import
import { RMopen, RMclose } from '../../modules/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

export default function QnARegis() {
    const [data, setData] = useState([]);

    // 상태관리 관련
    const dispatch = useDispatch();
    const regisModalOpen = useSelector((state) => state.product.regisModalOpen);

    // 새 멤버 추가 입력받을 상태 변수
    const [newQna, setNewQna] = useState({
        answer: '',
        id: '',
        part: '',
        question: '',
    });

    const addData = async () => {
        try {
            const result = await axios.post(
                'https://server.inuappcenter.kr/faqs',
                newQna
            );

            // POST 요청 성공 시, 새로운 질문을 data 상태 변수에 추가합니다.
            setData([...data, newQna]);

            setNewQna({
                answer: '',
                id: '',
                part: '',
                question: '',
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
                <ModalTitle>질문 및 답변 추가</ModalTitle>
                <ModalLabel>파트</ModalLabel>
                <ModalInput
                    type='text'
                    placeholder='파트'
                    value={newQna.part}
                    onChange={(e) =>
                        setNewQna({ ...newQna, part: e.target.value })
                    }
                />
                <ModalLabel>질문</ModalLabel>
                <ModalInput
                    type='text'
                    placeholder='질문'
                    value={newQna.question}
                    onChange={(e) =>
                        setNewQna({ ...newQna, question: e.target.value })
                    }
                />
                <ModalLabel>답변</ModalLabel>
                <ModalInput
                    type='text'
                    placeholder='답변'
                    value={newQna.answer}
                    onChange={(e) =>
                        setNewQna({ ...newQna, answer: e.target.value })
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
    background-color: #fff;
    border-radius: 8px;
    border: 2px solid grey;
    padding: 20px;
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
`;

const ModalLabel = styled.label`
    font-size: 1rem;
    margin-bottom: 5px;
`;

const ModalInput = styled.input`
    width: 70%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    text-align: center;
`;

const ModalButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`;

const ModalButton = styled.button`
    background-color: grey;
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
