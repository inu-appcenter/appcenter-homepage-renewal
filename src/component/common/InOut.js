import { Link } from 'react-router-dom';
import logo from '../../resource/img/navbar_logo/logo_black.png';
import LoginImg from '../../resource/img/login.png';
import LogOutImg from '../../resource/img/logout.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function InOut() {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const dispatch = useDispatch();

    // 로그인 여부 확인
    useEffect(() => {
        const storedToken = window.localStorage.getItem('token');

        if (storedToken) {
            axios.defaults.headers.common['X-AUTH-TOKEN'] = storedToken;
        }
        dispatch({
            type: 'login/setLogin',
            payload: { isLoggedIn: storedToken ? true : false },
        });
    }, []);

    const onLogout = () => {
        window.localStorage.removeItem('token');
        dispatch({
            type: 'login/setLogin',
            payload: { isLoggedIn: false },
        });

        alert('로그아웃 되었습니다.');
    };
    return (
        <NavBar>
            <LogoImg src={logo} alt='logo' />
            {isLoggedIn ? (
                <LoginBtn className='menu'>
                    <img src={LogOutImg} onClick={onLogout} alt='logout' />
                </LoginBtn>
            ) : (
                <Link to='/../login'>
                    <LoginBtn className='menu'>
                        <img src={LoginImg} />
                    </LoginBtn>
                </Link>
            )}
        </NavBar>
    );
}

const LogoImg = styled.img`
    margin-right: auto;
`;

const LoginBtn = styled.button`
    border: none;
    background-color: transparent;
    &:hover {
        cursor: pointer;
        transition: 0.3s ease-in-out;
        opacity: 0.5;
    }
`;

const NavBar = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    position: relative;
    height: 25px;
    width: 730px;
    margin: 55px auto 10px auto;

    .menu {
        margin-left: auto;
    }
`;
