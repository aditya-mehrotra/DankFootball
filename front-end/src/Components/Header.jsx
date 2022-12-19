import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { SocialMedia } from "./SocialMedia";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  left: "50vw",
                  transform: "translate(-50%,-50%)",
                }}
              >
                Dank Football
              </Typography>
            </Box>
            <Box>
              <IconButton
                color="secondary"
                onClick={() => setDrawerOpen(true)}
                sx={{ display: { md: "none", lg: "none", xl: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                sx={{ display: { xs: "none", sm: "none", md: "inline-block" } }}
              >
                <SocialMedia color="secondary" />
              </Box>
              <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                color="secondary"
              >
                <NavBar />
              </Drawer>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{width:'100%', display: { xs: "none", sm: "none", md: "inline-block" } }}>
        <NavBar />
      </Box>
    </>
  );
};
