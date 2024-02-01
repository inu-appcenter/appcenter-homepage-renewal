import {Part} from "../types/common.ts";

export const PATH = {
    ROOT: '/',
    HOME: '/home',
    TEAM:(part?:Part)=> `/team/${part ?? ':part'}`,
    JOIN: '/join',
    FAQ: '/faq',
    FAQ_DETAIL: (part?:Part)=>`/faq/${part??':part'}`,
}
