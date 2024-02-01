import {Part, Section} from "../types/common.ts";

export const PATH = {
    ROOT: '/',
    HOME:(section?:Section)=> `/home#${section ?? ''}`,
    TEAM:(part?:Part)=> `/team/${part ?? ':part'}`,
    JOIN: '/join',
    FAQ: '/faq',
    FAQ_DETAIL: (part?:Part)=>`/faq/${part??':part'}`,
}
