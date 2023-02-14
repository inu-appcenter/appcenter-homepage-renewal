import {viewWidthCalc} from "../../lib/viewportCalculate";

const theme = {
    color:{
        primary: '#1773E0',
        primaryLight: '#DCEAFA',
        yellow: '#FEC853',
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
    },
    fontSize:{
        default:{
            title: '60px',
            subtitle: '50px',
            descriptionTitle: '30px',
            planText: '30px',
        }
    }
}

export default theme;
