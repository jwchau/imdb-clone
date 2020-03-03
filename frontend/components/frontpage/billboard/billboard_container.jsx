import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import 'pure-react-carousel/dist/react-carousel.es.css';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
//billboard components
// import Poster from './billboard/poster';


class Billboard extends React.Component {
  constructor(props) {
    super(props);
  
  }


  render() {
    const posters = ['words', 'words2', 'words3'];
    const trailers = ['trailer1', 'trailer2', 'trailer3'];
    return(
      <div className='billboard'>
        <div className='slides'>
          <div className='problem-box slide' id='slide-1'>element1</div>
          <div className='problem-box slide' id='slide-2'>element2</div>
          <div className='problem-box slide' id='slide-3'>element3</div>
        </div>
        <div className='nav-buttons'>
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <div >
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div>
      </div>
    );
  }
}
// <Link to='/explore'>Explore</Link> 


const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Billboard);
