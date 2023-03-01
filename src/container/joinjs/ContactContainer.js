import Subtitle from "../../component/joinus/Subtitle";
import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../../lib/viewportCalculate";
import Map from "../../component/joinus/Map";
import {socialLink} from "../../resource/string/socialLink";

export default function ContactContainer() {
    return (
        <ContactContainerWrapper>
            <Subtitle
                title="Contact"
            />
            <Map/>
            <ContactList>
                <ul>카카오 플러스 친구: <a href={socialLink.kakaotalk.address}>@인천대앱센터</a></ul>
                <ul>페이스북: <a href={socialLink.facebook.address}>앱센터 페이스북</a></ul>
                <ul>이메일: <a href={socialLink.email.address}>inuappcenter@gmail.com</a></ul>
            </ContactList>
        </ContactContainerWrapper>
    );
}

const ContactContainerWrapper =  styled.div`
    margin-top: ${viewHeightCalc(70)};
`;
const ContactList = styled.li`
    width: ${viewWidthCalc(350)};
    margin: 0 auto;
    list-style: none;
    ul {
        text-align: left;
        font-size: 1rem;
        padding: 0;
        a {
            color: ${props=>props.theme.color.primary}
        }
    }
    ul + ul {
        margin-top: 1.5rem;
    }
`;