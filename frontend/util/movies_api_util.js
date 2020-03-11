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