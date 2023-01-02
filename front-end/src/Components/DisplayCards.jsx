import React from 'react';
import { Grid } from '@mui/material';
import { CustomCard } from './CustomCard';

export const DisplayCards = (props) => {
	return (
		<>
			<Grid container spacing={2} marginTop={'1rem'}>
				{props.cards.map((card) => {
					return (
						<Grid item xs={12} sm={6} md={4}>
							<CustomCard card={card} />
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};
