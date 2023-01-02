import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from './Components/Header';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { useState, useEffect } from 'react';
import { LatestTab } from './Components/Tabs/LatestTab';
import { TopTab } from './Components/Tabs/TopTab';
import { TransfersTab } from './Components/Tabs/TransfersTab';
import { MatchesTab } from './Components/Tabs/MatchesTab';
import { ContactUsTab } from './Components/Tabs/ContactUsTab';
import { AboutTab } from './Components/Tabs/AboutTab';
import { AuthContext, LoginModalContext } from './contexts';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RequiredAuth } from './Components/RequiredAuth';
import { WriteArticle } from './Components/Tabs/WriteArticle';
import { WriteButton } from './Components/WriteButton';

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

	const [tabSelected, settabSelected] = useState(0);
	const tabValues = (val) => {
		settabSelected(val);
	};
	
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
							<Header tabValues={tabValues} />
							<Routes>
								<Route
									path='/'
									element={
										<>
											<Container>
												{tabSelected === 0 && <LatestTab  />}
												{tabSelected === 1 && <TopTab />}
												{tabSelected === 2 && <TransfersTab />}
												{tabSelected === 3 && <MatchesTab />}
												{tabSelected === 4 && <ContactUsTab />}
												{tabSelected === 5 && <AboutTab />}
											</Container>
											<WriteButton />
										</>
									}
								/>
								<Route
									path='writearticle'
									element={
										<RequiredAuth>
											<Container>
												<WriteArticle />
											</Container>
										</RequiredAuth>
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
