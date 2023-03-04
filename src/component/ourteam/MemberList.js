import * as React from 'react';
import MemberItem from "./MemberItem";
import styled from "styled-components";
import MemberItemSkeleton from "./MemberItemSkeleton";
import {useEffect, useRef} from "react";
import { v4 as uuidv4 } from 'uuid';



export default function MemberList({data}) {
    const imageRef = useRef();

    const handleLeftScroll = () =>{
        imageRef.current.scrollTo({
            left: imageRef.current.scrollLeft - (imageRef.current.offsetWidth + 20),
            behavior: 'smooth',
        })
    }
    const handleRightScroll = () =>{
        imageRef.current.scrollTo({
            left: imageRef.current.scrollLeft + imageRef.current.offsetWidth + 20,
            behavior: 'smooth',
        })
    }
    return (
        <>
            <MemberListWrapper
                ref={imageRef}
            >
                {
                    data ?
                        data.map((item) => (
                            <MemberItem
                                key={uuidv4()}
                                image={item.image}
                                name={item.name}
                                description={item.description}
                                link={item.link}
                                leftArrowPress={handleLeftScroll}
                                rightArrowPress={handleRightScroll}
                            />
                        ))
                        : <MemberItemSkeleton/>
                }

            </MemberListWrapper>
        </>

    )
}

const MemberListWrapper = styled.div`
  display: flex;
  overflow: scroll;
  white-space: nowrap;
  & > *{
    flex: 0 0 auto;
  }
`
