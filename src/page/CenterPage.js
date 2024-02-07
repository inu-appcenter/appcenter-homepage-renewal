import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import InOut from '../component/common/InOut';
import Generation from '../resource/img/groups_FILL0_wght400_GRAD0_opsz24.svg';
import Member from '../resource/img/person_FILL0_wght400_GRAD0_opsz24.svg';
import Role from '../resource/img/group_FILL0_wght400_GRAD0_opsz24.svg';

export default function AdminPage() {
    return (
        <AdminBox>
            <InOut />
            <IntroBox>
                <Text type='title'>{'앱센터 동아리 관리'}</Text>
                <Text type='top'>
                    {'동아리원 정보와 기수, 역할을 관리할 수 있어요'}
                </Text>
            </IntroBox>
            <BoxContainer>
                <Link to='/../manage'>
                    <InfoBox>
                        <PhotoBox>
                            <PhotoImg src={Member} />
                        </PhotoBox>
                        <DetailText type='title'>{'동아리원 관리'}</DetailText>
                        <DetailText type='top'>
                            {'동아리원을 추가, 삭제, 수정을 할 수 있어요'}
                        </DetailText>
                    </InfoBox>
                </Link>
                <Link to='/../generation'>
                    <InfoBox>
                        <PhotoBox>
                            <PhotoImg src={Generation} />
                        </PhotoBox>
                        <DetailText type='title'>{'기수 관리'}</DetailText>
                        <DetailText type='top'>
                            {'기수에 동아리원을 역할과 함께 편성할 수 있어요'}
                        </DetailText>
                    </InfoBox>
                </Link>
                <Link to='/../role'>
                    <InfoBox>
                        <PhotoBox>
                            <PhotoImg src={Role} />
                        </PhotoBox>
                        <DetailText type='title'>{'역할 관리'}</DetailText>
                        <DetailText type='top'>
                            {
                                '센터장, 파트장, 파트원과 같은 역할을 추가할 수 있어요'
                            }
                        </DetailText>
                    </InfoBox>
                </Link>
            </BoxContainer>
        </AdminBox>
    );
}

const AdminBox = styled.div``;

const PhotoBox = styled.div`
    display: flex;
    background-color: white;
    margin-bottom: auto;
    width: 17%;
    border-radius: 8px;
`;

const PhotoImg = styled.img`
    width: 40px;
    height: 40px;
`;

const BoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 630px;
    height: 400px;
    justify-content: flex-start;
    margin: 0 auto;
    padding: 0 auto;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 250px;
    height: 200px;
    padding: 20px;
    background-color: #fff;
    border: none;
    border-radius: 20px;
    background-color: #f2f2f2;
    padding-bottom: 2rem;

    margin: 0.5rem 0.5rem;

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
        props.type === 'top' ? 600 : props.type === 'title' ? 500 : 400};
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
