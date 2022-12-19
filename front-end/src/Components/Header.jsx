import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Button,List,ListItem,ListItemButton,ListItemText } from "@mui/material";
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
            <Box
              sx={{ display: { xs: "none", sm: "none", md: "inline-block" } }}
            >
              <SocialMedia color="secondary" />
            </Box>
            <Box
              sx={{
                display: {
                  xs: "inline-block",
                  sm: "inline-block",
                  md: "none",
                },
              }}
            >
              <Button variant="outlined" color="secondary">
                SignUp
              </Button>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  margin: "0",
                  position: "absolute",
                  left: "50vw",
                  transform: "translate(-50%,-50%)",
                }}
              >
                Dank Football
              </Typography>
            </Box>
            <Box
              sx={{ display: { xs: "none", sm: "none", md: "inline-block" } }}
            >
              <Button variant="outlined" color="secondary">
                Login/Signup
              </Button>
            </Box>
            <Box>
              <IconButton
                color="secondary"
                onClick={() => setDrawerOpen(true)}
                sx={{ display: { md: "none", lg: "none", xl: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                color="secondary"
              >
                <List>
                  {['Latest','Top','Transfers','Matches','Contact Us','About'].map((item)=>{
                    return(
                      <ListItem disablePadding>
                        <ListItemButton href="#">
                          < ListItemText primary={item} />
                        </ListItemButton>
                      </ListItem>
                    )
                  })}
                </List>
              </Drawer>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: { xs: "none", sm: "none", md: "inline-block" },
        }}
      >
        <NavBar />
      </Box>
    </>
  );
};
