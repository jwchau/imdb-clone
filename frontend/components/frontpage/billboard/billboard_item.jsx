import React from 'react';

export default ({movie}) => {


  return (
    <div className='billboard-item problem-box slide mySlides fade'>
      <img src={movie.posterUrl} alt={movie.title}></img>
      <video controls>
        <source src={movie.trailerUrl} type="video/mp4"/>
      </video>
    </div>
  );
}