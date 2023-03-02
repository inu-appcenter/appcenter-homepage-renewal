import {Box, Card, CardContent, CardOverflow} from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import INUIT from '../../resource/img/product/image_1.png';
import UniLetter from '../../resource/img/product/image_2.png';
import Idorm from '../../resource/img/product/image_3.png';
import CafeTeria from '../../resource/img/product/image_4.png';
import INUM from '../../resource/img/product/image_5.png';
import Image7 from '../../resource/img/product/image_7.png';
import InuBus from '../../resource/img/product/image_8.png';
import AppStore from '../../resource/img/product/app_store_logo.svg';
import GooglePlay from '../../resource/img/product/google_play_logo.svg';
import styled from "styled-components";

const productImageIcon = [
    {key: 0, image: INUIT, store: [GooglePlay]},
    {key: 1, image: UniLetter, store: [GooglePlay, AppStore]},
    {key: 2, image: Idorm, store: [GooglePlay]},
    {key: 3, image: CafeTeria, store: [GooglePlay, AppStore]},
    {key: 4, image: INUM, store: [AppStore]},
    {key: 5, image: Image7, store: [GooglePlay]},
    {key: 6, image: InuBus, store: [GooglePlay]},
];
export default function Production() {

    return (
        <ProductionLayout>
            {
                productImageIcon.map((item) => (
                    <Box key={item.key} >
                        <Card sx={{minHeight: '150px', width: 200}}>
                            <AspectRatio ratio={'1'}>
                                <figure>
                                    <img
                                        src={item.image}
                                        loading="lazy"
                                        alt=""
                                    />
                                </figure>
                            </AspectRatio>
                            <StoreImageBox>
                                {
                                    item.store.map((value) => (
                                        <div className='div-border-01-basic'>
                                            <img
                                                src={value}
                                                loading="lazy"
                                                alt="store logo"
                                            />
                                        </div>
                                    ))
                                }
                            </StoreImageBox>
                        </Card>
                    </Box>

                ))
            }
        </ProductionLayout>
    );
}

const ProductionLayout = styled.div`
  display: flex;
  overflow: scroll;
  margin-top: 50px;
`;

const StoreImageBox = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: fit-content;

  .div-border-01-basic {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.color.primary};
    border-radius: 27.5px;
    padding: 10px 20px;
  }
`
