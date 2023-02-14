import styled from "styled-components";
import {partInfo} from "../resource/string/partInfo";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export function PartChip({url=partInfo[0].fullUrl, onButtonClick}){
    return(
        <>
            <ButtonGroup>
                {partInfo.map((part) =>
                    <Button
                        key={part.id}
                        className={url === part.fullUrl ? 'active' : ''}
                        onClick={e=>onButtonClick(e, part.url)}
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
