import INUIT from "../img/product/image_1.png";
import GooglePlay from "../img/product/google_play_logo.svg";
import UniLetter from "../img/product/image_2.png";
import AppStore from "../img/product/app_store_logo.svg";
import Idorm from "../img/product/image_3.png";
import CafeTeria from "../img/product/image_4.png";
import INUM from "../img/product/image_5.png";
import Image7 from "../img/product/image_7.png";
import InuBus from "../img/product/image_8.png";
import Notice from "../img/product/image_9.png";

const productList = [
    {key: 123, image: INUIT, store: [{key: 1, image: GooglePlay, url: ''}]},
    {
        key: 124,
        image: UniLetter,
        store: [
            {key: 2, image: GooglePlay, url: ''},
            {key: 3, image: AppStore, url: ''}
        ],
    },
    {key: 125, image: Idorm, store: [{key: 4, image: GooglePlay, url: ''}]},
    {
        key: 126,
        image: CafeTeria,
        store: [
            {key: 5, image: GooglePlay, url: 'https://play.google.com/store/apps/details?id=com.inu.cafeteria'},
            {key: 6, image: AppStore, url: ''}
        ],
    },
    {key: 127, image: INUM, store: [{key: 7, image: AppStore, url: ''}]},
    {key: 128, image: Image7, store: [{key: 8, image: GooglePlay, url: ''}]},
    {key: 129, image: InuBus, store: [{key: 9, image: GooglePlay, url: ''}]},
    {key: 130, image: Notice, store: [{key: 10, image: GooglePlay, url: ''}]},
];

export default productList;
