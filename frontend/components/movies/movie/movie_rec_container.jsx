import React from 'react';
import { connect } from 'react-redux';
// import Loading from '../../loading/loading';

import Carousel from 'react-bootstrap/Carousel';

import {
  getRecommended,
} from '../../../actions/movies_action';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


class MovieRecs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieIdx: 0,
    }

    this.getCaros = this.getCaros.bind(this);
    this.getRecMovie = this.getRecMovie.bind(this);
    this.createRecImg = this.createRecImg.bind(this);
  }

  componentDidMount() {
    this.props.getRecommended(this.props.id);
  }

  getRecMovie(id) {
    const {
      title,
      release_date,
      vote_average,
      poster_path
    } = this.props.recommended[this.state.movieIdx];
    return (
      <div>
          {title}
          <br></br>
          Released: {release_date}
          <br></br>
          Score: {vote_average} <FontAwesomeIcon className='imdb-yellow' icon={faStar}/>
          <br></br>
          <img 
            alt={`${title}`}
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
          />
      </div>
    );
  }

  createRecImg(url, title, i) {
    if (!url) return (<img alt='404' src={window.fourofour}/>);

    if (this.state.movieIdx !== i) {
      return (
        <img key={i}
          className='rec-poster'
          alt={`${title}${i}`}
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${url}`}
        />
      );
    } else {
      return (
        <img key={i}
          className='rec-poster myActive'
          alt={`${title}${i}`}
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${url}`}
        />
      );
    }
  }

  getCaros() {
    const recs = this.props.recommended;
    const caroItems = [];
    let temp = [];
    for (let i = 0; i < recs.length; i++) {
      const pUrl = recs[i].poster_path;
      const title = recs[i].title;

      temp.push(this.createRecImg(pUrl, title, i));
      
      if (temp.length > 3) {
        caroItems.push(
          <Carousel.Item key={i}>
            {temp}
          </Carousel.Item>
        );
        temp = [];
      }
    }

    if (temp.length > 0) {
      caroItems.push(
        <Carousel.Item key={i}>
          {temp}
        </Carousel.Item>
      );
    }
    return caroItems;
  }

  render() {
    if (this.props.recommended.length < 1) return null;
    return (
      <div className='recommendations'>
        <h3>Recommendations</h3>

        <div>
          <Carousel interval={null}>
            {this.getCaros()}
          </Carousel>
          
          <div className='rec-movie'>
            {this.getRecMovie(this.state.movieIdx)}
            <button>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

const MSTP = (state, ownProps) => ({
  recommended: state.entities.movies.movie.recommended,
});

const MDTP = (dispatch, ownProps) => ({
  getRecommended: (id) => dispatch(getRecommended(id)),
});

export default connect(
  MSTP,
  MDTP
)(MovieRecs);