import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
export const WriteArticle = () => {
  return (
    <>
      <Box sx={{ margin: "1rem" }}>
        <Typography variant="h4" color="primary">
          Write Your Own Article
        </Typography>
      </Box>
      <Box component={'form'} action="/api/writearticle" method="POST" encType="multipart/form-data">
        <Box marginTop={'0.5rem'}>
          <TextField
            name="title"
            id="outlined-multiline-flexible"
            label="Title..."
            multiline
            maxRows={4}
            color="primary"
            fullWidth
          />
        </Box>
        <Box marginTop={'0.5rem'}>
          <TextField
            id="outlined-multiline-static "
            name="body"
            label="Write Your Article Here..."
            multiline
            fullWidth
            rows={8}
            color="primary"
          />
        </Box>
        <Box marginTop={'0.5rem'}>
          <Button variant="contained" component="label">
            Upload An Image:&ensp;
            <input type="file" name="articleImage" accept="image/*"/>
          </Button>
          
        </Box>
        <Box marginTop={'0.5rem'}>
          <Button variant="contained" color="primary" type="submit">
            Publish
          </Button>
        </Box>
      </Box>
    </>
  );
};
