import styled from "styled-components";
import {partInfo} from "../resource/string/partInfo";
import {Button} from "@mui/material";


export function FAQCategoryChip({
                             url = partInfo[0].fullUrl,
                             onButtonClick,
                             common = true,
                             web=false
                         }) {
    return (
        <FlexBox>
            <Button
                className={url.split('/').at(-1) === 'common' ? 'active' : ''}
                onClick={e=>onButtonClick(e, 'common')}
            >
                Common
            </Button>
            <Divider/>
            <ButtonGroup>
                {partInfo.slice(1).map((part) => (
                    (!web && part.partName === 'Web')
                        ? null
                        : <Button
                            key={part.id}
                            className={url.split('/').at(-1) === part.partName.toLowerCase() ? 'active' : ''}
                            onClick={e => onButtonClick(e, part.partName.toLowerCase())}
                        >
                            {part.partName}
                        </Button>
                ))}
            </ButtonGroup>
        </FlexBox>
    )
}
const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  Button {
    outline: none;
    color: ${props => props.theme.color.gray};
    font-weight: 600;
    border-radius: 999px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .10);
    text-transform: none;
    font-size: ${props => props.theme.fontSize.bigDesktop.caption};
    height: auto;
    padding: 12px 40px;
    @media (max-width: 1800px) {
      font-size: ${props => props.theme.fontSize.desktop.caption};
      padding: 8px 20px;
    }
    @media (max-width: 1200px) {
      font-size: ${props => props.theme.fontSize.tablet.caption};
    }
    @media (max-width: 768px) {
      font-size: ${props => props.theme.fontSize.smallTablet.caption};
      padding: 4px 12px;
    }
    @media (max-width: 576px) {
      font-size: ${props => props.theme.fontSize.mobile.caption};
      padding: 4px 8px;
      margin-top: 4px;
    }
  }

  Button.active {
    color: ${props => props.theme.color.primary};
    border: solid 1px ${props => props.theme.color.primary};
    box-shadow: 0 4px 4px rgba(23, 115, 224, .15);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items:center;
  gap: 30px;
  @media (max-width: 576px) {
    gap: 4px;
  }
  @media (max-width: 480px) {
    display: grid;
    grid-template:
            "a b"
            "c d";
  }
`;
const Divider = styled.div`
  height: 54px;
  width: 2px;
  min-width: 2px;
  margin: 0 20px;
  background: rgba(0,0,0,.15);
  @media (max-width: 1800px) {
    height: 42.5px;
  }
  @media (max-width: 1200px) {
    height: 39px;
  }
  @media (max-width: 768px) {
    margin: 4px 10px 0;
    height: 27.5px;
  }
`;