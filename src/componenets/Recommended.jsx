import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Recommended1 from '../assets/Recommended1.png';
import Recommended2 from '../assets/Recommended2.png';
import Recommended3 from '../assets/Recommended3.png';
import strings from '../localization/strings'; 

function Recommended() {
  return (
    <Box sx={{ padding: 7, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4, color: '#E37503', fontSize: { xs: '1.5rem', md: '2rem' } }}>
          {strings.recommended_title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'center', alignItems: 'center' }}>
          {[ 
            { image: Recommended1, title: strings.recommended_1 },
            { image: Recommended2, title: strings.recommended_2 },
            { image: Recommended3, title: strings.recommended_3 },
          ].map((service, index) => (
            <Card key={index} sx={{ maxWidth: 600, borderRadius: 4, boxShadow: 3, transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 6 } }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia component="img" height="350" image={service.image} alt={service.title} sx={{ position: 'relative', transition: 'opacity 0.3s ease-in-out', maxHeight: '350px' }} />
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', transition: 'background-color 0.3s ease-in-out', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0)' } }} />
              </Box>
              <CardContent sx={{ height: '70px' }}>
                <Typography sx={{ padding: 1, backgroundColor: '#E37503', borderRadius: '16px', color: 'white', textAlign: 'center', maxWidth: '310px', fontSize: { xs: '1rem', md: '1.25rem' } }} variant="body1" component="div">
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
