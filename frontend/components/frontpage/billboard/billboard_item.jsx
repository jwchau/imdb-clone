import React from 'react';

export default ({movie}) => {

  return (
    <div className='billboard-item slide mySlides fade'>
      <img src={movie.posterUrl} alt={movie.title}></img>
      <video className='trailer' controls>
        {/* <source src={movie.posterUrl} type="video/mp4"/> */}
        <source src={movie.trailerUrl} type="video/mp4"/>
      </video>
    </div>
  );
}