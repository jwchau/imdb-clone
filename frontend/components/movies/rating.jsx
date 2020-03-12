import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { Route, Switch } from 'react-router-dom';


class Rating extends React.Component {
  constructor(props){
    super(props);

    // this.makeStars = this.makeStars.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.currentTarget.classList.add("checked");
    const rating = {
      score: parseInt(e.currentTarget.id),
      user_id: 1,
      movie_id: 1,
    };
    this.props.postRating(rating);
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