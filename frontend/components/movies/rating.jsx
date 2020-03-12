import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { Route, Switch } from 'react-router-dom';


class Rating extends React.Component {
  constructor(props){
    super(props);

    // this.makeStars = this.makeStars.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {star: 0};
  }

  componentDidMount() {
    let rating = this.props.userRating;
    if (rating !== undefined && rating.score !== null) {
      this.setState({star: 10 - this.props.userRating.score});
    }
  }

  componentDidUpdate() {
    this.clearChecked();
    const stars = document.getElementsByClassName('faStar');
    stars[this.state.star + 1].classList.add('checked');
  }

  clearChecked() {
    const stars = document.getElementsByClassName('faStar');
    for (let i = 0; i < 10; i++) {
      const star = stars[i];
      star.classList.remove('checked');
    }
  }

  handleClick(e) {
    if (this.props.userRating === undefined) {
      const rating = {
        score: parseInt(e.currentTarget.id),
        user_id: this.props.userId,
        movie_id: this.props.movieId,
        // id: this.props.id,
      };
      this.props.postRating(rating);
    } else {
      const rating = {
        score: parseInt(e.currentTarget.id),
        user_id: this.props.userRating.userId,
        movie_id: this.props.userRating.movieId,
        id: this.props.userRating.id,
      };
      this.props.editRating(rating);
    }

    this.setState({star: 10 - parseInt(e.currentTarget.id)});
  }

  makeStars() {
    const stars = [];
    for (let i = 10; i > 0; i--) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          id={i}
          className='faStar'
          icon={faStar}
          onClick={this.handleClick}/>
      );
    }
    return stars;
  }

  render() {

    return (
      <div className='user-rating'>
        {this.makeStars()}
      </div>
    );
  }

};

export default Rating;