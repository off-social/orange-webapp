"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

type DropdownItem = { label: string; to: string };
type NavItem = { label: string; to: string; dropdown?: DropdownItem[] };

const navLinks: NavItem[] = [
  { label: "Products", to: "/products" },
  { label: "Green Edge Series", to: "/green-edge-series" },
  {
    label: "Company",
    to: "/company",
    dropdown: [
      { label: "About Us", to: "/about" },
      { label: "CSR", to: "/csr" },
      { label: "Support and Services", to: "/services" },
    ],
  },
  {
    label: "Insights",
    to: "/insights",
    dropdown: [
      { label: "News & Events", to: "/news-events" },
      { label: "Blogs", to: "/blogs" },
    ],
  },
  { label: "Career", to: "/career" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<Record<string, boolean>>({});
  const pathname = usePathname();
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const handleEnter = (label: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActiveDropdown(label);
  };

  const handleLeave = () => {
    hideTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const toggleMobile = (label: string) => {
    setMobileOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
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
          bgcolor: "#111",
          boxShadow: "none",
          width: "100%",
          left: 0,
          right: 0,
        }}
      >
        <Box
          sx={{
            px: { xs: "16px", md: "40px", lg: "168px" },
            py: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            href="/"
            sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <Image src="/ORANGE-LOGO.png" alt="Orange" width={140} height={35} priority />
          </Box>

          {/* Desktop Nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              flex: 1,
              gap: { md: 3, lg: 5 },
              alignItems: "center",
            }}
          >
            {navLinks.map((item) =>
              item.dropdown ? (
                <Box
                  key={item.label}
                  onMouseEnter={() => handleEnter(item.label)}
                  onMouseLeave={handleLeave}
                  sx={{ position: "relative" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                      fontSize: "14px",
                      color: pathname.startsWith(item.to) ? "#fff" : "#d2d2d2",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      cursor: "default",
                      "&:hover": { color: "#fff" },
                      "&:hover .nav-arrow": { color: "#fff" },
                    }}
                  >
                    {item.label}
                    <KeyboardArrowDownIcon
                      className="nav-arrow"
                      sx={{
                        fontSize: "16px",
                        color: "inherit",
                        transition: "transform 0.2s",
                        transform: activeDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </Box>

                  {activeDropdown === item.label && (
                    <Box
                      onMouseEnter={() => handleEnter(item.label)}
                      onMouseLeave={handleLeave}
                      sx={{
                        position: "absolute",
                        top: "calc(100% + 12px)",
                        left: 0,
                        bgcolor: "#1e1e1e",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "8px",
                        py: "8px",
                        minWidth: "190px",
                        zIndex: 9999,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                      }}
                    >
                      {item.dropdown.map((sub) => (
                        <Box
                          key={sub.label}
                          component={Link}
                          href={sub.to}
                          onClick={() => setActiveDropdown(null)}
                          sx={{
                            display: "block",
                            px: "16px",
                            py: "10px",
                            fontSize: "13px",
                            color: pathname === sub.to ? "#F6891F" : "#d2d2d2",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            "&:hover": {
                              color: "#fff",
                              bgcolor: "rgba(255,255,255,0.06)",
                            },
                          }}
                        >
                          {sub.label}
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              ) : (
                <Typography
                  key={item.label}
                  component={Link}
                  href={item.to}
                  sx={{
                    fontSize: "14px",
                    color: pathname === item.to ? "#fff" : "#d2d2d2",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {item.label}
                </Typography>
              )
            )}
          </Box>

          {/* Contact Button */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
              sx={{
                bgcolor: "#F6891F",
                color: "#fff",
                borderRadius: "8px",
                padding: "8px 16px",
                textTransform: "none",
                boxShadow: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                minWidth: 0,
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "#e07a18", boxShadow: "none" },
              }}
            >
              Contact Us
            </Button>
          </Box>

          {/* Mobile menu icon */}
          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
            <IconButton onClick={toggleDrawer(true)} sx={{ p: "8px" }}>
              <Image src="/MenuIconButton.svg" alt="menu" width={32} height={32} />
            </IconButton>
          </Box>
        </Box>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 270,
            bgcolor: "#111",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
          <img src="/OrangeLogo.svg" alt="Orange" width={120} height={27} style={{ display: "block" }} />
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "#444" }} />

        <List disablePadding>
          {navLinks.map((item) => (
            <Box key={item.label}>
              {item.dropdown ? (
                <>
                  <ListItemButton
                    onClick={() => toggleMobile(item.label)}
                    sx={{ py: "12px", px: 2 }}
                  >
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: {
                          style: { fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#fff" },
                        },
                      }}
                    />
                    {mobileOpen[item.label]
                      ? <ExpandLess sx={{ color: "#d2d2d2", fontSize: "20px" }} />
                      : <ExpandMore sx={{ color: "#d2d2d2", fontSize: "20px" }} />}
                  </ListItemButton>
                  <Collapse in={!!mobileOpen[item.label]} timeout="auto" unmountOnExit>
                    <List disablePadding>
                      {item.dropdown.map((sub) => (
                        <ListItem key={sub.label} disablePadding>
                          <ListItemButton
                            component={Link}
                            href={sub.to}
                            onClick={toggleDrawer(false)}
                            sx={{ py: "10px", pl: 4, pr: 2 }}
                          >
                            <ListItemText
                              primary={sub.label}
                              slotProps={{
                                primary: {
                                  style: { fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#b0b0b0" },
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    href={item.to}
                    onClick={toggleDrawer(false)}
                    sx={{
                      py: "12px",
                      px: 2,
                      borderLeft: pathname === item.to ? "3px solid #fff" : "3px solid transparent",
                      bgcolor: pathname === item.to ? "rgba(255,255,255,.08)" : "transparent",
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: {
                          style: { fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#fff" },
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )}
              <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />
            </Box>
          ))}
        </List>

        <Box sx={{ p: 2 }}>
          <Button
            fullWidth
            component={Link}
            href="/contact"
            onClick={toggleDrawer(false)}
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
