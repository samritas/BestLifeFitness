import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Recommended1 from '../assets/Recommended1.png';
import Recommended2 from '../assets/Recommended2.png';
import Recommended3 from '../assets/Recommended3.png';

function Recommended() {
  return (
    <Box sx={{ padding: 7, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
  <Box sx={{ textAlign: 'center' }}>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        mb: 4,
        color: '#E37503',
      }}
    >
      こんな方におすすめ
    </Typography>

    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {[
        { image: Recommended1, title: '運動習慣がない方' },
        { image: Recommended2, title: 'パーソナルジムは辛いトレーニングと食事制限がありそうで嫌だ' },
        { image: Recommended3, title: 'ジム通うのにハードルを感じる方' },
        
      ].map((service, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 600,
            borderRadius: 4,
            boxShadow: 3,
            transition: 'box-shadow 0.3s',
            '&:hover': {
              boxShadow: 6,
            },
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              height="350"
              image={service.image}
              alt={service.title}
              sx={{
                position: 'relative',
                transition: 'opacity 0.3s ease-in-out',
                '&:hover': {
                  opacity: 1,
                },
                maxHeight:'350px',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Black opacity
                transition: 'background-color 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0)', // Remove opacity on hover
                },
              }}
            />
          </Box>
          <CardContent sx={{height:'70px'}}>
            <Typography
              sx={{
                padding: 1,
                backgroundColor: '#E37503',
                borderRadius: '16px',
                color: 'white',
                textAlign: 'center',
                maxWidth:'310px',
             
              }}
              variant="body1"
              component="div"
            >
              {service.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
</Box>

  );
}

export default Recommended;