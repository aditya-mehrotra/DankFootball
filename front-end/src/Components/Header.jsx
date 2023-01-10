import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, MenuItem, Menu, ListItemIcon } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, ListItemText } from '@mui/material';
import { SocialMedia } from './SocialMedia';
import { useState, useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import { LoginSinupModal } from './LoginSinupModal';
import { AuthContext, LoginModalContext } from '../contexts';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	}));

	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));
	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	}));

	const auth = useContext(AuthContext);
	const openLoginModal = useContext(LoginModalContext);

	const handleLogoutHeader = () => {
		auth.handleLogOut();
		fetch('/api/logout', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	const navigate = useNavigate();
	const handleNavigate = ()=>{
		navigate('/myprofile')
	}

	const [avatarMenue, setAvatarMenue] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const handleOpenAvatarMenue = (event) => {
		setAvatarMenue(true);
		setAnchorEl(event.currentTarget);
	};
	const handleCloseAvatarMenue = () => {
		setAvatarMenue(false);
	};

	return (
		<>
			<LoginSinupModal />
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<Box onClick={()=>{navigate('/')}} sx={{ flexGrow: 1, display: 'inline-block' ,cursor:'pointer'}}>
							<Typography variant='h6'>Dank Football</Typography>
						</Box>
						<Box
							sx={{ display: { xs: 'none', sm: 'none', md: 'inline-block' } }}
						>
							<SocialMedia color='secondary' />
						</Box>
						<Box margin={'1rem '}>
							<Search>
								<SearchIconWrapper>
									<SearchIcon />
								</SearchIconWrapper>
								<StyledInputBase
									placeholder='Search…'
									inputProps={{ 'aria-label': 'search' }}
								/>
							</Search>
						</Box>
						{!auth.loggedIn && (
							<Box>
								<Button
									variant='contained'
									color='secondary'
									onClick={openLoginModal.handleOpenLoginModal}
								>
									Login/Signup
								</Button>
							</Box>
						)}
						{auth.loggedIn && (
							<>
								<Box onClick={handleOpenAvatarMenue}>
									<Avatar>{auth.avatarName}</Avatar>
								</Box>
								<Menu
									anchorEl={anchorEl}
									open={avatarMenue}
									onClose={handleCloseAvatarMenue}
								>
									<MenuItem
										onClick={() => {
											handleCloseAvatarMenue();
											handleNavigate();
										}}
									>
										<ListItemIcon>
											<AccountCircleIcon />
										</ListItemIcon>
										<ListItemText>Profile</ListItemText>
									</MenuItem>
									<MenuItem
										onClick={() => {
											handleCloseAvatarMenue();
											handleLogoutHeader();
										}}
									>
										<ListItemIcon>
											<LogoutIcon />
										</ListItemIcon>
										<ListItemText>Logout</ListItemText>
									</MenuItem>
								</Menu>
							</>
						)}
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};
