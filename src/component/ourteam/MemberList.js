import * as React from 'react';
import MemberItem from "./MemberItem";
import styled from "styled-components";


export default function MemberList({data}) {
    console.log(data)
    return (
        <MemberListWrapper>
            {
                data.map((item, index) => (
                    <MemberItem
                        key={index}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        link={item.link}
                    />
                ))
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
