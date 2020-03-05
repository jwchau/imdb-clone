import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//billboard components
// import Poster from './billboard/poster';


class Billboard extends React.Component {
  constructor(props) {
    super(props);
  
    this.handleClick = this.handleClick.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.showSlide = this.showSlide.bind(this);

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
      
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }

  componentDidMount() {
    this.showSlide(1);
  }

  componentDidUpdate() {
    this.showSlide(this.state.slideIndex);
  }


  render() {
    const posters = ['words', 'words2', 'words3'];
    const trailers = ['trailer1', 'trailer2', 'trailer3'];
    return(
      <div className='billboard'>
        <div className='slides slideshow-container'>
          {/* <BillboardItem /> */}
          <div className='problem-box slide mySlides fade'>element1</div>
          <div className='problem-box slide mySlides fade'>element2</div>
          <div className='problem-box slide mySlides fade'>element3</div>
          <div className='problem-box slide mySlides fade'>element4</div>
          <div className='problem-box slide mySlides fade'>element5</div>
          <div className='nav-buttons'>
            <a className="prev" onClick={this.handleSlide('prev')}>&#10094;</a>
            <a className="next" onClick={this.handleSlide('next')}>&#10095;</a>
          </div>
        </div>
        <div>
          <span className="dot" onClick={this.handleClick(1)}></span>
          <span className="dot" onClick={this.handleClick(2)}></span>
          <span className="dot" onClick={this.handleClick(3)}></span>
          <span className="dot" onClick={this.handleClick(4)}></span>
          <span className="dot" onClick={this.handleClick(5)}></span>
        </div>
      </div>
    );
  }
}
// <Link to='/explore'>Explore</Link> 


const mapStateToProps = (state, ownProps) => ({
  movies: state.entities.movies,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Billboard);
