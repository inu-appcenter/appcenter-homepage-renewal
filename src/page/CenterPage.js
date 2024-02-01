import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import InOut from '../component/common/InOut';

export default function AdminPage() {
    return (
        <>
            <InOut />
            <IntroBox>
                <Text type='title'>{'앱센터 동아리원 관리'}</Text>
                <Text type='top'>
                    {
                        '동아리원 편성, 기수 관리, 동아리원 정보등을 관리할 수 있어요'
                    }
                </Text>
            </IntroBox>
            <BoxContainer>
                <Link to='/../manage'>
                    <InfoBox>
                        <DetailText type='title'>{'동아리원 관리'}</DetailText>
                        <DetailText type='top'>
                            {'동아리를 추가, 삭제, 수정을 할 수 있어요'}
                        </DetailText>
                    </InfoBox>
                </Link>
                <Link to='/../generation'>
                    <InfoBox>
                        <DetailText type='title'>{'기수 관리'}</DetailText>
                        <DetailText type='top'>
                            {
                                '동아리원을 기수에 추가, 삭제, 수정을 할 수 있어요'
                            }
                        </DetailText>
                    </InfoBox>
                </Link>
            </BoxContainer>
            <BoxContainer>
                <Link to='/../role'>
                    <InfoBox>
                        <DetailText type='title'>{'역할 관리'}</DetailText>
                        <DetailText type='top'>
                            {'역할군을 관리할 수 있어요'}
                        </DetailText>
                    </InfoBox>
                </Link>
                <InfoBox>
                    <DetailText type='title'>{'전체'}</DetailText>
                    <DetailText type='top'>
                        {'홈페이지에 게재된 앱 정보와 목록을 관리할 수 있어요'}
                    </DetailText>
                </InfoBox>
                <Link to='/../QnA'>
                    <InfoBox>
                        <DetailText type='title'>{'질문 관리'}</DetailText>
                        <DetailText type='top'>
                            {'질문과 답변을 추가, 삭제, 수정을 할 수 있어요'}
                        </DetailText>
                    </InfoBox>
                </Link>
            </BoxContainer>
        </>
    );
}

const BoxContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1.5rem;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 250px;
    height: 300px;
    padding: 20px;
    background-color: #fff;
    border: none;
    border-radius: 20px;
    background-color: #f2f2f2;
    padding-bottom: 2rem;

    margin: 0 0.5rem;

    &:hover {
        background-color: #bdbdbd;
    }
`;

const IntroBox = styled.div`
    position: relative;
    width: 700px;
    height: 130px;
    background-color: #f2f2f2;
    margin: 0 auto 4rem auto;
    top: 20px;
    border-radius: 20px;
    padding-top: 50px;
`;

const DetailText = styled.div`
    text-align: left;
    color: ${(props) => (props.type === 'title' ? '#424242' : '#848484')};
    font-weight: ${(props) =>
        props.type === 'top' ? 300 : props.type === 'title' ? 400 : 400};
    white-space: pre-line;

    ${(props) =>
        props.type === 'title'
            ? css`
                  font-size: ${(props) => props.theme.fontSize.mobile.title};
              `
            : css`
                  font-size: ${(props) => props.theme.fontSize.mobile.caption};
              `}
`;

const Text = styled.div`
    font-style: normal;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${(props) => (props.type === 'title' ? '#424242' : '#848484')};
    font-weight: ${(props) =>
        props.type === 'top' ? 600 : props.type === 'title' ? 700 : 400};
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
