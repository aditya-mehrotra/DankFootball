import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from './Components/Header';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { useState, useEffect } from 'react';
import { Home } from './Components/Tabs/Home';
import { AuthContext, LoginModalContext } from './contexts';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RequiredAuth } from './Components/RequiredAuth';
import { WriteArticle } from './Components/Tabs/WriteArticle';
import { WriteButton } from './Components/WriteButton';
import { ProfilePage } from './Components/Tabs/ProfilePage';
import { DisplayArticle } from './Components/Tabs/DisplayArticle';

function App() {
	const [loggedIn, setLoggedIn] = useState(undefined);
	const [openLoginModal, setOpenLoginModal] = useState(false);
	const [avatarName, setAvatarName] = useState('');

	const handleLogIn = (name) => {
		setLoggedIn(true);
		setAvatarName(name);
	};
	const handleLogOut = () => {
		setLoggedIn(false);
	};

	const handleOpenLoginModal = () => {
		setOpenLoginModal(true);
	};
	const handleCloseLoginModal = () => {
		setOpenLoginModal(false);
	};

	useEffect(() => {
		fetch('/api/isauth')
			.then((res) => {
				return res.json();
			})
			.then((body) => {
				if (body.authenticated) {
					handleLogIn(body.avatarName);
				} else {
					handleLogOut();
				}
			});
	}, []);

	return (
		<>
			<AuthContext.Provider
				value={{
					avatarName: avatarName,
					loggedIn: loggedIn,
					handleLogIn: handleLogIn,
					handleLogOut: handleLogOut,
				}}
			>
				<LoginModalContext.Provider
					value={{
						openLoginModal,
						handleOpenLoginModal,
						handleCloseLoginModal,
					}}
				>
					<CssBaseline />
					<ThemeProvider theme={theme}>
						<Router>
							<Header />
							<Routes>
								<Route
									path='/'
									element={
										<>
											<Container>
												<Home />
											</Container>
											<WriteButton />
										</>
									}
								/>
								<Route
									path='/writearticle'
									element={
										<RequiredAuth>
											<Container>
												<WriteArticle />
											</Container>
										</RequiredAuth>
									}
								/>
								<Route
									path='/myprofile'
									element={
										<RequiredAuth>
											<Container>
												<ProfilePage />
											</Container>
										</RequiredAuth>
									}
								/>
								<Route
									path='/article/:articleId'
									element={
										<Container>
											<DisplayArticle />
										</Container>
									}
								/>
							</Routes>
						</Router>
					</ThemeProvider>
				</LoginModalContext.Provider>
			</AuthContext.Provider>
		</>
	);
}

export default App;
