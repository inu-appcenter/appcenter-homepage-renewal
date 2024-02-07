import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginLogo from '../../resource/img/Login_logo.png';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // id : 'appcenter', pw : '1q2w3e4r!Appcenter'
    const onClick = async () => {
        const response = await axios //eslint-disable-line no-unused-vars
            .post('https://server.inuappcenter.kr/sign/sign-in', {
                id: username,
                password: password,
            })
            .then((res) => {
                const { token } = res.data;
                axios.defaults.headers.common['X-AUTH-TOKEN'] = token;

                window.sessionStorage.setItem('token', token);
                dispatch({
                    type: 'login/setLogin',
                    payload: { isLoggedIn: true },
                });
                navigate('/admin');
            })
            .catch((err) => {
                console.log(err);
                alert('아이디 또는 비밀번호가 틀렸습니다.');
                setUsername('');
                setPassword('');
            });
    };

    return (
        <Container>
            <LoginBox>
                <LoginImg src={LoginLogo} alt='' />
                <Title>홈페이지 대시보드</Title>
                <InfoBox>
                    <Label>
                        ID :
                        <Input
                            type='id'
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder='아이디를 입력해주세요'
                        />
                    </Label>
                    <Label>
                        PW :
                        <Input
                            type='password'
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='비밀번호를 입력해주세요'
                        />
                    </Label>
                    <Button onClick={() => onClick()}>로그인</Button>
                </InfoBox>
            </LoginBox>
        </Container>
    );
}

const InfoBox = styled.div`
    padding-right: 7rem;
`;

const LoginImg = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
`;

const LoginBox = styled.div`
    padding: 2rem 0;
    background-color: #444345;
    border-radius: 8px;
`;

const Container = styled.div`
    display: flex;

    text-align: center;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;

    width: 500px;
    height: 1000px;

    margin-top: 0;
`;

const Title = styled.h1`
    color: #fff;
    margin-top: 0;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    margin-right: 2px;
    color: white;

    &:nth-child(1) {
        margin-left: 8px;
    }
`;

const Input = styled.input`
    padding: 5px;
    margin: 0 0 0 10px;
    border-radius: 6px;
    width: 60%;

    ${(props) => props.type === 'id' && `width: 61%;`}
`;

const Button = styled.button`
    position: absolute;
    padding: 24px 24px;
    background-color: #1e88e5;
    border-radius: 8px;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-top: -4.4rem;
    margin-left: 9.5rem;
`;
