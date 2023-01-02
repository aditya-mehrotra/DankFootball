import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, SpeedDialIcon } from '@mui/material';

export const WriteButton = () => {
	const navigate = useNavigate();
	const handleWrite = () => {
		navigate('/writearticle');
	};
	return (
		<Button
			onClick={handleWrite}
			variant='contained'
			size='large'
			color='primary'
			sx={{
				position: 'fixed',
				bottom: { xs: 16, sm: 32, md: 50 },
				right: { xs: 16, sm: 32, md: 50 },
			}}
			startIcon={<SpeedDialIcon />}
		>
			Write an Article
		</Button>
	);
};
