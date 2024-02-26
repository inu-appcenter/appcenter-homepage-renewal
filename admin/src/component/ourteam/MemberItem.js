import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import CardCover from '@mui/joy/CardCover';
import * as React from 'react';
import styled from 'styled-components';
import { hostNameFirstWord, linkToIcon } from '../../lib/linkToIcon';
import { Avatar } from '@mui/joy';
import { Skeleton } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export default function MemberItem({ image, name, description, link = [] }) {
    return (
        <StyledCard>
            <Box sx={{ position: 'relative' }}>
                <AspectRatio ratio={'1'}>
                    {image ? (
                        <img
                            src={image}
                            loading='lazy'
                            alt={`${name}의 사진`}
                        />
                    ) : (
                        <Skeleton
                            variant='rectangular'
                            animation={false}
                            width={'100%'}
                            height={'100%'}
                        />
                    )}
                </AspectRatio>
                <CardCover
                    className='gradient-cover'
                    sx={{
                        '&:hover, &:focus-within': {
                            opacity: 1,
                        },
                        opacity: 0,
                        transition: '0.1s ease-in',
                        background:
                            'linear-gradient(180deg, transparent 32%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                    }}
                ></CardCover>
            </Box>
            <TextWrapper>
                <p className={'name'}>{name}</p>
                <p className={'description'}>{description}</p>
            </TextWrapper>
            <Box
                sx={{ display: 'flex', gap: 1, mt: 1.5, alignItems: 'center' }}
            >
                {link.map((v) => (
                    <Avatar
                        key={uuidv4()}
                        onClick={() => {
                            window.open(v);
                        }}
                        sx={{ bgcolor: `${linkToIcon(v) || '#DCEAFA'}` }}
                        src={linkToIcon(v)}
                        alt={`${name}의 웹사이트`}
                    >
                        {hostNameFirstWord(v)}
                    </Avatar>
                ))}
            </Box>
        </StyledCard>
    );
}

const StyledCard = styled(Card)`
    margin-right: 20px;
    padding: 0;
    width: 300px;
    box-shadow: none;
    @media (max-height: 1000px) {
        width: 150px;
    }
    @media (max-width: 576px) {
        width: 100%;
        overflow: hidden;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 4px;
    margin-top: 4px;

    > .name {
        font-size: 28px;
        margin: 0;
    }

    > .description {
        font-size: 14px;
        width: 150px;
        white-space: pre-line;
        height: 30px;
        margin: 0;
    }
`;
