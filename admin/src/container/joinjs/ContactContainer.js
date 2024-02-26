import Subtitle from '../../component/joinus/Subtitle';
import styled from 'styled-components';
import Map from '../../component/joinus/Map';
import { socialLink } from '../../resource/string/socialLink';

export default function ContactContainer() {
    return (
        <ContactContainerWrapper>
            <Subtitle title='Contact' />
            <Map />
            <ContactList>
                <ul>
                    카카오 플러스 친구:{' '}
                    <a href={socialLink.kakaotalk.address}>@인천대앱센터</a>
                </ul>
                <ul>
                    페이스북:{' '}
                    <a href={socialLink.facebook.address}>앱센터 페이스북</a>
                </ul>
                <ul>
                    이메일:{' '}
                    <a href={socialLink.email.address}>
                        inuappcenter@gmail.com
                    </a>
                </ul>
            </ContactList>
        </ContactContainerWrapper>
    );
}

const ContactContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const ContactList = styled.li`
    list-style: none;

    ul {
        padding: 0;

        a {
            color: ${(props) => props.theme.color.primary};
        }
    }

    font-size: ${(props) => props.theme.fontSize.bigDesktop.caption};
    @media (max-width: 1800px) {
        font-size: ${(props) => props.theme.fontSize.desktop.caption};
    }
    @media (max-width: 1200px) {
        font-size: ${(props) => props.theme.fontSize.tablet.caption};
    }
    @media (max-width: 768px) {
        font-size: ${(props) => props.theme.fontSize.smallTablet.caption};
    }
    @media (max-width: 576px) {
        font-size: ${(props) => props.theme.fontSize.mobile.caption};
    }
`;
