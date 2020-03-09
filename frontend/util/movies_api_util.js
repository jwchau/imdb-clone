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

