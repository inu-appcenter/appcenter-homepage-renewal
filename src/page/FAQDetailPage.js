import styled from "styled-components";
import {Button} from "@mui/material";
import {useState} from "react";
import faqList from "../resource/FAQ/faqList";

export default function FAQDetailPage(){
  const [currentTab, setCurrentTab] = useState('Common')
  return(
    <>
      <FAQDetailBox>
        <ButtonGroup>
          {tabList.map((tabName) =>
            <Button
              key={tabName}
              className={currentTab === tabName ? 'active' : ''}
              onClick={e => setCurrentTab(tabName)}
            >{tabName}</Button>
          )}
        </ButtonGroup>
        <h1>{currentTab}</h1>
        <QnAList currentTab={currentTab} />
      </FAQDetailBox>
    </>
  );
}
const tabList = ['Common', 'Android', 'iOS', 'Server', 'Web', 'Design'];

const FAQDetailBox = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  max-width: 1200px;
  @media (max-width: 1400px) {
    margin: 0 100px;
  }
  h1 {
    font-size: 70px;
    font-weight: 700;
    color: #1773E0;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 40px;
  Button {
    outline: none;
    color: #818181;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.625rem 30px;
    border-radius: 999px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    text-transform: none;
  }
  Button.active {
    color: #1773E0;
    border: solid 1px #1773E0;
    box-shadow: 0 4px 4px rgba(23, 115, 224, .25);  // 이렇게 해도 예쁜 것 같음
  }
`;
const QnAList = (props) => {
  let list;
  switch (props.currentTab) {
    case 'Common':
      list = faqList.Common;
      break;
    case 'Android':
      list = faqList.Android;
      break;
    case 'iOS':
      list = faqList.iOS;
      break;
    case 'Server':
      list = faqList.Server;
      break;
    case 'Web':
      list = faqList.Web;
      break;
    case 'Design':
      list = faqList.Design;
      break;
    default: break;
  }

  return (
    list.map((qna) =>
      <QnAContainer>
        <p className="question">Q. {qna.question}</p>
        <p className="answer">A. {qna.answer}</p>
      </QnAContainer>
    )
  )
}
const QnAContainer = styled.div`
  margin: 0 20px 30px;
  padding: 20px 40px;
  border-radius: 50px;
  background: rgba(23, 115, 224, 0.1);
  .question {
    color: black;
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 0.75rem 40px;
    border-radius: 999px;
    background: white;
  }
  .answer {
    color: #1773E0;
    font-weight: 600;
    padding: 0 40px;
  }
`;