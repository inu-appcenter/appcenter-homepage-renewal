import styled from "styled-components";
import {Link} from "react-router-dom";

const FAQCategoryCardList = ({list}) =>{
    return(
        <>
            <CardWrap>
                {
                    list.map((item)=>
                        <Card to={item.url} key={item.id} partName={item.partName}>
                            <p className="title">{item.partName}</p>
                            <p className="question">{item.question}</p>
                            <button>더보기</button>
                        </Card>
                    )
                }
            </CardWrap>
        </>
    );
}

const CardWrap = styled.div`
  color: ${props => props.theme.color.black};
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 2rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Link)`
  display: grid;
  // background-color: ${props => props.theme.color.primaryLight};
  background-color: ${props=>props.partName!=='Web' ? props.theme.color.primaryLight : 'rgba(128,128,128,0.4)'};
  border-radius: 30px;
  font-size: 20px;
  padding: 16px 20px;
  row-gap: 1rem;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  animation: fadeBottom 1s;
  @keyframes fadeBottom{
    from{
      opacity:0;
      transform: translate3d(0, 30%, 0);
    }
    to{
      opacity:1;
      transform: translateZ(0);
    }
  }
  .title {
    justify-self: flex-start;
    padding: 8px 16px;
    margin:0;
    color: ${props => props.theme.color.primary};
    font-weight: 700;
    border-radius: 24px;
    background: ${props => props.theme.color.white};
  }
  .question {
    justify-self: center;
    margin:0;
    color: ${props => props.theme.color.black};
    font-weight: 600;
  }
  button {
    justify-self: flex-end;
    color: ${props => props.theme.color.primary};
    font-weight: 700;
    border-radius: 27px;
    border: none;
    background: ${props => props.theme.color.white};
    padding: 4px 8px;
  }
`


export default FAQCategoryCardList
