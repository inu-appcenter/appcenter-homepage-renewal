import {PATH} from "./path.ts";
import {PART, SECTION} from "./common.ts";

export const MENU = {
    HOME: {
        path: PATH.HOME(),
        label: "Home",
        children: [
            {
                path: PATH.HOME(SECTION.about.value),
                label: SECTION.about.label,
            },
            {
                path: PATH.HOME(SECTION.team.value),
                label: SECTION.team.label,
            },
            {
                path: PATH.HOME(SECTION.product.value),
                label: SECTION.product.label,
            }
        ]
    },
    TEAM: {
        path: PATH.TEAM(),
        label: "Our Team",
        children: [
            {
                path: PATH.TEAM(PART.android.value),
                label: PART.android.label,
            },
            {
                path: PATH.TEAM(PART.design.value),
                label: PART.design.label,
            },
            {
                path: PATH.TEAM(PART.ios.value),
                label: PART.ios.label,
            },
            {
                path: PATH.TEAM(PART.server.value),
                label: PART.server.label
            },
            {
                path: PATH.TEAM(PART.web.value),
                label: PART.web.label
            }
        ]
    },
    JOIN:{
        path: PATH.JOIN,
        label: 'Join Us'
    },
    FAQ: {
        path: PATH.FAQ,
        label: 'FAQ',
        children: [
            {
                path: PATH.FAQ_DETAIL(PART.android.value),
                label: PART.android.label,
            },
            {
                path: PATH.FAQ_DETAIL(PART.design.value),
                label: PART.design.label,
            },
            {
                path: PATH.FAQ_DETAIL(PART.ios.value),
                label: PART.ios.label,
            },
            {
                path: PATH.FAQ_DETAIL(PART.server.value),
                label: PART.server.label
            },
            {
                path: PATH.FAQ_DETAIL(PART.web.value),
                label: PART.web.label
            }
        ]
    }
}
