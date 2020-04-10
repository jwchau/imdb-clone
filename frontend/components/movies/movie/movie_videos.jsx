import React from 'react';

const extractVideos = arr => {
  return arr.map(ele => (
    <li>
      <iframe
        src={`https://www.youtube.com/embed/${ele.key}`} frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </li>
  ));
};

const MovieVideos = (props) => {
  if (props.videos.length < 1) return null;
  return (
    <div className='videos'>
      <h3>Videos</h3>
      <ul className='video-list'>
        {extractVideos(props.videos)}
      </ul>
    </div>
  );

}

export default MovieVideos;