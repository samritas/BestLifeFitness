import { Box, Typography, Grid, Link } from "@mui/material";
import { Phone, Email, Instagram, WhatsApp } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#E87F11", color: "#fff", p: 15 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={5}>
          <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
            電話 / メールアドレス
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <Phone sx={{ mr: 1 }} />
            <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
              080-7998-3831
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <Email sx={{ mr: 1 }} />
            <Link href="mailto:info@bestlifefitness.jp" color="inherit" underline="hover" sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
              info@bestlifefitness.jp
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
            SNS
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <Instagram sx={{ mr: 1 }} />
            <Link href="https://www.instagram.com/bestlifefitness_myc/profilecard/?igsh=MTc5Z3JscmVhZTUwcw==s" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover" sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
              Instagram
            </Link>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <WhatsApp sx={{ mr: 1 }} />
            <Link href="https://line.me/ti/p/EgRZxpaYn-" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover" sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
              Line
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
