import * as React from 'react';
import MemberItem from "./MemberItem";
import styled from "styled-components";
import {Skeleton} from "@mui/material";
import MemberItemSkeleton from "./MemberItemSkeleton";


export default function MemberList({data}) {
    return (
        <MemberListWrapper>
            {
                data ?
                data.map((item, index) => (
                    <MemberItem
                        key={index}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        link={item.link}
                    />
                ))
                    : <MemberItemSkeleton/>
            }
        </MemberListWrapper>
    )
}

const MemberListWrapper = styled.div`
  display: flex;
  overflow: scroll;
  white-space: nowrap;
  margin-bottom: 60px;
  & > *{
    flex: 0 0 auto;
  }
`
