import { Link } from 'react-router-dom';
import logo from '../../resource/img/navbar_logo/logo_black.png';
import LoginImg from '../../resource/img/login.png';
import LogOutImg from '../../resource/img/logout.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function InOut() {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 로그인 여부 확인. 로컬 스토리지에 키가 있으면 로그인 상태로 설정
    useEffect(() => {
        const storedToken = window.sessionStorage.getItem('token');

        if (storedToken) {
            axios.defaults.headers.common['X-AUTH-TOKEN'] = storedToken;
        }
        dispatch({
            type: 'login/setLogin',
            payload: { isLoggedIn: storedToken ? true : false },
        });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onLogout = () => {
        window.sessionStorage.removeItem('token');
        dispatch({
            type: 'login/setLogin',
            payload: { isLoggedIn: false },
        });
        alert('로그아웃 되었습니다.');
        navigate('/home');
    };

    return (
        <NavBar>
            <Link to='/../home'>
                <LogoImg src={logo} alt='logo' />
            </Link>
            {isLoggedIn ? (
                <LoginBtn className='menu'>
                    <img src={LogOutImg} onClick={onLogout} alt='logout' />
                </LoginBtn>
            ) : (
                <Link to='/../login'>
                    <LoginBtn className='menu'>
                        <img src={LoginImg} alt='' />
                    </LoginBtn>
                </Link>
            )}
        </NavBar>
    );
}

const LogoImg = styled.img`
    margin-right: auto;
    width: 25px;
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
    justify-content: space-between;
    position: relative;
    height: 25px;
    width: 730px;
    margin: 55px auto 10px auto;

    .menu {
        margin-left: auto;
    }
`;
