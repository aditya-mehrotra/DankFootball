import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Avatar, MenuItem, Menu, ListItemIcon } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SocialMedia } from "./SocialMedia";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { NavBar } from "./NavBar";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import { LoginSinupModal } from "./LoginSinupModal";

export const Header = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [responsiveValue, setResponsiveValue] = useState(0);
  const handleClick = (idx) => {
    setResponsiveValue(idx);
    props.tabValues(idx);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const [openModal, setopenModal] = useState(false);
  const handleClose = () => {
    setopenModal(false);
  };
  const handleOpen = () => {
    setopenModal(true);
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const handleLoginHeader = () => {
    setLoggedIn(true);
  };
  const handleLogoutHeader = () => {
    setLoggedIn(false);
    fetch('/api/logout',{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
  };
  const [avatarName, setAvatarName] = useState("");
  const handleAvatarName = (name) => {
    setAvatarName(name);
  };
  const [avatarMenue, setAvatarMenue] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenAvatarMenue = (event) => {
    setAvatarMenue(true);
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAvatarMenue = () => {
    setAvatarMenue(false);
  };

  return (
    <>
      <LoginSinupModal
        open={openModal}
        close={handleClose}
        handleLoginHeader={handleLoginHeader}
        handleLogoutHeader={handleLogoutHeader}
        handleAvatarName={handleAvatarName}
      />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "inline-block" }}>
              <Typography variant="h6">Dank Football</Typography>
            </Box>
            <Box
              sx={{ display: { xs: "none", sm: "none", md: "inline-block" } }}
            >
              <SocialMedia color="secondary" />
            </Box>
            <Box margin={"1rem "}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            {!loggedIn && (
              <Box
                sx={{ display: { xs: "none", sm: "none", md: "inline-block" } }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleOpen}
                >
                  Login/Signup
                </Button>
              </Box>
            )}
            {loggedIn && (
              <>
                <Box onClick={handleOpenAvatarMenue}>
                  <Avatar>{avatarName}</Avatar>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  open={avatarMenue}
                  onClose={handleCloseAvatarMenue}
                >
                  <MenuItem onClick={()=>{handleCloseAvatarMenue()}}>
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={()=>{handleCloseAvatarMenue(); handleLogoutHeader()}}>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </MenuItem>
                </Menu>
              </>
            )}

            <Box>
              <IconButton
                color="secondary"
                onClick={() => setDrawerOpen(true)}
                sx={{ display: { md: "none", lg: "none", xl: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                color="secondary"
              >
                <List>
                  {[
                    "Latest",
                    "Top",
                    "Transfers",
                    "Matches",
                    "Contact Us",
                    "About",
                  ].map((item, idx) => {
                    return (
                      <ListItem id={idx} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            handleClick(idx);
                          }}
                        >
                          <ListItemText primary={item} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                  {!loggedIn && (
                    <ListItem>
                      <Button
                        variant="contained"
                        sx={{ margin: "0", textTransform: "none" }}
                        color="primary"
                        onClick={handleOpen}
                      >
                        Login / SignUp
                      </Button>
                    </ListItem>
                  )}
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
        <NavBar tabValues={props.tabValues} newValue={responsiveValue} />
      </Box>
    </>
  );
};
