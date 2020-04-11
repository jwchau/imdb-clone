import React from 'react';
import { connect } from 'react-redux';
// import Loading from '../../loading/loading';
import { Link } from 'react-router-dom';
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
    this.handleImgClick = this.handleImgClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    this.props.getRecommended(this.props.id);
  }

  getRecMovie() {
    const {
      id,
      title,
      release_date,
      vote_average,
      poster_path
    } = this.props.recommended[this.state.movieIdx];
    return (
      <div>
          <Link to={`/movies/${id}`}>{title}</Link>
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

  handleNext(e) {
    e.preventDefault();

    if (this.state.movieIdx + 1 < this.props.recommended.length) {
      this.setState({movieIdx: this.state.movieIdx + 1});
    } else {
      this.setState({movieIdx: 0});
    }
  }

  handleImgClick(e) {
    e.preventDefault();
    return;
    this.setState({movieIdx: 0});
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
            {this.getRecMovie()}
            <button onClick={this.handleNext}>Next</button>
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