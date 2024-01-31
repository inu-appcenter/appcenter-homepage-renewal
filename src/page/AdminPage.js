import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import InOut from '../component/common/InOut';

export default function AdminPage() {
    return (
        <>
            <InOut />
            <IntroBox>
                <Text type='title'>{'홈페이지 대시보드'}</Text>
                <Text type='top'>{'환영합니다.'}</Text>
            </IntroBox>
            <IntroFunc>대시보드 기능</IntroFunc>
            <Link to='/../center'>
                <MenuBox>
                    <MenuText type='title'>{'앱센터 동아리원 관리'}</MenuText>
                    <MenuText type='top'>
                        {
                            '동아리원 편성, 기수 관리, 동아리원 정보등을 관리할 수 있어요'
                        }
                    </MenuText>
                </MenuBox>
            </Link>
            <Link to='/../product'>
                <MenuBox>
                    <MenuText type='title'>{'앱 관리'}</MenuText>
                    <MenuText type='top'>
                        {'홈페이지에 게재된 앱 정보와 목록을 관리할 수 있어요'}
                    </MenuText>
                </MenuBox>
            </Link>
            <MenuBox>
                <MenuText type='title'>{'사진 게시판 관리'}</MenuText>
                <MenuText type='top'>
                    {'활동 사진에 게재된 사진들을 관리할 수 있어요'}
                </MenuText>
            </MenuBox>
        </>
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

const MenuText = styled.div`
    text-align: left;
    font-style: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${(props) => (props.type === 'title' ? '#424242' : '#848484')};
    font-weight: ${(props) =>
        props.type === 'top' ? 400 : props.type === 'title' ? 500 : 300};
    margin-bottom: 3px;
    white-space: pre-line;

    ${(props) =>
        props.type === 'title'
            ? css`
                  font-size: ${(props) => props.theme.fontSize.tablet.title};
              `
            : css`
                  font-size: ${(props) => props.theme.fontSize.tablet.caption};
              `}
`;

const IntroFunc = styled.div`
    display: flex;
    height: 25px;
    width: 700px;
    margin: 1.5rem auto 1.5rem auto;
    font-size: 1.5rem;
`;

const MenuBox = styled.div`
    padding: 2.5rem 0 0 1.4rem;
    width: 600px;
    height: 8rem;
    background-color: #f2f2f2;
    margin: 0 auto 1.5rem auto;
    top: 20px;
    border-radius: 20px;
    align-items: center;

    &:hover {
        background-color: #bdbdbd;
        transition: 0.3s ease-in-out;
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

const IntroBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 700px;
    height: 350px;
    background-color: #f2f2f2;
    margin: 0 auto 1rem auto;
    top: 20px;
    border-radius: 20px;
    align-items: center;
`;

const Text = styled.div`
    font-style: normal;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${(props) => (props.type === 'title' ? '#424242' : '#848484')};
    font-weight: ${(props) =>
        props.type === 'top' ? 600 : props.type === 'title' ? 900 : 600};
    margin-bottom: 3px;
    white-space: pre-line;

    ${(props) =>
        props.type === 'title'
            ? css`
                  font-size: ${(props) => props.theme.fontSize.desktop.title};
              `
            : css`
                  font-size: ${(props) => props.theme.fontSize.desktop.caption};
              `}
`;
