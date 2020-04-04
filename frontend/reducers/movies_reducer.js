import {
  RECEIVE_ALL_MOVIES,
  RECEIVE_MOVIE,
} from '../actions/movies_action';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return convertMovies(action.movies.results);
      // return action.movies;
    case RECEIVE_MOVIE:
      return merge({}, state, {movie: action.payload.movie});
    default:
      return state;
  }
};

//https://www.youtube.com/embed/jKCj3XuPG8M
//https://image.tmdb.org/t/p/w600_and_h900_bestv2/${img_url}

const convertMovies = (movies) => {
  const cut = (str) => {
    return str.slice(0, 5).to_i;
  }
  const res = {};
  for (let i = 0; i < movies.length; i++) {
    const data = movies[i];
    const movie = {
      id: data.id,
      title: data.title,
      year: cut(data.release_date),
      score: data.vote_average,
      posterUrl: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`,
      trailerUrl: 'https://www.youtube.com/embed/jKCj3XuPG8M',
    };
    res[data.id] = movie;
  }


  return res;
}