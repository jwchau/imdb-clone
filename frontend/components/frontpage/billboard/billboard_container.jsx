import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

//billboard components
import BillboardItem from './billboard_item';
import Loading from '../../loading/loading';
import Carousel from 'react-bootstrap/Carousel'

class Billboard extends Component {
  constructor(props) {
    super(props);

    this.movies = [];
    this.movieItems = this.movieItems.bind(this);
    this.setMovies = this.setMovies.bind(this);
    };

  componentDidMount() {

  }

  setMovies() {
    if (this.props.name.toLowerCase() === 'popular') {
      this.movies = Object.values(this.props.movies.popular);
    } else if (this.props.name.toLowerCase() === 'top rated') {
      this.movies = Object.values(this.props.movies.topRated);
    } else if (this.props.name.toLowerCase() === 'upcoming') {
      this.movies = Object.values(this.props.movies.upcoming);
    }
  }

  movieItems() {
    const caroItems = [];
    for (let i = 0; i < this.movies.length; i++) {
      const movie = this.movies[i];
      caroItems.push(
        <Carousel.Item key={i}>
          <BillboardItem key={movie.id} movie={movie}/>
        </Carousel.Item>
      );
    }
    return caroItems;
  }

  render() {
    if (Object.values(this.props.movies).length < 3) return <Loading />;
    this.setMovies();
    const temp = this.movieItems();
    return (
      <div className='billboard'>
        <h1>{this.props.name}</h1>
        <Carousel interval={10000}>
          {temp}
        </Carousel>
      </div>

    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  movies: state.entities.movies,
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Billboard);
