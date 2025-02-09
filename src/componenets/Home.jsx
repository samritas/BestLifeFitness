import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import banner from "../assets/banner.png";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar"; 
import { Link } from "react-scroll";

function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      
      <Navbar />

     
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: "white", 
                mb: 4,
                fontSize: {
                  xs: '1rem',  // Font size for mobile (extra small screens)
                  sm: '1.25rem', // Font size for small screens
                  md: '1.5rem',  // Font size for medium screens (desktop)
                  lg: '1.75rem', // Font size for large screens
                  xl: '2rem'     // Font size for extra large screens
                }
              }}
            >
              <TypeAnimation
                sequence={["50代、60代、70代からはじめる健康でいるためのパーソナルジム", 1000]}
                wrapper="span"
                speed={50}
                style={{ fontFamily: "monospace", whiteSpace: "nowrap" }}
                repeat={0}
              />
            </Typography>
            <Link  
              to='counseling'
              smooth={true}
              duration={500}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <Button
                sx={{
                  backgroundColor: "#E37503",
                  color: "white",
                  px: 4,
                  py: 1,
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}
              >
                無料カウンセリングを予約する
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;