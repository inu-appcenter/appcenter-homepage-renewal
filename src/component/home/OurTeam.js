import styled from 'styled-components';
import { partInfo } from '../../resource/string/partInfo';
import { Fab } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from 'react-router-dom';

export default function OurTeam() {
    const navigate = useNavigate();
    return (
        <>
            <TeamListWrapper>
                {partInfo.slice(1).map((item) => (
                    <TeamListItem key={item.id}>
                        <TextWrapper>
                            <div className='TeamName'>{item.partName}</div>
                            <div className='TeamDescription'>
                                {item.description}
                            </div>
                        </TextWrapper>
                        <Button
                            onClick={() =>
                                navigate(
                                    `../ourteam/${item.partName.toLowerCase()}`
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
    .TeamName::first-letter {
        color: ${(props) => props.theme.color.primary};
    }

    .TeamName {
        margin: 4px 0;
        font-size: ${(props) => props.theme.fontSize.bigDesktop.subtitle};
        @media (max-width: 1800px) {
            font-size: ${(props) => props.theme.fontSize.desktop.subtitle};
        }
        @media (max-width: 1200px) {
            font-size: ${(props) => props.theme.fontSize.tablet.subtitle};
        }
        @media (max-width: 768px) {
            font-size: ${(props) => props.theme.fontSize.smallTablet.subtitle};
        }
        @media (max-width: 576px) {
            font-size: ${(props) => props.theme.fontSize.mobile.subtitle};
        }
        @media (max-width: 280px) {
            font-size: ${(props) => props.theme.fontSize.fold.subtitle};
        }
    }

    .TeamDescription {
        margin-top: 16px;
        color: ${(props) => props.theme.color.gray};
        font-size: ${(props) => props.theme.fontSize.bigDesktop.text};
        @media (max-width: 1800px) {
            font-size: ${(props) => props.theme.fontSize.desktop.text};
        }
        @media (max-width: 1200px) {
            font-size: ${(props) => props.theme.fontSize.tablet.text};
        }
        @media (max-width: 768px) {
            font-size: ${(props) => props.theme.fontSize.smallTablet.text};
        }
        @media (max-width: 576px) {
            font-size: ${(props) => props.theme.fontSize.mobile.text};
        }
        @media (max-width: 280px) {
            font-size: ${(props) => props.theme.fontSize.fold.text};
        }
    }
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
