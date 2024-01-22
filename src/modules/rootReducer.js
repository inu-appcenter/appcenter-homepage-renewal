import { homeSlice } from './homeSlice';
import { ourTeamSlice } from './ourTeamSlice';
import { faqSlice } from './faqSlice';
import { ProductSlice } from './ProductSlice';

const rootReducer = {
    home: homeSlice.reducer,
    ourTeam: ourTeamSlice.reducer,
    faq: faqSlice.reducer,
    product: ProductSlice.reducer,
};
export default rootReducer;
