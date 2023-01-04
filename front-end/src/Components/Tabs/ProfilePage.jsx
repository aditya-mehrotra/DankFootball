import React from 'react'
import { Paper,Grid,Box, Typography,Stack} from '@mui/material'

export const ProfilePage = () => {
  return (
    <>
        <Paper sx={{margin:'1rem',display:'flex',justifyContent:'center',alignContent:'center'}}>
          <Grid container spacing={3} padding='1rem'> 
            <Grid item xs={12} sm={12} md={4}>
              <Box component={'div'} sx={{display:'flex',justifyContent:'center',alignContent:'center',alignSelf:'center',justifySelf:'center'}}>

              <Box component='img' src = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2' sx={{borderRadius:'10px',height:'100%',width:'100%'}}>
                {/* <img width={'100%'} height={'100%'} src=''/> */}
              </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Box sx={{height:'100%',display:'flex',flexDirection:'column'}}>
                <Typography variant='h5'>User Name</Typography>   
                <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
              
                <Stack direction='row' spacing={4} sx={{justifySelf:'center',alignSelf:'center',margin:'2rem',background:'#efefef',padding:'1rem',borderRadius:'8px'}}>
                  <Box> 
                    <Typography>Articles</Typography>
                    <Typography textAlign='center'>1</Typography>
                  </Box>
                  <Box>
                    <Typography>Likes</Typography>
                    <Typography textAlign='center'>6</Typography>
                  </Box>
                  <Box>
                    <Typography>Dislikes</Typography>
                    <Typography textAlign='center'>2</Typography>
                  </Box>
                </Stack>
              
              </Box>
            </Grid>
          </Grid>
        </Paper>
    </>
  )
}
