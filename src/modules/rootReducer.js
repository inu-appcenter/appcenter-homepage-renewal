import { homeSlice } from './homeSlice';
import { ourTeamSlice } from './ourTeamSlice';
import { faqSlice } from './faqSlice';
import { ProductSlice } from './ProductSlice';
import { LoginSlice } from './LoginSlice';
import { idSlice } from './idSlice';

const rootReducer = {
    home: homeSlice.reducer,
    ourTeam: ourTeamSlice.reducer,
    faq: faqSlice.reducer,
    product: ProductSlice.reducer,
    login: LoginSlice.reducer,
    id: idSlice.reducer,
};
export default rootReducer;
