import Subtitle from "../../component/joinus/Subtitle";
import Archive from "../../component/joinus/Archive";
import styled from "styled-components";

export default function ArchiveContainer(){
    return(
        <>
            <SubtitleWrapper>
                <Subtitle
                    title='앱센터의 1년'
                />
            </SubtitleWrapper>
            <Archive/>
        </>
    )
}

const SubtitleWrapper =  styled.div`
    padding-bottom: 10px;
`;
