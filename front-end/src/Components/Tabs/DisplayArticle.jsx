import { Grid } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { display } from "@mui/system";
import { TextField } from "@mui/material";
import { CustomCard } from "../CustomCard";
export const DisplayArticle = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={9}>
          <Box sx={{ margin: "1rem" }}>
            <Typography variant="h4" color="primary">
              Article Title
            </Typography>
          </Box>
          <Box sx={{ width: "80%", height: "auto", margin: "1rem" }}>
            <img src="/" alt="Article Image" />
          </Box>
          <Box sx={{ margin: "1rem" }}>
            <Typography variant="h6" color="primary">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularized in the 1960s with the release of
              Letterset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </Typography>
          </Box>
          <Box sx={{ margin: "1rem" }}>
            <Typography variant="h4" color="primary">
              Comments
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              margin: "1rem",
            }}
          >
            <TextField
              id="outlined-textarea"
              label="Leave a Comment..."
              multiline
              fullWidth
            />
          </Box>
          <Box sx={{margin:'1rem'}}>
            <Typography variant="h5" color="primary">
              User Name
            </Typography>
            <Typography variant="h6" color="primary">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={0} sm={0} md={3}>
          <Box
            sx={{
              margin: "1rem",
              display: { xs: "none", sm: "none", md: "inline-block" },
            }}
          >
            <Typography variant="h4" color="primary">
              Latest
            </Typography>
            {/* <CustomCard/> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
