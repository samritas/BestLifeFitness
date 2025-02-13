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
          inset: 0,
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
                  xs: "1rem",
                  sm: "1.25rem",
                  md: "1.5rem",
                  lg: "1.75rem",
                  xl: "2rem",
                },
                textAlign: "center", // Ensures center alignment
                whiteSpace: "pre-line", // Allows line breaks to work properly
              }}
            >
              <TypeAnimation
                sequence={[
                  "50代、60代、70代からはじめる健康でいるた\nめのパーソナルジム",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontFamily: "monospace", display: "block" }}
                repeat={0}
              />
            </Typography>

            <Link
              to="counseling"
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
                  fontSize: { xs: "1rem", md: "1.25rem" },
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
