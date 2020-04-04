export const fetchMoviesAPI = () => {
  let key = "f850a0ee7a817202212394a72e760dfa";
  return $.ajax({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
  });
}

export const fetchMovies = () => (
  $.ajax({
    method: 'GET',
    url: '/api/movies',
  })
);

export const getMovie = movieId => (
  $.ajax({
    method: 'GET',
    url: `/api/movies/${movieId}`,
  })
);

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