import {homeSlice} from "./homeSlice";
import {ourTeamSlice} from "./ourTeamSlice";
import {faqSlice} from "./faqSlice";

const rootReducer = {
    home: homeSlice.reducer,
    ourTeam: ourTeamSlice.reducer,
    faq: faqSlice.reducer,
}
export default rootReducer;
