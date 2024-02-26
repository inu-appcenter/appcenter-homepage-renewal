import INUIT from '../img/product/image_1.png';
import GooglePlay from '../img/product/google_play_logo.svg';
import UniLetter from '../img/product/image_2.png';
import AppStore from '../img/product/app_store_logo.svg';
import Idorm from '../img/product/image_3.png';
import Cafeteria from '../img/product/image_4.png';
import INUM from '../img/product/image_5.png';
import INUWeather from '../img/product/image_7.png';
import InuBus from '../img/product/image_8.png';
import Notice from '../img/product/image_9.png';

const productList = [
    {
        key: 123,
        image: INUIT,
        store: [
            {
                key: 1,
                image: GooglePlay,
                url: 'https://play.google.com/store/apps/details?id=com.inu.appcenter.inuit',
            },
        ],
    },
    {
        key: 124,
        image: UniLetter,
        store: [
            {
                key: 2,
                image: GooglePlay,
                url: 'https://play.google.com/store/apps/details?id=org.inu.events',
            },
            {
                key: 3,
                image: AppStore,
                url: 'https://apps.apple.com/kr/app/유니레터/id6444344639',
            },
        ],
    },
    {
        key: 125,
        image: Idorm,
        store: [
            {
                key: 4,
                image: AppStore,
                url: 'https://apps.apple.com/kr/app/아이돔/id1660001335',
            },
        ],
    },
    {
        key: 126,
        image: Cafeteria,
        store: [
            {
                key: 5,
                image: GooglePlay,
                url: 'https://play.google.com/store/apps/details?id=com.inu.cafeteria',
            },
            {
                key: 6,
                image: AppStore,
                url: 'https://apps.apple.com/kr/app/inu-카페테리아/id1272600111',
            },
        ],
    },
    {
        key: 127,
        image: INUM,
        store: [
            {
                key: 7,
                image: AppStore,
                url: 'https://apps.apple.com/kr/app/인천대-중고나라/id1436435406',
            },
        ],
    },
    {
        key: 128,
        image: INUWeather,
        store: [
            {
                key: 8,
                image: GooglePlay,
                url: 'https://play.google.com/store/apps/details?id=com.inu.thisweather',
            },
        ],
    },
    {
        key: 129,
        image: InuBus,
        store: [
            {
                key: 9,
                image: GooglePlay,
                url: 'https://play.google.com/store/apps/details?id=com.appcenter.inubus',
            },
        ],
    },
    {
        key: 130,
        image: Notice,
        store: [
            {
                key: 10,
                image: GooglePlay,
                url: 'https://play.google.com/store/apps/details?id=org.jik.notification_proto',
            },
        ],
    },
];

export default productList;
