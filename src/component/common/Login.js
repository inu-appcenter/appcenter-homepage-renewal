import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const dispatch = useDispatch();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    // id : 'appcenter', pw : '1q2w3e4r!Appcenter'
    const onClick = async () => {
        const response = await axios
            .post('https://server.inuappcenter.kr/sign/sign-in', {
                id: username,
                password: password,
            })
            .then((res) => {
                const { token } = res.data;
                axios.defaults.headers.common['X-AUTH-TOKEN'] = token;

                window.localStorage.setItem('token', token);
                navigate('/admin');
                dispatch({
                    type: 'login/setLogin',
                    payload: { isLoggedIn: true },
                });
            })
            .catch((err) => {
                alert('아이디 또는 비밀번호가 틀렸습니다.');
                setUsername('');
                setPassword('');
            });
    };

    return (
        <Container>
            <LoginBox>
                <Title>로그인</Title>
                <div>
                    <Label>
                        Username:
                        <Input
                            type='text'
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </Label>
                    <Label>
                        Password:
                        <Input
                            type='password'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </Label>
                    <Button onClick={onClick}>Login</Button>
                </div>
            </LoginBox>
        </Container>
    );
}

const LoginBox = styled.div`
    border: 2px solid black;
    padding: 2rem 0;
`;

const Container = styled.div`
    display: flex;

    text-align: center;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;

    width: 500px;
    height: 1000px;
`;

const Title = styled.h1`
    color: #333;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    margin-right: 2px;
`;

const Input = styled.input`
    padding: 5px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
`;
