import React from "react";
import { CardContent, CardMedia, Typography, Button, CardActions, Card } from "@material-ui/core";
import{ BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../card/card.css';

function CardView(props) {
  const { movie } = props;
  return (
    <div class="container">
        <Card sx={{ maxWidth: 345 }} className="card">
            <CardMedia className="card-media"
                component="img"
                height="140"
                image={movie.Poster}
                alt="green iguana"
            />
             <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="div" class="card-title">{movie.Title}</Typography>                        
            </CardContent>
            <CardActions className="card-btn-section">
              <Link className="link-btn" to={`/details/${movie.imdbID}`}><Button size="small">View Details</Button></Link>
            </CardActions>
        </Card>
    </div>
  );
}
export default CardView;