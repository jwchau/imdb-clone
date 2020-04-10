const TMDB_KEY = "f850a0ee7a817202212394a72e760dfa";

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

//https://www.youtube.com/embed/jKCj3XuPG8M
//https://image.tmdb.org/t/p/w600_and_h900_bestv2/${img_url}

export const convertMovies = (movies) => {
  const res = {};
  for (let i = 0; i < movies.length; i++) {
    const data = movies[i];

    let pUrl = window.fourofour;
    if (data.poster_path)
      pUrl = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;
      

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
    pUrl = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;

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