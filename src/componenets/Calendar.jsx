import React, { useEffect } from 'react';
import { Box, Typography, Paper, Link } from '@mui/material';
import strings from '../localization/strings';


const Calendar = () => {
  useEffect(() => {
    if (!document.getElementById('timerex_embed')) {
      const script = document.createElement('script');
      script.src = 'https://asset.timerex.net/js/embed.js';
      script.id = 'timerex_embed';
      script.async = true;
      script.onload = () => window.TimerexCalendar?.();
      document.body.appendChild(script);

      return () => document.body.removeChild(script);
    } else {
      document.getElementById('timerex_calendar')?.childNodes.length === 0 && window.TimerexCalendar?.();
    }
  }, []);

  const handleRedirect = () => {
    window.open('https://drive.google.com/file/d/1UqdJcbmu45avIy7mm4dmnWKwL4YF5bkV/view', '_blank');
  };

  return (
    <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
      <Paper elevation={6} sx={{ p: 3, width: { xs: '90%', md: '100%' }, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: '#E37503', fontWeight: 'bold', mb: 1, fontSize: { xs: '1.75rem', md: '2rem' } }}>
        {strings.Calander_title1}
        </Typography>
        <Box id="timerex_calendar" data-url="https://timerex.net/s/jpnkimizuka_8032/48141be6" sx={{ width: '100%', height: '1000px', overflow: 'hidden' }} />
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 2, color: 'gray', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
        {strings.Calander_title2}
          <Link onClick={handleRedirect} sx={{ color: '#E37503', textDecoration: 'none' }}> {strings.Calander_link1}</Link>
          {strings.Calander_text1}
          <Link onClick={handleRedirect} sx={{ color: '#E37503', textDecoration: 'none' }}> {strings.Calander_link2}</Link>
          {strings.Calander_text2}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Calendar;
