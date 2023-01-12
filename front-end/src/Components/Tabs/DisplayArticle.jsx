import { Grid, Button, Stack, Chip, Avatar, Divider, Link } from '@mui/material';
import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { CustomCard } from '../CustomCard';
import { useContext } from 'react';
import { LoginModalContext } from '../../contexts';
import { useNavigate } from 'react-router-dom';

export const DisplayArticle = () => {
	const [stateToggler, setStateToggler] = useState(false);
	const openModal = useContext(LoginModalContext);
	const [commentBody, setCommentBody] = useState('');
	let { articleId } = useParams();
	const [pageData, setPageData] = useState({
		article: { title: '', body: '' },
		comments: []
	});
	const [latestSideBar, setlatestSideBar] = useState([]);
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
				setPageData(body);
			});

		fetch('/api/latest', {
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
				let cards = body.filter((card) => {
					return card._id != articleId;
				});
				let finalSetofCards = cards;
				if (cards.length > 3) finalSetofCards = cards.slice(0, 3);
				setlatestSideBar(finalSetofCards);
			});
	}, [articleId, stateToggler]);

	const handleSendComment = () => {
		fetch(`/api/article/comment?id=${articleId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ body: commentBody }),
		})
			.then((res) => {
				return res.json();
			})
			.then((body) => {
				if (!body.authenticated) {
					openModal.handleOpenLoginModal();
				}
				if (body.success) {
					setCommentBody('');
					setStateToggler(!stateToggler);
				}
			});
	};
	const navigate = useNavigate()
	const handleShowProfile = (userId) =>{
		navigate(`/showprofile/${userId}`)
	}

	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={9}>
					<Box sx={{ margin: '1rem' }}>
						<Typography variant='h4' color='primary'>
							{pageData.article.title}
						</Typography>
					</Box>
					<CustomCard card={{ imageLink: pageData.article.imageLink }} />
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
							value={commentBody}
							onChange={(e) => {
								setCommentBody(e.target.value);
							}}
						/>
						<Button
							variant='contained'
							color='primary'
							onClick={handleSendComment}
						>
							<SendRoundedIcon />
						</Button>
					</Box>
					<Box sx={{ margin: '1rem' }}>
						<Box>
							{pageData.comments.map((comment) => {
								return (
									
									<>

										<Grid container wrap='nowrap' spacing={2}>
											<Grid item>
												<Avatar>{comment.user[0].toUpperCase()}</Avatar>
											</Grid>
											<Grid justifyContent='left' item xs zeroMinWidth>
												<Typography
													variant='h6'
													sx={{
														margin: 0,
														textAlign: 'left',
														fontWeight: 'bold',
													}}
												>
													<Link sx={{ cursor: 'pointer' }} onClick={()=>{handleShowProfile(comment.userId)}}>{comment.user}</Link>
												</Typography>
												<Typography variant='body1' sx={{ textAlign: 'left' }}>
													{comment.body}
												</Typography>
												<Typography variant='body2' sx={{ textAlign: 'left', marginTop:'10px' }}>
													posted {comment.date} ago.
												</Typography>
											</Grid>
										</Grid>
										<Divider variant='fullWidth' sx={{ margin: '30px 0' }} />
									</>
								);
							})}
						</Box>
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
							{latestSideBar.map((latest) => {
								return <CustomCard card={latest} />;
							})}
						</Stack>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};
