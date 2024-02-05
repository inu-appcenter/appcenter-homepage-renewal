import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal'; // react-modal 라이브러리 import
import { MemberModalopen, MemberModalclose } from '../../modules/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

export default function FindMemId() {
    const dispatch = useDispatch();
    const memberModalOpen = useSelector(
        (state) => state.product.memberModalOpen
    );

    const [data, setData] = useState([]);

    const [newMember, setNewMember] = useState('');

    // 모달을 닫아주고 스크롤을 풀어줌.
    const closeModal = () => {
        dispatch(MemberModalclose());
        setData([]);
        openScroll();
    };

    const openScroll = useCallback(() => {
        document.body.style.removeProperty('overflow');
    }, []);

    const findData = async () => {
        try {
            const newMemberEncode = encodeURIComponent(newMember);
            const result = await axios.get(
                `https://server.inuappcenter.kr/members/id/${newMemberEncode}`
            );
            console.log('Success:', result.data);

            // POST 요청 성공 시, 새로운 동아리원을 data 상태 변수에 추가합니다.
            setData(result.data);

            setNewMember('');
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    return (
        <>
            <ModalContainer
                isOpen={memberModalOpen}
                onRequestClose={closeModal}
                contentLabel='Edit Member Modal'
            >
                <ModalTitle>편성 추가</ModalTitle>
                <ModalLabel>동아리원</ModalLabel>
                <ModalInput
                    type='text'
                    placeholder='눌러서 동아리원 찾기'
                    value={newMember}
                    onChange={(e) => setNewMember(e.target.value)}
                />
                <ModalTemplate>
                    <ModalHeader type='name'>이름</ModalHeader>
                    <ModalHeader>번호</ModalHeader>
                    <ModalHeader type='email'>이메일</ModalHeader>
                </ModalTemplate>
                <>
                    {data.map((member, index) => (
                        <LabelWrapper>
                            <ModalLabel>{member.name}</ModalLabel>
                            <ModalLabel>{member.member_id}</ModalLabel>
                            <ModalLabel>{member.email}</ModalLabel>
                        </LabelWrapper>
                    ))}
                </>
                <ModalButtonWrapper>
                    <ModalButton onClick={findData}>검색</ModalButton>
                    <ModalButton onClick={closeModal}>취소</ModalButton>
                </ModalButtonWrapper>
            </ModalContainer>
            ;
        </>
    );
}
const ModalHeader = styled.div`
    position: absolute;

    ${(props) =>
        props.type === 'name'
            ? 'left: 10.2rem;'
            : props.type === 'email'
            ? 'left: 23.2rem;'
            : ''}
`;

const LabelWrapper = styled.div`
    display: flex;
    margin-top: 1rem;
`;

const ModalTemplate = styled.div`
    display: flex;
    margin-bottom: 1rem;
`;
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
