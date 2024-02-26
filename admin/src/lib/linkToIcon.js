import behanceLogo from '../resource/img/ourteam_logo/behance_logo.png';
import githubLogo from '../resource/img/ourteam_logo/github_logo.png';
import tistoryLogo from '../resource/img/ourteam_logo/tistory_logo.png';
import velogLogo from '../resource/img/ourteam_logo/velog_logo.png';

export const linkToIcon = (link) => {
    const hostNameMap = {
        'github.com': githubLogo,
        'velog.io': velogLogo,
        'www.behance.net': behanceLogo,
    };
    const url = new URL(link);

    if (url.hostname.includes('tistory')) {
        return tistoryLogo;
    }

    return hostNameMap[url.hostname];
};

export const hostNameFirstWord = (link) => {
    return new URL(link).hostname.at(0).toUpperCase();
};
