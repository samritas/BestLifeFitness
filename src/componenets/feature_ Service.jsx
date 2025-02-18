import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import service from '../assets/service.png';
import strings from '../localization/strings'; 

const RoundedImage = styled('img')(({ theme }) => ({
  width: '500px',
  height: '370px',
  borderRadius: '5%',
  [theme.breakpoints.down('sm')]: {
    width: '300px',
    height: 'auto',
  },
}));

const Service = () => (
  <Box sx={{ p: 5, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
    <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" p={1}>
      <Typography variant="h5" sx={{ color: '#E87F11', fontWeight: 'bold', mb: 1, fontSize: { xs: '1.75rem', md: '2rem' } }}>
      {strings.service_title}
      </Typography>
      <Typography variant="body1" sx={{ color: '#E87F11', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
      {strings.service_description}
      </Typography>
    </Box>
    <Box flex={1} display="flex" justifyContent="center" alignItems="center">
      <RoundedImage src={service} alt="Service" />
    </Box>
  </Box>
);

export default Service;