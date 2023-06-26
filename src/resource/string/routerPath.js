
export const routerPath = {
    home: {
        url: 'home',
        title: 'Home',
    },
    ourTeam: {
        url: 'ourteam',
        title: 'Our team',
        child: {
            android: {
                url: 'android',
                title: 'Android',
            },
            design: {
                url: 'design',
                title: 'Design',
            },
            ios: {
                url: 'ios',
                title: 'IOS',
            },
            server: {
                url: 'server',
                title: 'Server',
            },
            web: {
                url: 'web',
                title: 'Web',
            },
        },
    },
    join: {
        url: 'join',
        title: 'Join Us',
    },
    faq: {
        url: 'faq',
        title: 'FAQ',
    },
    faqDetail: {
        url: 'faq',
        title: 'FAQ Detail',
        child: {
            common: {
                url: 'common',
                title: 'Common',
            },
            android: {
                url: 'android',
                title: 'Android',
            },
            design: {
                url: 'design',
                title: 'Design',
            },
            ios: {
                url: 'ios',
                title: 'IOS',
            },
            server: {
                url: 'server',
                title: 'Server',
            },
        },
    },
};

export const AbsolutePath = {
    home: `/${routerPath.home.url}`,
    ourTeam: `/${routerPath.ourTeam.url}`,
    join: `/${routerPath.join.url}`,
    faq: `/${routerPath.faq.url}`,
    faqDetail: `/${routerPath.faqDetail.url}`,
    common: `/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.common.url}`,
    android: `/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.android.url}`,
    ios: `/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.ios.url}`,
    server: `/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.server.url}`,
    design: `/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.design.url}`,
}
