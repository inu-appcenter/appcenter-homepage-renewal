export const routerPath = {
    base:{
        url:'appcenter-homepage-renewal',
        title:'base',
    },
    home: {
        url: 'home',
        title: 'Home',
    },
    ourTeam: {
        url: 'ourteam',
        title: 'Our team',
    },
    join:{
        url: 'join',
        title: 'Join Us',
    },
    faq:{
        url: 'faq',
        title: 'FAQ',
    },
    faqDetail:{
        url: 'faq',
        title: 'FAQ Detail',
        child:{
            common:{
                url: 'common',
                title: 'Common',
            },
            android:{
                url: 'android',
                title: 'Android',
            },
            ios:{
                url: 'ios',
                title: 'IOS',
            },
            server:{
                url: 'server',
                title: 'Server',
            },
            web:{
                url: 'web',
                title: 'Web',
            },
            design:{
                url: 'design',
                title: 'Design',
            },
        }
    },
};

export const fullPath = {
    home:`/${routerPath.base.url}/${routerPath.home.url}`,
    ourTeam:`/${routerPath.base.url}/${routerPath.ourTeam.url}`,
    join:`/${routerPath.base.url}/${routerPath.join.url}`,
    faq:`/${routerPath.base.url}/${routerPath.faq.url}`,
    faqDetail:`/${routerPath.base.url}/${routerPath.faqDetail.url}`,
    common:`/${routerPath.base.url}/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.common.url}`,
    android:`/${routerPath.base.url}/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.android.url}`,
    ios:`/${routerPath.base.url}/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.ios.url}`,
    server:`/${routerPath.base.url}/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.server.url}`,
    web:`/${routerPath.base.url}/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.web.url}`,
    design:`/${routerPath.base.url}/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.design.url}`,
}

