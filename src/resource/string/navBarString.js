import {fullPath, routerPath} from "./routerPath";

export const navBarInfoList = [
    {id:0, title:routerPath.home.title ,url:fullPath.home,
        child: [
            {id: 1 ,title: 'About Us'},
            {id: 2 ,title: 'Our Team'},
            {id: 3 ,title: 'Product'},
        ]
    },
    {id:1, title:routerPath.ourTeam.title ,url:fullPath.ourTeam,
        child: [
            {id: 1 ,title: 'Android'},
            {id: 2 ,title: 'Design'},
            {id: 3 ,title: 'IOS'},
            {id: 4 ,title: 'Server'},
            {id: 5 ,title: 'Web'},
        ]
    },
    {id:2, title:routerPath.join.title ,url:fullPath.join},
    {id:3, title:routerPath.faq.title ,url:fullPath.faq},
]
