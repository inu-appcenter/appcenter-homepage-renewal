import Subtitle from "../../component/joinus/Subtitle";
import Archive from "../../component/joinus/Archive";
import styled from "styled-components";
import {viewHeightCalc} from "../../lib/viewportCalculate";

export default function ArchiveContainer(){
    return(
        <ArchiveContainerWrapper>
            <Subtitle
                title='앱센터 1년'
            />
            <Archive/>
        </ArchiveContainerWrapper>
    )
}

const ArchiveContainerWrapper =  styled.div`
    margin-top: ${viewHeightCalc(70)};
    
`;
