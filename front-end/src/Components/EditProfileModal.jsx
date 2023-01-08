import React from 'react';
import {
	Modal,
	Box,
	Typography,
	TextField,
	Avatar,
	Button,
	IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const EditProfileModal = (props) => {
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		width: 500,
		transform: 'translate(-50%, -50%)',
		bgcolor: 'background.paper',
		borderRadius: '5px',
		boxShadow: 24,
		p: 4,
	};
	return (
		<>
			<Modal
				open={props.modal.openEditModal}
				onClose={props.modal.handleCloseEditModal}
			>
				<Box sx={style}>
					<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
						<IconButton
							onClick={() => {
								props.modal.handleCloseEditModal();
							}}
						>
							<CloseIcon />
						</IconButton>
					</Box>
					<Box
						sx={{
							mx: 'auto', // margin left & right
							my: 4, // margin top & botom
							py: 3, // padding top & bottom
							px: 2, // padding left & right
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
							borderRadius: 'sm',
							boxShadow: 'md',
						}}

						component='form' action='/api/editprofile' method="POST" encType="multipart/form-data"
					>
						<Box>
							<Typography component={'h1'} fontWeight='bold'>
								Edit Profile
							</Typography>
						</Box>
						<Button component='label' sx={{ width: 'unset' }}>
							<Avatar></Avatar>
							<input type='file' name='profileImage' accept='image/*' hidden />
						</Button>
						<TextField name='firstName' label='First Name' />
						<TextField name='lastName' label='Last Name' />
						<TextField name='about' label='About You' multiline rows={5} />
						<Button
							variant='outlined'
							sx={{ alignSelf: 'flex-end' }}
							color='primary'
							type='submit'
							onClick={()=>{props.modal.handleCloseEditModal();}}
						>
							Save Changes
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
