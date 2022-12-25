import React from "react";
import { IconButton, Modal } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";
import { Typography, TextField, Button, Link, Grid } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const LoginSinupModal = (props) => {
  const [displayLogin, setdisplayLogin] = useState(true);
  const handleSignUp = () => {
    setdisplayLogin(false);
  };
  const handleLogin = () => {
    setdisplayLogin(true);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };
  

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const handleLoginSubmit = async()=>{
    const response = await fetch('/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:loginEmail,password:loginPassword})
    })
    const body = await response.json();
    if(body.msg)props.close();
  }
  const [signupFirstName, setSignupFirstName] = useState('')
  const [signupLastName, setSignupLastName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const handleSignupSubmit = async()=>{
    const response = await fetch('/api/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({firstName:signupFirstName,lastName:signupLastName,email:signupEmail,password:signupPassword})
    })
    const body = await response.json();
    if(body.msg)handleLogin();

  }


  

  return (
    <>
      <Modal open={props.open} onClose={props.close}>
        <Box sx={style}>
          <Box sx={{display:'flex',justifyContent:'flex-end'}}>
          <IconButton onClick={props.close}>
            <CloseIcon/>
          </IconButton>
          </Box>
          {displayLogin && (
            <Box component='form' action="/api/login" method="post"
              sx={{
                width: 300,
                mx: "auto", // margin left & right
                my: 4, // margin top & botom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRadius: "sm",
                boxShadow: "md",
              }}
              variant="outlined"
            >
              <div>
                <Typography level="h4" component="h1">
                  <b>Welcome!</b>
                </Typography>
                <Typography level="body2">Sign in to continue.</Typography>
              </div>
              <TextField
                // html input attribute
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                // pass down to FormLabel as children
                label="Email"
                onChange={(e)=>{setLoginEmail(e.target.value)}}
              />
              <TextField
                name="password"
                type="password"
                placeholder="password"
                label="Password"
                onChange={(e)=>{setLoginPassword(e.target.value)}}
              />
              <Button onClick={handleLoginSubmit}
                sx={{ mt: 1 /* margin top */ }}
                variant="contained"
                color="primary"
              >
                Log in
              </Button>
              <Typography
                fontSize="sm"
                sx={{ alignSelf: "center" }}
              >
                Don&apos;t have an account?
                <Link sx={{ cursor: "pointer" }} onClick={handleSignUp}>
                  SignUp
                </Link>
              </Typography>
            </Box>
          )}
          {!displayLogin && (
            <Box
              //   sx={{
              //     marginTop: 8,
              //     display: 'flex',
              //     flexDirection: 'column',
              //     alignItems: 'center',
              //   }}
              
              sx={{
                width: 300,
                mx: "auto", // margin left & right
                my: 4, // margin top & botom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRadius: "sm",
                boxShadow: "md",
              }}
            >
                <div>
                <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Sign up to continue.</Typography>
                </div>
              
              <Box component="form" action="/api/signup" method="post" noValidate sx={{ mt: 0 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      onChange={(e)=>{setSignupFirstName(e.target.value)}}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      onChange={(e)=>{setSignupLastName(e.target.value)}}
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      onChange={(e)=>{setSignupEmail(e.target.value)}}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      onChange={(e)=>{setSignupPassword(e.target.value)}}
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button onClick={handleSignupSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Typography>
                      Already have an account?
                      <Link
                        onClick={handleLogin}
                        variant="body2"
                        sx={{ cursor: "pointer" }}
                      >
                        Sign in
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};
