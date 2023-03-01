import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../../lib/viewportCalculate";
import {socialLink} from "../../resource/string/socialLink";

export default function Footer() {
    return(
        <FooterWrapper>
            <SocialIcons>
                <a href={socialLink.facebook.address}><img src={socialLink.facebook.icon} /></a>
                <a href={socialLink.kakaotalk.address}><img src={socialLink.kakaotalk.icon} /></a>
            </SocialIcons>
            <Copyright>© 2023 INU Appcenter. All rights reserved.</Copyright>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    width: ${viewWidthCalc(450)};
    margin: ${viewHeightCalc(100)} auto;
`;
const SocialIcons = styled.div`
    display: flex;
    margin: 0 auto ${viewHeightCalc(30)};
    justify-content: space-between;
    width: ${viewWidthCalc(110)};
    height: ${viewHeightCalc(40)};
    img {
        width: ${viewWidthCalc(40)};
    }
`;

const Copyright = styled.div`
    color: ${props=>props.theme.color.black};
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
`;
// font-size: ${props => props.theme.fontSize.bigDesktop.caption};
//     // @media (max-width: 1800px) {
//     //     font-size: ${props => props.theme.fontSize.desktop.caption};
//     // }
//     // @media (max-width: 1200px) {
//     //     font-size: ${props => props.theme.fontSize.tablet.caption};
//     // }
//     // @media (max-width: 768px) {
//     //     font-size: ${props => props.theme.fontSize.smallTablet.caption};
//     // }
//     // @media (max-width: 576px) {
//     //     font-size: ${props => props.theme.fontSize.mobile.caption};
//     // }