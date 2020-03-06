import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchMovies} from '../../../actions/movies_action';

//billboard components
import BillboardItem from './billboard_item';


class Billboard extends React.Component {
  constructor(props) {
    super(props);
  
    this.handleClick = this.handleClick.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.showSlide = this.showSlide.bind(this);

    this.visited = {};

    this.state = {
      slideIndex: 1,
      numSlides: 5,
    };
  }

  handleClick(i) {
    return e => {
      e.preventDefault();
      this.setState({slideIndex: [i]});
    };
  }

  handleSlide(dir) {
    return e => {
      let { slideIndex:i, numSlides:n } = this.state;
      if (dir === 'next') { 
        i++;
        if (i > n) i = 1;
      } else if (i - 1 <= 0) i = n;
      else i--;
      this.setState({slideIndex: i});
    };
  }

  showSlide(n) {
      let { slideIndex } = this.state;
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (dots.length === 0) return null;
      
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "flex";
      dots[slideIndex - 1].className += " active";
  }

  componentDidMount() {
    this.props.fetchMovies();
    this.showSlide(1);
  }

  componentWillUnmount() {
    shuffle(this.props.movies);
  }

  componentDidUpdate() {
    this.showSlide(this.state.slideIndex);
  }

  render() {
    const bbItems = this.props.movies.map(movie => <BillboardItem key={movie.id} movie={movie}/>);
    if (bbItems.length === 0) return (null);
    // shuffle(bbItems);

    const dots = [];
    for (let i = 1; i <= this.state.numSlides; i++) {
      dots.push(<span key={i} className="dot" onClick={this.handleClick(i)}></span>);
    }
    
    return(
      <div className='billboard'>
        <div className='slides slideshow-container'>
          {bbItems}
          <div className='nav-buttons'>
            <a className="prev" onClick={this.handleSlide('prev')}>&#10094;</a>
            <a className="next" onClick={this.handleSlide('next')}>&#10095;</a>
          </div>
        </div>
        <div className='dots'>
          {dots}
        </div>
      </div>
    );
  }
}
// <Link to='/explore'>Explore</Link>


const mapStateToProps = (state, ownProps) => ({
  movies: Object.values(state.entities.movies),
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Billboard);
