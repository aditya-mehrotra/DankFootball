import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const CustomCard = (props)=> {
  const navigate = useNavigate()
  const handleOpenArticle = ()=>{
    navigate(`/article/${props.card._id}`)
  }

  return (
    <Card >
      <CardActionArea>
        {props.card.imageLink&&<CardMedia
          component="img"
          height="140"
          image={props.card.imageLink}
        />}
        {(props.card.title||props.card.body)&&<CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { props.card.title.length>20?props.card.title.slice(0,20):props.card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.card.body.length>40?props.card.body.slice(0,40):props.card.body}
            ...
          </Typography>
        </CardContent>}
      </CardActionArea>
      <CardActions>
        {(props.card.title||props.card.body)&&<Button size="small" color="primary" onClick={handleOpenArticle}>
          View Article
        </Button>}
      </CardActions>
    </Card>
  );
}