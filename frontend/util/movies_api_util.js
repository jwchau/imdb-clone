const TMDB_KEY = "f850a0ee7a817202212394a72e760dfa";

export const fetchUpcoming = () => {
  return $.ajax({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_KEY}&language=en-US&page=1`
  });
}

export const fetchNowPlaying = () => {
  return $.ajax({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_KEY}&language=en-US&page=1`
  });
}

export const fetchPopular = () => {
  return $.ajax({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`
  });
}

export const fetchTopRated = () => {
  return $.ajax({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&language=en-US&page=1`
  });
}

export const fetchMovies = () => (
  $.ajax({
    method: 'GET',
    url: '/api/movies',
  })
);

export const getDetails = movieId => (
  $.ajax({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_KEY}&language=en-US`,
  })
);

export const getPictures = movieId => (
  $.ajax({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${TMDB_KEY}&language=en-US`,
  })
);

export const getVideos = movieId => (
  $.ajax({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_KEY}&language=en-US`,
  })
);

export const getUsers = movieId => {
  return $.ajax({
    method: 'GET',
    url: `/api/movies/${movieId}/users`,
  });
};

export const getRatings = movieId => {
  return $.ajax({
    method: 'GET',
    url: `/api/movies/${movieId}/ratings`,
  });
};

export const getReviews = movieId => {
  return $.ajax({
    method: 'GET',
    url: `/api/movies/${movieId}/reviews`,
  });
};

export const postReview = review => {
  return $.ajax({
    method: 'POST',
    url: `/api/movies/${review.movieId}/reviews`,
    data: {review},
  });
};

export const patchReview = review => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: { review },
  });
};

export const removeReview = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`,
  });
};

export const postRating = rating => {
  return $.ajax({
    method: 'POST',
    url: `/api/movies/${rating.movieId}/ratings`,
    data: {rating}
  });
};

export const patchRating = (rating) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/ratings/${rating.id}`,
    data: { rating }
  });
};