import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {partInfo} from "../../resource/string/partInfo";
import faqList from "../../resource/data/faqList";
import {PageTitle} from "../../component/common/PageTitle";

export function FAQDetailListContainer(){
    const location = useLocation();
    const [pageInfo, setPageInfo] = useState(partInfo.find(v=>location.pathname === v.fullUrl));

    useEffect(()=>{
        setPageInfo(partInfo.find(v=>location.pathname === v.fullUrl))
    },[location])

    return(
        <FAQContainerWrapper>
            <TitleWrapper>
                <PageTitle
                    title={pageInfo.partName}
                />
            </TitleWrapper>
            {
                faqList[pageInfo.partName].map((item,index) =>
                    <FAQDetailList key={index}>
                        <p className="question">Q. {item.question}</p>
                        <p className="answer">A. {item.answer}</p>
                    </FAQDetailList>
                )
            }
        </FAQContainerWrapper>
    );
}

const FAQContainerWrapper = styled.div`
  display: grid;
  row-gap: 3rem;
  @media(max-width: 768px) {
    row-gap: 1rem;
  }
`

const TitleWrapper = styled.div`
  padding-top: 30px;
`

const FAQDetailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 50px;
  background: rgba(23, 115, 224, 0.1);
  padding: 30px;
  .question {
    color: ${props => props.theme.color.black};
    font-weight: 700;
    padding: 4px 20px;
    border-radius: 999px;
    background: ${props => props.theme.color.white};
    margin:0;
  }
  .answer {
    color: ${props => props.theme.color.primary};
    font-weight: 600;
    padding: 0 20px;
    margin:0;
  }
  font-size: ${props=>props.theme.fontSize.bigDesktop.text};
  @media(max-width: 1800px) {
    font-size: ${props=>props.theme.fontSize.desktop.text};
  }
  @media(max-width: 1200px) {
    font-size: ${props=>props.theme.fontSize.tablet.text};
  }
  @media(max-width: 768px) {
    border-radius: 30px;
    padding: 20px;
    font-size: ${props=>props.theme.fontSize.smallTablet.text};
  }
  @media(max-width: 576px) {
    font-size: ${props=>props.theme.fontSize.mobile.text};
    padding: 20px;
  }
  @media (max-width: 280px) {
    font-size: ${props => props.theme.fontSize.fold.text};
  }
`;
