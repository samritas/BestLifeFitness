import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import service from '../assets/service.png';

const RoundedImage = styled('img')(({ theme }) => ({
    width: '500px',
    height: '250px', 
    borderRadius: '5%',
    [theme.breakpoints.down('sm')]: {
        width: '300px', 
        height: 'auto', 
    },
}));

const Service = () => {
    return (
        <Box 
        sx={{   padding: 5 ,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2, 
            justifyContent: 'center',
            alignItems: 'center', 
          }}
        >
            <Box 
                flex={1} 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="flex-start" 
                padding={1} 
            >
                <Typography 
                    variant="h5" 
                    sx={{ 
                        color: '#E87F11', 
                        fontWeight: 'bold', 
                        marginBottom: 1,
                        fontSize: {
                            xs: '1.75rem',
                            md: '2rem',
                        },
                    }}
                >
                   パーソナルジムとは
                </Typography>
                <Typography 
                    variant="body1" 
                    sx={{  
                        color: '#E87F11',
                        fontSize: {
                            xs: '1.25rem',
                            md: '1.50rem',
                        },
                    }} 
                >
                 パーソナルジムは、完全予約制でトレーナーがマンツーマンでサポートするジムです。一人ひとりの目標や体力に合わせて、オーダーメイドのトレーニングプランを提供します。

パーソナルジムの魅力の一つは、その環境です。周りを気にせず、自分のペースで運動に集中できる点が特徴です
                </Typography>
            </Box>

            <Box 
                flex={1} 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
            >
                <RoundedImage 
                    src={service}
                    alt="Rounded" 
                />
            </Box>
        </Box>
    );
};

export default Service;
