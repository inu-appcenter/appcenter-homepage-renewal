import {fullPath, routerPath} from "./routerPath";

export const navBarInfoList = [
    {id:0, title:routerPath.home.title ,url:fullPath.home,
        child: [
            {id: 4 ,title: 'About Us'},
            {id: 5 ,title: 'Our Team'},
            {id: 6 ,title: 'Product'},
        ]
    },
    {id:1, title:routerPath.ourTeam.title ,url:fullPath.ourTeam,
        child: [
            {id: 7 ,title: 'Android',url: `${fullPath.ourTeam}/android`},
            {id: 8 ,title: 'Design',url: `${fullPath.ourTeam}/design`},
            {id: 9 ,title: 'IOS',url: `${fullPath.ourTeam}/ios`},
            {id: 10 ,title: 'Server',url: `${fullPath.ourTeam}/server`},
            {id: 11,title: 'Web',url: `${fullPath.ourTeam}/web`},
        ]
    },
    {id:2, title:routerPath.join.title ,url:fullPath.join},
    {id:3, title:routerPath.faq.title ,url:fullPath.faq},
]
