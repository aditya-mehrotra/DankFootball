import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";

export const SocialMedia = (props) => {
  return (
    <>
      <IconButton color={props.color}>
        <FacebookIcon />
      </IconButton>
      <IconButton color={props.color}>
        <InstagramIcon />
      </IconButton>
      <IconButton color={props.color}>
        <WhatsAppIcon />
      </IconButton>
      <IconButton color={props.color}>
        <LinkedInIcon />
      </IconButton>
    </>
  );
};
