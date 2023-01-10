import React from 'react';
import { CustomCard } from '../CustomCard';
import { DisplayCards } from '../DisplayCards';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
export const Home = () => {
	const [Cards, setCards] = useState([]);

	useEffect(() => {
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
				setCards(body);
			});
	}, []);

	return (
		<>
			{Cards.length !== 0 && (
				<Box sx={{ margin: '1rem' }}>
					<CustomCard card={Cards[0]} />
					<DisplayCards
						cards={Cards.filter((ele, idx) => {
							return idx !== 0;
						})}
					/>
				</Box>
			)}
		</>
	);
};
