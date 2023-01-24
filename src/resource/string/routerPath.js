export const routerPath = {
    home: {
        url: '/home',
        title: 'Home',
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
    home: routerPath.home.url,
    join:`/${routerPath.join.url}`,
    faq:`/${routerPath.faq.url}`,
    faqDetail:`/${routerPath.faqDetail.url}`,
    common:`/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.common.url}`,
    android:`/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.android.url}`,
    ios:`/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.ios.url}`,
    server:`/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.server.url}`,
    web:`/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.web.url}`,
    design:`/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.design.url}`,
}

