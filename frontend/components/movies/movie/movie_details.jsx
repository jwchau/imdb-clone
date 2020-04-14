import React from 'react';
import { 
  extractGenres,

} from '../../../util/util';

const MovieDetails = ({details}) => {
  const {
    budget, genres, homepage, original_language,
    original_title, production_companies, production_countries,
    revenue, runtime, spoken_languages, status, tagline
  } = details;

  return (
    <div className='details flex-column start-center'>
      <h3>Details</h3>
      <section className='flex-column'>
        <p>Movie Website: {homepage}</p>
        <p>Original Title: {original_title}</p>
        <p>Tagline: {tagline}</p>
        <p>Original Language: {original_language}</p>
        <p>Spoken Languages: {spoken_languages}</p>
        <p>Genres: {extractGenres(genres)}</p>
        <p>Movie Status: {status}</p>
        <p>Runtime: {runtime}</p>
        <p>Budget: {budget}</p>
        <p>Revenue: {revenue}</p>
        <div>Production Companies: {extractCompanies(production_companies)}</div>
        <div>Production Countries: {extractCountries(production_countries)}</div>
      </section>
    </div>
  );

}

export default MovieDetails;