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
    this.carouselItems = this.carouselItems.bind(this);
    this.setMovies = this.setMovies.bind(this);
  };

  componentDidMount() {
    this.props.fetch();
  }

  setMovies() {
    if (this.props.name.toLowerCase() === 'popular') {
      this.movies = Object.values(this.props.movies.popular);
    } else if (this.props.name.toLowerCase() === 'toprated') {
      this.movies = Object.values(this.props.movies.toprated);
    } else if (this.props.name.toLowerCase() === 'upcoming') {
      this.movies = Object.values(this.props.movies.upcoming);
    }
  }

  carouselItems() {
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
    const type = this.props.name.toLowerCase();
    if (this.props.movies[type] === undefined) return <Loading />;
    this.setMovies();
    const caros = this.carouselItems();
    return (
      <div className='billboard'>
        <h1>{this.props.name}</h1>
        <Carousel interval={10000}>
          {caros}
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
