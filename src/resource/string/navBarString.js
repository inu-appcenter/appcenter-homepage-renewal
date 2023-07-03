import { AbsolutePath, routerPath } from './routerPath';

export const navBarInfoList = [
    {
        id: 0,
        title: routerPath.home.title,
        url: AbsolutePath.home,
        child: [
            { id: 4, title: 'About Us' },
            { id: 5, title: 'Our Team' },
            { id: 6, title: 'Product' },
        ],
    },
    {
        id: 1,
        title: routerPath.ourTeam.title,
        url: AbsolutePath.ourTeam,
        child: [
            {
                id: 7,
                title: routerPath.ourTeam.child.android.title,
                url: `${AbsolutePath.ourTeam}/android`,
            },
            {
                id: 8,
                title: routerPath.ourTeam.child.design.title,
                url: `${AbsolutePath.ourTeam}/design`,
            },
            {
                id: 9,
                title: routerPath.ourTeam.child.ios.title,
                url: `${AbsolutePath.ourTeam}/ios`,
            },
            {
                id: 10,
                title: routerPath.ourTeam.child.server.title,
                url: `${AbsolutePath.ourTeam}/server`,
            },
            {
                id: 11,
                title: routerPath.ourTeam.child.web.title,
                url: `${AbsolutePath.ourTeam}/web`,
            },
        ],
    },
    { id: 2, title: routerPath.join.title, url: AbsolutePath.join },
    { id: 3, title: routerPath.faq.title, url: AbsolutePath.faq },
];
