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
        {(valid(homepage)) ? <span>Movie Website: <span><a href={homepage} target='_blank'>{homepage}</a></span></span> : null}
        {(valid(original_title)) ? <span>Original Title: <span>{original_title}</span></span> : null}
        {(valid(tagline)) ? <span>Tagline: <span>{tagline}</span></span> : null}
        {(valid(original_language)) ? <span>Original Language: <span>{original_language}</span></span> : null}
        {(valid(genres)) ? <span>Genres: <span>{extractGenres(genres)}</span></span> : null}
        {(valid(status)) ? <span>Movie Status: <span>{status}</span></span> : null}
        {(valid(runtime)) ? <span>Runtime: <span>{runtime} minutes</span></span> : null}
        {(valid(budget)) ? <span>Budget: <span>${extractNumber(budget)}</span></span> : null}
        {(valid(revenue)) ? <span>Revenue: <span>${extractNumber(revenue)}</span></span> : null}
        {(valid(revenue - budget)) ? <span>Profit/Loss: <span>${extractNumber(revenue - budget)}</span></span> : null}
        <h3 className='top-line'>Production Companies:</h3>
        <ul className='scroll-y'>
           {extractCompanies(production_companies)}
        </ul>
      </section>
    </div>
  );

}

const valid = (str) => {
  if (str !== null && str !== "" && str !== 0) return true;
  return false;
}

export default MovieDetails;