import {fullPath, routerPath} from "./routerPath";

export const navBarInfoList = [
    {id:0, title:routerPath.home.title ,url:routerPath.home.url},
    {id:1, title:'About us' ,url:'/about'},
    {id:2, title:routerPath.join.title ,url:fullPath.join},
    {id:3, title:routerPath.faq.title ,url:fullPath.faq},
]