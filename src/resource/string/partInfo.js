import {fullPath, routerPath} from "./routerPath";
import androidEmoji from '../img/emoji/android-emoji.png';
import iosEmoji from '../img/emoji/ios-emoji.png';
import serverEmoji from '../img/emoji/server-emoji.png';
import designEmoji from '../img/emoji/design-emoji.png';
import webEmoji from '../img/emoji/web-emoji.png';

export const partInfo = [
    {
        id: 0,
        partName: 'Common',
        question: '앱센터는 어떻게 들어오나요?',
        description: '다른 분야가 모여 하나의 목표를 향해 나아갑니다',
        speechBubble: '안녕하세요 앱센터 입니다!',
        url: routerPath.faqDetail.child.common.url,
        fullUrl: fullPath.common
    },
    {
        id: 1,
        partName: 'Android',
        question: 'Java 와 Kotlin 중 어떤 언어를 쓰나요?',
        description: '프론트엔드, 안드로이드 기반에 맞춰 앱을 구현합니다',
        speechBubble: '안녕하세요! 안드로이드 입니다.',
        emoji: androidEmoji,
        url: routerPath.faqDetail.child.android.url,
        fullUrl: fullPath.android
    },
    {
        id: 5,
        partName: 'Design',
        question: 'Figma, XD 할 줄 알아야 하나요?',
        description: '앱을 디자인하고 서비스를 설계합니다',
        speechBubble: '안녕하세요! 아이디어가 넘치는 디자인 입니다!\n함께 배우며 함께 성장하는 디자인팀으로 오세요!',
        emoji: designEmoji,
        url: routerPath.faqDetail.child.design.url,
        fullUrl: fullPath.design
    },
    {
        id: 2,
        partName: 'iOS',
        question: '맥북 필수인가요?',
        description: '프론트엔드, ios 기반에 맞춰 앱을 구현합니다',
        speechBubble: '안녕하세요 ios팀입니다\n함께 개발하며 즐거운 시간 보내면 좋을 것 같아요!',
        emoji: iosEmoji,
        url: routerPath.faqDetail.child.ios.url,
        fullUrl: fullPath.ios
    },
    {
        id: 3,
        partName: 'Server',
        question: 'Node, Spring중 어떤 것을 사용하나요?',
        description: '백엔드, 프로그램의 기반을 다집니다',
        speechBubble: '안녕하세요 사랑이 넘치는 서버 입니다!\n',
        emoji: serverEmoji,
        url: routerPath.faqDetail.child.server.url,
        fullUrl: fullPath.server
    },
    {
        id: 4,
        partName: 'Web',
        question: 'React 할 줄 알아야 하나요?',
        description: '웹환경에 맞춘 서비스를 구현합니다',
        speechBubble: '안녕하세요 사랑이 넘치는 웹 입니다!\n',
        emoji: webEmoji,
        url: routerPath.faqDetail.child.web.url,
        fullUrl: fullPath.web
    },
];

export const partInfoByName = {
    Android: partInfo[1],
    Server:partInfo[4],
    iOS: partInfo[3],
    Design: partInfo[2],
    Web: partInfo[5]
}
