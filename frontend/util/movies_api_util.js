export const fetchMovies = () => (
  $.ajax({
    method: 'GET',
    url: '/api/movies',
  })
);
export const getMovie = movie => (
  $.ajax({
    method: 'GET',
    url: '/api/movies',
    data: {movie}
  })
);

