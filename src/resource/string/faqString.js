import {
    fullPath,

    routerPath
}
    from "./routerPath";

export const faqString = [
    {
        id: 0,
        partName: 'Common',
        question: '앱센터는 어떻게 들어오나요?',
        description:'다른 분야가 모여 하나의 목표를 향해 나아갑니다',
        url: routerPath.faqDetail.child.common.url,
        fullUrl: fullPath.common
    },
    {
        id: 1,
        partName: 'Android',
        question: 'Java 와 Kotlin 중 어떤 언어를 쓰나요?',
        description:'프론트엔드, 안드로이드 기반에 맞춰 앱을 구현합니다',
        url: routerPath.faqDetail.child.android.url,
        fullUrl: fullPath.android
    },
    {
        id: 2,
        partName: 'iOS',
        question: '맥북 필수인가요?',
        description:'프론트엔드, ios 기반에 맞춰 앱을 구현합니다',
        url: routerPath.faqDetail.child.ios.url,
        fullUrl: fullPath.ios
    },
    {
        id: 3,
        partName: 'Server',
        question: 'Node, Spring중 어떤 것을 사용하나요?',
        description:'백엔드, 프로그램의 기반을 다집니다',
        url: routerPath.faqDetail.child.server.url,
        fullUrl: fullPath.server
    },
    {
        id: 4,
        partName: 'Web',
        question: 'React 할 줄 알아야 하나요?',
        description:'웹환경에 맞춘 서비스를 구현합니다',
        url: routerPath.faqDetail.child.web.url,
        fullUrl: fullPath.web
    },
    {
        id: 5,
        partName: 'Design',
        question: 'Figma, XD 할 줄 알아야 하나요?',
        description:'앱을 디자인하고 서비스를 설계합니다',
        url: routerPath.faqDetail.child.design.url,
        fullUrl: fullPath.design
    },
];
