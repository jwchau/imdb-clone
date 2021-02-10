let TMDB_KEY = null

const upcoming = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/tmdb`,
    data: {
      'query': 'upcoming',
      'type': 'movie'
    },
  })
}

const nowPlaying = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/tmdb`,
    data: {
      'query': 'now_playing',
      'type': 'movie'
    },
  })
}

const popularMovie = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/tmdb`,
    data: {
      'query': 'popular',
      'type': 'movie'
    },
  })
}

const popularPeople = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/tmdb`,
    data: {
      'query': 'popular',
      'type': 'person'
    },
  })
}

const topRated = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/tmdb`,
    data: {
      'query': 'top_rated',
      'type': 'movie'
    },
  })
}

export const fetchUpcoming = () => {
  return upcoming()
}

export const fetchNowPlaying = () => {
  return nowPlaying()
}

export const fetchPopular = () => {
  return popularMovie()
}

export const fetchPopularPeople = () => {
  return popularPeople()
}

export const fetchTopRated = () => {
  return topRated()
}

export const fetchMovies = () => (
  $.ajax({
    method: 'GET',
    url: '/api/movies',
  })
);

const people = query => (
  $.ajax({
    method: 'GET',
    url: `/api/tmdb/search`,
    data: {
      'query': query,
      'type': 'person'
    },
  })
)
export const searchPeople = query => people(query)


const details = (id, type, option = '', lang = '') => (
  $.ajax({
    method: 'GET',
    url: `/api/tmdb/details`,
    data: {
      id,
      type,
      option,
      lang,
    }
  })
)

export const getCreditsPerson = personId => details(personId, 'person', 'movie_credits', 'en-US')
export const getImagesPerson = personId => details(personId, 'person', 'images', 'en-US')
export const getDetailsPerson = personId => details(personId, 'person')
export const getDetails = movieId => details(movieId, 'movie', null, 'en-US')
export const getPictures = movieId => details(movieId, 'movie', 'images')
export const getVideos = movieId => details(movieId, 'movie', 'videos', 'en%2Cnull')
export const getCredits = movieId => details(movieId, 'movie', 'credits')
export const getRecommended = movieId => details(movieId, 'movie', 'recommendations', 'en-US')

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