import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
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
  const [openModal, setopenModal] = useState(0)
  const handleLSM = ()=>{
    setopenModal(1+openModal)
  }
  return (
    <>
    <LoginSinupModal open={openModal}/>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1,display:'inline-block' }}>
              <Typography
                variant="h6"
                
              >
                Dank Football
              </Typography>
            </Box>
            {/* <Box
              sx={{
                display: {
                  xs: "inline-block",
                  sm: "inline-block",
                  md: "none",
                },
                marginRight : '0.5rem'
              }}
            >
              <Button variant="outlined" color="secondary">
                SignUp
              </Button>
            </Box> */}
            <Box
              sx={{ display: { xs: "none", sm: "none", md: "inline-block" } }}
            >
              <SocialMedia color="secondary" />
            </Box>
            <Box margin={'1rem '}>
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
            <Box
              sx={{ display: { xs: "none", sm: "none", md: "inline-block" } }}
            >
              <Button variant="outlined" color="secondary" onClick={handleLSM}>
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
                  <ListItem>
                    
                    <Button variant="contained" sx={{margin:'0',textTransform:'none'}} color="primary" onClick={handleLSM}>
                      Login / SignUp
                    </Button>
                    
                  </ListItem>
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
