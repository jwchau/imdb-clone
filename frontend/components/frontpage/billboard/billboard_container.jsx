import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

//billboard components
import BillboardItem from './billboard_item';
import Loading from '../../loading/loading';
import Carousel from 'react-bootstrap/Carousel'

class Billboard extends Component {
  constructor(props) {
    super(props);

    this.movieItems = this.movieItems.bind(this);
    };

  componentDidMount() {
    this.props.fetchMoviesType();
  }

  movieItems() {
    const caroItems = [];
    for (let i = 0; i < this.props.movies.length; i++) {
      const movie = this.props.movies[i];
      caroItems.push(
        <Carousel.Item key={i}>
          <BillboardItem key={movie.id} movie={movie}/>
          {/* <Carousel.Caption>
            <h3>movie derp derp</h3>
            <p>derp derp derp derp derp derrp derp ederp durp</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      );
    }
    return caroItems;
  }

  render() {
    if (this.props.movies.length < 1) return <Loading />;
    const temp = this.movieItems();
    return (
      <Carousel>
        {temp}
      </Carousel>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  movies: Object.values(state.entities.movies),
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Billboard);
