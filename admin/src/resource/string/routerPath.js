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
    product: {
        url: 'product',
        title: 'Product',
    },
    login: {
        url: 'login',
        title: 'Login',
    },
    dashboard: {
        url: 'admin',
        title: 'Admin',
    },
    detail: {
        url: 'detail',
        title: 'Detail',
    },
    manage: {
        url: 'manage',
        title: 'Manage',
    },
    generation: {
        url: 'generation',
        title: 'Generation',
    },
    role: {
        url: 'role',
        title: 'Role',
    },
    center: {
        url: 'center',
        title: 'Center',
    },
    qna: {
        url: 'qna',
        title: 'QnA',
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
            web: {
                url: 'web',
                title: 'Web',
            },
        },
    },
};

export const AbsolutePath = {
    home: `/${routerPath.home.url}`,
    qna: `/${routerPath.qna.url}`,
    product: `/${routerPath.product.url}`,
    login: `/${routerPath.login.url}`,
    dashboard: `/${routerPath.dashboard.url}`,
    center: `/${routerPath.center.url}`,
    manage: `/${routerPath.center.url}/${routerPath.manage.url}`,
    detail: `/${routerPath.detail.url}`,
    generation: `/${routerPath.generation.url}`,
    role: `/${routerPath.role.url}`,
    ourTeam: `/${routerPath.ourTeam.url}`,
    join: `/${routerPath.join.url}`,
    faq: `/${routerPath.faq.url}`,
    faqDetail: `/${routerPath.faqDetail.url}`,
    common: `/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.common.url}`,
    android: `/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.android.url}`,
    ios: `/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.ios.url}`,
    server: `/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.server.url}`,
    design: `/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.design.url}`,
    web: `/${routerPath.faqDetail.url}/${routerPath.faqDetail.child.web.url}`,
};
