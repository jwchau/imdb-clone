import React from 'react';
let TMDB_KEY = require('../../config/keys').TMDB_KEY;
if (process.env.NODE_ENV === 'production') {
  TMDB_KEY = process.env.REACT_APP_TMDB_KEY
}

const cut = (str) => {
  if (!str) {
    return 'N/A';
  }
  return str.slice(0, 4);
}

export const shuffle = (a) => {
  a.forEach( (el, i) => {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  });
  return a;
};

export const searchAll = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/movies',
    data: {query}
  });
};

export const searchTMDB = (query) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&page=1&include_adult=false`,
    data: {query}
  });
};

export const convertMovies = (movies) => {
  const res = {};
  for (let i = 0; i < movies.length; i++) {
    const data = movies[i];

    let pUrl = window.fourofour;
    if (data.poster_path)
      pUrl = `https://image.tmdb.org/t/p/original${data.poster_path}`;
      

    const movie = {
      id: data.id,
      title: data.title,
      year: cut(data.release_date),
      score: data.vote_average,
      posterUrl: pUrl,
      trailerUrl: pUrl
      // trailerUrl: 'https://www.youtube.com/embed/jKCj3XuPG8M',
    };
    res[data.id] = movie;
  }

  return res;
}

export const extractDetails = data => {
  let pUrl = window.fourofour;
  if (data.poster_path)
    pUrl = `https://image.tmdb.org/t/p/original${data.poster_path}`;

  const details = {
    title: data.title,
    year: cut(data.release_date),
    score: data.vote_average,
    votes: data.vote_count,
    overview: data.overview,
    posterUrl: pUrl,
    videos: data.videos
  };
  
  return details;
}

export const extractGenres = (genres) => {
  const res = [];
  for (let i = 0; i < genres.length; i++) {
    const g = genres[i];
    res.push(g.name + ", ");
  }
  return res;
}

export const extractCompanies = (comps) => {
  return comps.map((comp, i) => {
    const {name, logo_path, origin_country} = comp;
    return (
     <div key={i} className='company flex spaceb-center'>
       <div className='image-backer'>
         <img className='tile-100' src={sourcePicture(logo_path)} alt={name}></img>
        </div>
       <p>{name} from {origin_country}</p>
     </div> 
    );
  });
}

// from stackoverflow
// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export const extractNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// credits to Thoriq Firdaus at 
// https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos--cms-26743
// for lazy load youtube embeds
export const loadYoutube = () => {
  const youtube = document.querySelectorAll(".youtube");
  for (let i = 0; i < youtube.length; i++) {

    let source = window.noTrailer;
    if (youtube[i].dataset.embed)
      source = "https://i3.ytimg.com/vi/"+ youtube[i].dataset.embed +"/hqdefault.jpg";
    const image = new Image();
    const playButton = document.createElement("div");
    playButton.className = 'play-button';
    image.src = source;
    image.addEventListener("load", function() {
      youtube[i].innerHTML = '';  
      youtube[i].appendChild(image);
      youtube[i].appendChild(playButton);
    }(i));

    youtube[i].addEventListener("click", function() {
      let iframe = document.createElement( "iframe");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1");
        this.innerHTML = "";
        this.appendChild(iframe);
    });
  }
}

export const sourcePicture = str => {
  if (str === null || str === undefined) return window.fourofour;
  return `https://image.tmdb.org/t/p/original${str}`;
}