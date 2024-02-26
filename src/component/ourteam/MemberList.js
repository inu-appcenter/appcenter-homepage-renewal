import * as React from 'react';
import MemberItem from './MemberItem';
import styled from 'styled-components';
import MemberItemSkeleton from './MemberItemSkeleton';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import axios from 'axios';
import { useEffect, useState } from 'react';

import 'swiper/css/navigation';

export default function MemberList({ data }) {
    const [group, setGroup] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const viewData = await axios
                .get(
                    'https://server.inuappcenter.kr/groups/public/all-groups-members'
                )
                .then((res) => {
                    setGroup(res.data);
                    console.log(viewData);
                });
        };
        fetchData();
    }, [group]);

    return (
        <MemberListWrapper>
            <Swiper
                slidesPerView={'auto'}
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                spaceBetween={30}
            >
                {data ? (
                    data.map((item) => (
                        <SwiperSlide key={uuidv4()}>
                            <MemberItem
                                image={item.image}
                                name={item.name}
                                description={item.description}
                                link={item.link}
                            />
                        </SwiperSlide>
                    ))
                ) : (
                    <MemberItemSkeleton />
                )}
            </Swiper>
        </MemberListWrapper>
    );
}

const MemberListWrapper = styled.div`
    overflow: hidden;

    .swiper-slide {
        padding: 0 0 50px;
        width: 300px;
        @media (max-height: 1000px) {
            width: 150px;
        }
        @media (max-width: 576px) {
            width: 100%;
            overflow: hidden;
        }
    }

    .swiper-button-next,
    .swiper-button-prev {
        top: 150px;
        @media (max-height: 1000px) {
            top: 75px;
        }
        @media (max-width: 576px) {
            top: calc(calc(100% - 119.5px) / 2);
        }
    }
`;
