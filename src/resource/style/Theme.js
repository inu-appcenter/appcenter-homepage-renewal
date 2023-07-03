import { viewWidthCalc } from '../../lib/viewportCalculate';

const theme = {
    color: {
        primary: '#1773E0',
        primaryLight: '#DCEAFA',
        yellow: '#FEC853',
        yellow40: 'rgba(254, 200, 83, 0.4)',
        secondary: '#FEC853',
        black: '#000000',
        white: '#FFFFFF',
        gray: '#818181',
        cyan: ['#BADAFF', '#5E9DE7', '#1773E0', '#175CAE', '#0A4892'],
    },
    padding: {
        navBarInside: viewWidthCalc(70),
        bigDesktop: {
            contentTop: '60px',
        },
        desktop: {
            contentTop: '40px',
        },
        tablet: {
            contentTop: '30px',
        },
        smallTablet: {
            contentTop: '20px',
        },
        mobile: {
            contentTop: '16px',
        },
    },
    gap: {
        bigDesktop: {
            rowGap: '3rem',
        },
        desktop: {
            rowGap: '1.5rem',
        },
        tablet: {
            rowGap: '1.5rem',
        },
        smallTablet: {
            rowGap: '1.2rem',
        },
        mobile: {
            rowGap: '1rem',
        },
    },
    margin: {
        pageTitleOutSide: viewWidthCalc(0),
        pageTitleTop: viewWidthCalc(50),
    },
    height: {
        headerBarHeight: '70px',
    },
    fontSize: {
        bigDesktop: {
            title: '60px',
            subtitle: '40px',
            text: '30px',
            caption: '20px',
        },
        desktop: {
            title: '50px',
            subtitle: '40px',
            text: '24px',
            caption: '18px',
        },
        tablet: {
            title: '45px',
            subtitle: '35px',
            text: '20px',
            caption: '16px',
        },
        smallTablet: {
            title: '35px',
            subtitle: '25px',
            text: '16px',
            caption: '14px',
        },
        mobile: {
            title: '24px',
            subtitle: '20px',
            text: '12px',
            caption: '12px',
        },
        fold: {
            title: '18px',
            subtitle: '18px',
        },
    },
};

export default theme;
