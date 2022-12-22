import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import {Button} from "@mui/material";
export const WriteArticle = () => {
  return (
    <>
      <Box sx={{ margin: "1rem" }}>
        <Typography variant="h4" color="primary">
          Write Your Own Article
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            width: "40%",
          }}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Title..."
            multiline
            maxRows={4}
            //   sx={{margin:'1rem'}}
            margin="normal"
            color="primary"
            fullWidth
          />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <TextField
            id="outlined-multiline-static "
            label="Write Your Article Here..."
            multiline
            fullWidth
            rows={8}
            //   defaultValue="Write Your Article Here..."
            //   sx={{margin:'1rem'}}
            margin="normal"
            color="primary"
          />
        </Box>
        <Box
          sx={{
            width: "40%",
          }}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Image Link"
            multiline
            maxRows={4}
            //   sx={{margin:'1rem'}}
            margin="normal"
            color="primary"
            fullWidth
          />
        </Box>
        <Box sx={{JustifyContent: 'flex-end'}}>
          <Button variant="contained" color="primary" >
            Publish
          </Button>
        </Box>
      </Box>
    </>
  );
};
