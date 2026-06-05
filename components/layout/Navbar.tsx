"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const navLinks = [
  { label: "Our Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Green Edge Series", to: "/green-edge-series" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // Fix for scrollbar width issue
  useEffect(() => {
    // Calculate scrollbar width
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Add padding to body when modal/drawer opens to prevent layout shift
    if (drawerOpen) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.paddingRight = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#272727",
          boxShadow: "none",
          // Optional: Add this to ensure navbar doesn't shift
          width: "100%",
          left: 0,
          right: 0,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Image
                src="/ORANGE-LOGO.png"
                alt="Orange"
                width={173}
                height={50}
                priority
              />
            </Box>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                flex: 1,
                gap: 5,
              }}
            >
              {navLinks.map((item) => (
                <Typography
                  key={item.label}
                  component={Link}
                  href={item.to}
                  sx={{
                    fontSize: "14px",
                    color: pathname === item.to ? "#fff" : "#d2d2d2",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>

            {/* Contact Button Desktop */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{
                  bgcolor: "#F7931E",
                  color: "#fff",
                  borderRadius: "20px",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  minWidth: "110px",
                  "&:hover": {
                    bgcolor: "#e8820d",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>

            {/* Mobile Menu */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                ml: "auto",
              }}
            >
              <IconButton onClick={toggleDrawer(true)} sx={{ color: "#fff" }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 270,
            bgcolor: "#272727",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Image src="/ORANGE-LOGO.png" alt="Logo" width={90} height={90} />

          <IconButton onClick={toggleDrawer(false)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "#444" }} />

        <List>
          {navLinks.map((item) => {
            const active = pathname === item.to;

            return (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.to}
                  onClick={toggleDrawer(false)}
                  sx={{
                    borderLeft: active
                      ? "3px solid #fff"
                      : "3px solid transparent",
                    bgcolor: active ? "rgba(255,255,255,.08)" : "transparent",
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ p: 2 }}>
          <Button
            fullWidth
            component={Link}
            href="/contact"
            variant="contained"
            sx={{
              bgcolor: "#F7931E",
              color: "#fff",
              borderRadius: "20px",
              textTransform: "none",
              "&:hover": { bgcolor: "#e8820d" },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
