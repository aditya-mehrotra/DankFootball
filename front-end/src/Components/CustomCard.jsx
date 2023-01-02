import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const CustomCard = (props)=> {
  return (
    
    <Card >
      <CardActionArea>
        {props.card.imageLink&&<CardMedia
          component="img"
          height="140"
          image={props.card.imageLink}
        />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.card.title && props.card.title.length>20?props.card.title.slice(0,20):props.card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.card.body && props.card.body.length>40?props.card.body.slice(0,40):props.card.body}
            ...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Article
        </Button>
      </CardActions>
    </Card>
  );
}