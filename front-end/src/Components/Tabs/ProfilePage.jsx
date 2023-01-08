import React from 'react';
import {
	Paper,
	Grid,
	Box,
	Typography,
	Stack,
	IconButton,
	Avatar,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { EditProfileModal } from '../EditProfileModal';
import { useState,useEffect } from 'react';

export const ProfilePage = () => {

	const [openEditModal, setOpenEditModal] = useState(false);
	const [userInfo, setUserInfo] = useState({name:'',profileImage:'',about:''})
	const handleOpenEditModal = ()=>{
		setOpenEditModal(true);
	}
	const handleCloseEditModal = ()=>{
		setOpenEditModal(false);
	}
	useEffect(() => {
		fetch('/api/userprofile',{
			method:'GET',
			headers:{
				'Content-Type': 'application/json',
			}
		}).then((res)=>{
			return res.json();
		}).then((body)=>{
			setUserInfo(body)
		})
	}, [])
	
	
	return (
		<>
			<EditProfileModal modal={{openEditModal,handleOpenEditModal,handleCloseEditModal}}/>
			<Paper
				sx={{
					margin: '1rem',
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
				}}
			>
				<Grid container spacing={3} padding='1rem'>
					<Grid item xs={12} sm={6} md={4}>
						<Box
							component={'div'}
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
								alignSelf: 'center',
								justifySelf: 'center',
							}}
						>
							<Avatar
								src={userInfo.profileImage}
								variant='rounded'
								sx={{ height: '100%', width: '100%' }}
							></Avatar>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={7}>
						<Box
							sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
						>
							<Typography variant='h5' fontWeight='bold'>
								{userInfo.name}
							</Typography>
							<Typography variant='body2'>
								{userInfo.about}
							</Typography>

							<Stack
								direction='row'
								spacing={4}
								sx={{
									justifySelf: 'center',
									alignSelf: 'center',
									margin: '2rem',
									background: '#efefef',
									padding: '1rem',
									borderRadius: '8px',
								}}
							>
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
					<Grid item xs={1}>
						<IconButton onClick={()=>{handleOpenEditModal()}}>
							<EditIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};
