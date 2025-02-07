import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import banner from "../assets/banner.png";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar"; // Import the Navbar

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
      {/* Overlay */}
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

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
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
            <Typography variant="h5" sx={{ color: "white", mb: 4 }}>
              <TypeAnimation
                sequence={["50代、60代、70代からはじめる健康でいるためのパーソナルジム", 1000]}
                wrapper="span"
                speed={50}
                style={{ fontFamily: "monospace", whiteSpace: "nowrap" }}
                repeat={0}
              />
            </Typography>
            <Button
              sx={{
                backgroundColor: "#E37503",
                color: "white",
                px: 4,
                py: 1,
                fontSize: "0.9rem",
              }}
            >
              無料カウンセリングを予約する
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
