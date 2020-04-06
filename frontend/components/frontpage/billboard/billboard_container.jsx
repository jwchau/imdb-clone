import React from 'react';
import { connect } from 'react-redux';

//billboard components
import BillboardItem from './billboard_item';
import Loading from '../../loading/loading';

class Billboard extends React.Component {
  constructor(props) {
    super(props);

    };

  componentDidMount() {
    // this.props.fetchMoviesType();
  }

  componentDidUpdate() {

  }

  movieItems() {
    const bbItems = [];
    for (let i = 0; i < this.state.numSlides; i++) {
      const movie = this.props.movies[i];
      bbItems.push(<BillboardItem key={movie.id} movie={movie}/>);
    }
    return bbItems;
  }

  render() {
    if (this.props.movies.length < 1) return <Loading />;

    return(
      <div >
        <div className='nav-buttons'>
          <a className="prev">&#10094;</a>
          <a className="next">&#10095;</a>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  movies: Object.values(state.entities.movies),
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Billboard);
