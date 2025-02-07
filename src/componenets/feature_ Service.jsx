import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import service from '../assets/service.png';
const RoundedImage = styled('img')({
    width: '400px',
    height: '200px', 
    borderRadius: '5%', 
});

const Service = () => {
    return (
        <Box 
        sx={{   padding: 5 ,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4, 
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
                padding={2} 
             
            >
                <Typography 
                    variant="h5" 
                    sx={{ 
                        color: '#E87F11', 
                        fontWeight: 'bold', 
                        marginBottom: 1 
                    }}
                >
                   パーソナルジムとは
                </Typography>
                <Typography 
                    variant="body2" 
                    sx={{  color: '#E87F11' }} 
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
