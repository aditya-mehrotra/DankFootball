import { Grid, Button, Stack, Paper} from '@mui/material';
import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { CustomCard } from '../CustomCard';

export const DisplayArticle = () => {
  let { articleId } = useParams();
	const [pageData, setPageData] = useState({
		article: { title: 'test', body: 'testBody' },
		comments: [{user:'ankit',body:'testComment'},{user:'ankit',body:'testComment'}],
	});
  const [latestSideBar, setlatestSideBar] = useState([])
	useEffect(() => {
		fetch(`/api/article?id=${articleId}`, {
			method: 'GET',
			header: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((body) => {
				console.log(body);
				setPageData(body);
			});

    fetch('/api/latest',{
			method: 'GET',
			header: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}).then((res)=>{
      return res.json();
    }).then((body)=>{
      let cards = body.filter((card)=>{
        return card._id!= articleId
      })
      let finalSetofCards = cards
      if(cards.length>3)finalSetofCards = cards.slice(0,3);
      setlatestSideBar(finalSetofCards);
    })
	}, [articleId]);

	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={9}>
					<Box sx={{ margin: '1rem' }}>
						<Typography variant='h4' color='primary'>
							{pageData.article.title}
						</Typography>
					</Box>
					<CustomCard card={{imageLink:pageData.article.imageLink}}/>
					<Box sx={{ margin: '1rem' }}>
						<Typography variant='body1' color='primary'>
							{pageData.article.body}
						</Typography>
					</Box>
					<Box sx={{ margin: '1rem' }}>
						<Typography variant='h4' color='primary'>
							Comments
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-around',
							width: '100%',
							margin: '1rem',
						}}
					>
						<TextField
							sx={{ width: '90%' }}
							id='outlined-textarea'
							label='Leave a Comment...'
							multiline
							fullWidth
						/>
						<Button variant='contained' color='primary'>
							<SendRoundedIcon />
						</Button>
					</Box>
					<Box sx={{ margin: '1rem' }}>
						<Stack spacing={1}>
							{pageData.comments.map((comment) => {
								return (
									<Paper sx={{padding:'0.5rem'}}>
										<Typography variant='h6' color='primary'>{comment.user}</Typography>
										<Typography variant='body2' color='primary'>{comment.body}</Typography>
									</Paper>
								);
							})}
						</Stack>
					</Box>
				</Grid>
				<Grid item xs={0} sm={0} md={3}>
					<Box
						sx={{
							margin: '1rem',
							display: { xs: 'none', sm: 'none', md: 'inline-block' },
						}}
					>
						<Typography variant='h4' color='primary'>
							Latest
						</Typography>
						<Stack spacing={2}>
              {latestSideBar.map((latest)=>{
                return(
                  <CustomCard card = {latest}/>
                )
              })}
            </Stack>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};
