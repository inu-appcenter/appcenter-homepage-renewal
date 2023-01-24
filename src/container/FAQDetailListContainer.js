import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {faqString} from "../resource/string/faqString";
import faqList from "../resource/dummy/faqList";

export function FAQDetailListContainer(){
    const location = useLocation();
    const [pageInfo, setPageInfo] = useState(faqString.find(v=>location.pathname === v.fullUrl));

    useEffect(()=>{
        setPageInfo(faqString.find(v=>location.pathname === v.fullUrl))
    },[location])

    console.log(pageInfo, location, faqString)
    return(
        <>
            <h1>{pageInfo.partName}</h1>
            {
                faqList[pageInfo.partName].map((item,index) =>
                    <QnAContainer key={index}>
                        <p className="question">Q. {item.question}</p>
                        <p className="answer">A. {item.answer}</p>
                    </QnAContainer>
                )
            }
        </>
    );
}
const QnAContainer = styled.div`
  margin: 0 20px 30px;
  padding: 20px 40px;
  border-radius: 50px;
  background: rgba(23, 115, 224, 0.1);
  .question {
    color: ${props => props.theme.color.black};
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 0.75rem 40px;
    border-radius: 999px;
    background: ${props => props.theme.color.white};
  }
  .answer {
    color: ${props => props.theme.color.primary};
    font-weight: 600;
    padding: 0 40px;
  }
`;