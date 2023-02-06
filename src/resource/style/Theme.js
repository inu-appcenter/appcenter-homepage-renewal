import {viewWidthCalc} from "../../lib/viewportCalculate";

const theme = {
    color:{
        primary: '#1773E0',
        primaryLight: '#DCEAFA',
        secondary: '#FEC853',
        black: '#000000',
        white: '#FFFFFF',
        gray: '#818181'
    },
    padding:{
        navBarInside: viewWidthCalc(70),
    },
    margin:{
        pageTitleOutSide: viewWidthCalc(0),
        pageTitleTop: viewWidthCalc(50),
    },
    height:{
        headerBarHeight: '70px',
    }
}

export default theme;
