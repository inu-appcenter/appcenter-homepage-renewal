import { homeSlice } from './homeSlice';
import { ourTeamSlice } from './ourTeamSlice';
import { faqSlice } from './faqSlice';
import { ProductSlice } from './ProductSlice';
import { LoginSlice } from './LoginSlice';

// redux-persist를 위해 localStorage를 불러옴
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['home', 'ourTeam', 'faq', 'product', 'login'],
};

const rootReducer = {
    home: homeSlice.reducer,
    ourTeam: ourTeamSlice.reducer,
    faq: faqSlice.reducer,
    product: ProductSlice.reducer,
    login: LoginSlice.reducer,
};
export default rootReducer;
