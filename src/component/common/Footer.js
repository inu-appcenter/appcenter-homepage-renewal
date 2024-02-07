import styled from 'styled-components';
import { socialLink } from '../../resource/string/socialLink';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <FooterWrapper>
            <SocialIcons>
                <a href={socialLink.email.address}>
                    <img
                        src={socialLink.email.icon}
                        alt='인천대앱센터 이메일'
                    />
                </a>
                <a href={socialLink.facebook.address}>
                    <img
                        src={socialLink.facebook.icon}
                        alt='인천대앱센터 페이스북'
                    />
                </a>
                <a href={socialLink.kakaotalk.address}>
                    <img
                        src={socialLink.kakaotalk.icon}
                        alt='카카오톡 플러스친구 @인천대앱센터'
                    />
                </a>
                <Link to='../login'>
                    <a href='#!'>
                        <img
                            src={socialLink.admin.icon}
                            alt='인천대앱센터 관리자 페이지'
                        />
                    </a>
                </Link>
            </SocialIcons>
            <Copyright>© 2023 INU Appcenter. All rights reserved.</Copyright>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    margin: 100px auto;
    padding: 0 32px;
    min-width: 200px;
`;
const SocialIcons = styled.div`
    display: flex;
    margin: 0 auto 18px;
    justify-content: space-between;
    width: 90px;
    height: 24px;

    img {
        width: 24px;
    }
`;

const Copyright = styled.div`
    color: ${(props) => props.theme.color.black};
    text-align: center;
    font-size: 16px;
    font-weight: 500;
`;
