import { Box, Typography, Grid, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsApp from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#E87F11", color: "#fff", p: 15 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Left Section - Phone & Email */}
        <Grid item xs={12} md={5}>
          <Typography
            variant="h6"
            sx={{
              fontSize: {
                xs: "1rem",
                md: "1.25rem",
              },
            }}
          >
            電話 / メールアドレス
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "1rem",
                  md: "1.25rem",
                },
              }}
            >
              080-7998-3831
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <EmailIcon sx={{ mr: 1 }} />
            <Link
              href="mailto:info@bestlifefitness.jp"
              color="inherit"
              underline="hover"
              sx={{
                fontSize: {
                  xs: "1rem",
                  md: "1.25rem",
                },
              }}
            >
              info@bestlifefitness.jp
            </Link>
          </Box>
        </Grid>

        {/* Right Section - SNS Links */}
        <Grid item xs={12} md={5}>
          <Typography
            variant="h6"
            sx={{
              fontSize: {
                xs: "1rem",
                md: "1.25rem",
              },
            }}
          >
            SNS
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <InstagramIcon sx={{ mr: 1 }} />
            <Link
              href="https://www.instagram.com/bestlifefitness_myc/profilecard/?igsh=MTc5Z3JscmVhZTUwcw==s"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
              sx={{
                fontSize: {
                  xs: "1rem",
                  md: "1.25rem",
                },
              }}
            >
              Instagram
            </Link>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <WhatsApp sx={{ mr: 1 }} />
            <Link
              href="https://line.me/ti/p/EgRZxpaYn-"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
              sx={{
                fontSize: {
                  xs: "1rem",
                  md: "1.25rem",
                },
              }}
            >
              Line
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}