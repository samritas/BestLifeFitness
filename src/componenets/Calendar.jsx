import React, { useEffect } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';

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
          backgroundColor: '#f3efe9',
          borderRadius: 4,
          textAlign: 'center',
          border: '1px solid #E37503',
          width: { xs: '90%', md: '70%' },
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: '#E37503', mb: 2, fontWeight: 'bold' }}
        >
          ボタンをクリックして、<br />
          利用可能なスケジュールをご確認ください。
        </Typography>
        <Button
          variant="body2"
          onClick={handleRedirect}
          sx={{
            backgroundColor: '#E37503',
            color: 'white',
            px: 4,
            py: 1.5,
            borderRadius: 3,
            transition: '0.4s ease',
            '&:hover': {
              backgroundColor: '#D16402',
              transform: 'scale(1.08)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            },
          }}
        >
          無料カウンセリング予約
        </Button>
      </Paper>

      <Paper
        elevation={6}
        sx={{
          p: 3,
          // Removed borderRadius and backgroundColor
          width: { xs: '90%', md: '100%' },
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: 'center', mb: 3, color: '#E37503', fontWeight: 'bold' }}
        >
          スケジュールカレンダー
        </Typography>
        <Box
          id="timerex_calendar"
          data-url="https://timerex.net/s/jpnkimizuka_8032/48141be6"
          sx={{
            width: '100%',
            height: '1000px',
            // Removed border and borderRadius
            overflow: 'hidden',
          }}
        ></Box>
      </Paper>
    </Box>
  );
};

export default Calendar;
