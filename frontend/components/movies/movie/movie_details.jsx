import React from 'react';
import { 
  extractGenres,
  extractCompanies,
  extractNumber,
} from '../../../util/util';

const MovieDetails = ({details}) => {
  const {
    budget, genres, homepage, original_language,
    original_title, production_companies,
    revenue, runtime,status, tagline
  } = details;

  return (
    <div className='details w-hundred top-line flex-col'>
      <h3>Details</h3>
      <section className='flex-col'>
        <span>Movie Website: <span><a href={homepage} target='_blank'>{homepage}</a></span></span>
        <span>Original Title: <span>{original_title}</span></span>
        <span>Tagline: <span>{tagline}</span></span>
        <span>Original Language: <span>{original_language}</span></span>
        <span>Genres: <span>{extractGenres(genres)}</span></span>
        <span>Movie Status: <span>{status}</span></span>
        <span>Runtime: <span>{runtime} minutes</span></span>
        <span>Budget: <span>${extractNumber(budget)}</span></span>
        <span>Revenue: <span>${extractNumber(revenue)}</span></span>
        <span>Profit/Loss: <span>${extractNumber(revenue - budget)}</span></span>
        <h3 className='top-line'>Production Companies:</h3>
        <ul className='scroll-y'>
           {extractCompanies(production_companies)}
        </ul>
      </section>
    </div>
  );

}

export default MovieDetails;