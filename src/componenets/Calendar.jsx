import React, { useEffect } from 'react';
import { Box, Typography, Paper, Link } from '@mui/material';

const Calendar = () => {
  const handleRedirect = () => {
    window.open(
      'https://drive.google.com/file/d/1UqdJcbmu45avIy7mm4dmnWKwL4YF5bkV/view',
      '_blank'
    );
  };
  useEffect(() => {
    const calendarContainer = document.getElementById('timerex_calendar');

    if (!document.getElementById('timerex_embed')) {
      const script = document.createElement('script');
      script.src = 'https://asset.timerex.net/js/embed.js';
      script.id = 'timerex_embed';
      script.async = true;
      script.onload = () => {
        if (window.TimerexCalendar) {
          window.TimerexCalendar();
        }
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else if (window.TimerexCalendar && calendarContainer && !calendarContainer.hasChildNodes()) {
      window.TimerexCalendar();
    }
  }, []);

  return (
    <Box
      sx={{
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 3,
          width: { xs: '90%', md: '100%' },
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: 'center' ,
            color: '#E37503',
            fontWeight: 'bold', 
            marginBottom: 1,
            fontSize: {
                xs: '1.75rem',
                md: '2rem',
            }, }}
        >
          無料カウンセリング
        </Typography>
        <Box
          id="timerex_calendar"
          data-url="https://timerex.net/s/jpnkimizuka_8032/48141be6"
          sx={{
            width: '100%',
            height: '1000px',
            overflow: 'hidden',
            
          }}
        ></Box>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', mt: 2, color: 'gray', fontSize: {
            xs: '1rem',
            md: '1.25rem',
        }, }}
        >
          予約をすることで、
          <Link   onClick={handleRedirect} sx={{ color: '#E37503', textDecoration: 'none' }}>利用規約</Link>および
          <Link   onClick={handleRedirect} sx={{ color: '#E37503', textDecoration: 'none' }}>プライバシーポリシー</Link>
          に同意したものとみなされます。
        </Typography>
      </Paper>
    </Box>
  );
};

export default Calendar;
