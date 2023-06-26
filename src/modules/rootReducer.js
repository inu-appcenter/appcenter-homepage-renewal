import {homeSlice} from "./homeSlice";
import {ourTeamSlice} from "./ourTeamSlice";

const rootReducer = {
    home: homeSlice.reducer,
    ourTeam: ourTeamSlice.reducer
}
export default rootReducer;
