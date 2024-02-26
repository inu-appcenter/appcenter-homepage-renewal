import Box from '@mui/joy/Box';
import AspectRatio from '@mui/joy/AspectRatio';
import { Skeleton } from '@mui/material';
import CardCover from '@mui/joy/CardCover';
import * as React from 'react';
import styled from 'styled-components';
import Card from '@mui/joy/Card';

export default function MemberItemSkeleton() {
    return (
        <StyledCard
            sx={{
                bgcolor: 'initial',
                boxShadow: 'none',
                '--Card-padding': '0px',
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <AspectRatio ratio='1'>
                    <figure>
                        <Skeleton
                            variant='rectangular'
                            width={'100%'}
                            height={'100%'}
                        />
                    </figure>
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
            <Box
                sx={{ display: 'flex', gap: 1, mt: 1.5, alignItems: 'center' }}
            >
                <Skeleton
                    variant='text'
                    sx={{ fontSize: '30px' }}
                    width={'70%'}
                />
            </Box>
            <Box
                sx={{ display: 'flex', gap: 1, mt: 1.5, alignItems: 'center' }}
            >
                <Skeleton
                    variant='text'
                    sx={{ fontSize: '20px' }}
                    width={'100%'}
                />
            </Box>
            <Box
                sx={{ display: 'flex', gap: 1, mt: 1.5, alignItems: 'center' }}
            >
                <Skeleton variant='circular' width={40} height={40} />
                <Skeleton variant='circular' width={40} height={40} />
            </Box>
        </StyledCard>
    );
}

const StyledCard = styled(Card)`
    width: 300px;
    margin-right: 20px;
    @media (max-height: 1000px) {
        width: 150px;
    }
    @media (max-width: 576px) {
        width: 100%;
        overflow: hidden;
    }
`;
