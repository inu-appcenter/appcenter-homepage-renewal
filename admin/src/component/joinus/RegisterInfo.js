import styled from 'styled-components';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button } from '@mui/material';

export default function RegisterInfo() {
    const text = 'Ready to get\nstarted?';
    return (
        <RegisterTextWrapper>
            <div className='top'>app center</div>
            <div className='middle'>{text}</div>
            <Button
                variant='outlined'
                onClick={() =>
                    document.getElementById('registerStep').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest',
                    })
                }
            >
                지원 방법 바로가기
                <ArrowRightAltIcon />
            </Button>
        </RegisterTextWrapper>
    );
}

const RegisterTextWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  row-gap: 2.5rem;
  color: ${(props) => props.theme.color.yellow};
  padding: 12px 0;
  @media (max-width: 768px) {
    row-gap: 1rem;
  }
  svg {
    font-size: 40px;
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 576px) {
      font-size: 25px;
    }
  }

  .top {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  }

  .middle {
    font-weight: 500;
    white-space: pre-line;
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.bigDesktop.title};
    @media (max-width: 1800px) {
      font-size: ${(props) => props.theme.fontSize.desktop.title};
    }
    @media (max-width: 1200px) {
      font-size: ${(props) => props.theme.fontSize.tablet.title};
    }
    @media (max-width: 768px) {
      font-size: ${(props) => props.theme.fontSize.smallTablet.title};
    }
    @media (max-width: 576px) {
      font-size: ${(props) => props.theme.fontSize.mobile.title};
    }
  }

}

& > Button {
  border-radius: 34.5px;
  background: ${(props) => props.theme.color.white};
  border: 1px solid ${(props) => props.theme.color.yellow};
  color: ${(props) => props.theme.color.yellow};
  padding: 6px 1em;

  &:hover {
    background: rgba(254, 200, 83, 0.1);
    border: 1px solid ${(props) => props.theme.color.yellow};
  }

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
}
`;
