import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts';
import { Navigate } from 'react-router-dom';
import { LoginModalContext } from '../contexts';

export const RequiredAuth = ({ children }) => {
	const auth = useContext(AuthContext);
	const openLoginModal = useContext(LoginModalContext);
	if (auth.loggedIn===false) {
		
		openLoginModal.handleOpenLoginModal();
		return <Navigate to='/' />;
	}
	return children;
};
