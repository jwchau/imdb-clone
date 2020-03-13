import React from 'react';
import {Link} from 'react-router-dom';

export default ({movie}) => {

  return (
    <div className='billboard-item slide mySlides fade'>
      <Link movie={movie} to={`/movies/${movie.id}`}>
        <img src={movie.posterUrl} alt={movie.title}></img>
      </Link>
      <video className='trailer' controls autoPlay='autoplay' muted>
        <source src={movie.trailerUrl} type="video/mp4"/>
      </video>
    </div>
  );
}