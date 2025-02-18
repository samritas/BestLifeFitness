import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import founder from '../assets/trainer.jpg';
import strings from '../localization/strings';

const RoundedImage = styled('img')({
    width: '205px',
    height: '250px',
    borderRadius: '5%',
    objectFit: 'cover',
});

const CoFounder = () => {
    return (
        <Box sx={{ padding: 8 }}>
            <Typography 
                variant="h5" 
                sx={{ 
                    color: '#E87F11', 
                    fontWeight: 'bold', 
                    marginBottom: 1, 
                    fontSize: { xs: '1.75rem', md: '2rem' },
                    textAlign: { xs: 'center', md: 'left' } 
                }}
            >
            {strings. Trainer_title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'center', alignItems: 'center' }}>
                <Box>
                    <RoundedImage src={founder} alt="Co-founder" />
                </Box>
                <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" padding={2}>
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            color: '#E87F11', 
                            fontWeight: 'bold', 
                            marginBottom: 1, 
                            fontSize: { xs: '1.75rem', md: '2rem' },
                            textAlign: { xs: 'center', md: 'left' } 
                        }}
                    >
                        {strings.Trainer_name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#E87F11', fontSize: { xs: '1.25rem', md: '1.50rem' } }}>
                    {strings.Trainer_description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default CoFounder;
