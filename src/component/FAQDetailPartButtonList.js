import styled from "styled-components";
import {partString} from "../resource/string/partString";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export function FAQDetailPartButtonList({url=partString[0].fullUrl}){
    const navigate = useNavigate();
    const handleButtonClick = (path) =>{
        navigate(path);
    }
    return(
        <>
            <ButtonGroup>
                {partString.map((part) =>
                    <Button
                        key={part.id}
                        className={url === part.fullUrl ? 'active' : ''}
                        onClick={e=>handleButtonClick(part.url)}
                    >{part.partName}</Button>
                )}
            </ButtonGroup>
        </>
    )
}

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 40px;
  Button {
    outline: none;
    color:  ${props => props.theme.color.gray};
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.625rem 30px;
    border-radius: 999px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    text-transform: none;
  }
  Button.active {
    color: ${props => props.theme.color.primary};
    border: solid 1px ${props => props.theme.color.primary};
    box-shadow: 0 4px 4px rgba(23, 115, 224, .25);  // 이렇게 해도 예쁜 것 같음
  }
`;