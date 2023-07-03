import styled from 'styled-components';
import { partInfo } from '../../resource/string/partInfo';
import { Fab } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from 'react-router-dom';
import { SubTitleStyle, PlainTextStyle } from '../../resource/style/TextStyle';
import theme from '../../resource/style/Theme';

export default function OurTeam() {
    const navigate = useNavigate();
    return (
        <>
            <TeamListWrapper>
                {partInfo.slice(1).map((item) => (
                    <TeamListItem key={item.id}>
                        <TextWrapper>
                            <SubTitleStyle firstLetterAccent={true}>
                                {item.partName}
                            </SubTitleStyle>
                            <PlainTextStyle fontColor={theme.color.gray}>
                                {item.description}
                            </PlainTextStyle>
                        </TextWrapper>
                        <Button
                            onClick={() =>
                                navigate(
                                    `../ourteam/${item.partName.toLowerCase()}`,
                                    {
                                        state: {
                                            part: item.partName.toLowerCase(),
                                        },
                                    }
                                )
                            }
                        >
                            <KeyboardDoubleArrowRightIcon fontSize='large' />
                        </Button>
                    </TeamListItem>
                ))}
            </TeamListWrapper>
        </>
    );
}

const TeamListWrapper = styled.div`
    display: grid;
    row-gap: 3rem;
    margin-top: 100px;
`;

const TeamListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
`;

const Button = styled(Fab)`
    background: ${(props) => props.theme.color.yellow};
    color: ${(props) => props.theme.color.white};
    box-shadow: none;
    width: 56px;
    height: 56px;

    &:hover {
        background: ${(props) => props.theme.color.primary};
    }

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
        margin-left: 1rem;
        svg {
            width: 20px;
            height: 20px;
        }
    }
`;
