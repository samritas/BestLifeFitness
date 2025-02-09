import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const navItems = [
  { label: "ホーム", id: "home" },
  { label: "こんな方におすすめ", id: "about" },
  { label: "サービスの特徴", id: "services" },
  { label: "料金", id: "pricing" },
  { label: "トレーナー", id: "trainer" },
  { label: "無料カウンセリング", id: "counseling" },
  { label: "企業理念", id: "philosophy" },
  { label: "創業者紹介", id: "founder" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isSticky ? "rgba(0, 0, 0, 0.6)" : "transparent",
          transition: "background-color 0.3s ease-in-out",
          boxShadow: "none",
          backdropFilter: isSticky ? "blur(0px)" : "none",
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
            {/* Logo */}
            <img src={logo} alt="Logo" style={{ height: "50px", width: "auto" }} />

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  style={{ textDecoration: "none", cursor: "pointer", }}
                  
                >
                  <Button
                    sx={{
                      color: "white",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": { color: "orange.main" },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
        sx={{
          "& .MuiDrawer-paper": {
            width: "75%",
            backgroundColor: "white",
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.id}
              onClick={toggleMenu}
              component={Link}
              to={item.id}
              smooth={true}
              duration={500}
            >
              <ListItemText primary={item.label} sx={{ textAlign: "center" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
