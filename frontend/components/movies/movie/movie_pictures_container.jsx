import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../loading/loading';

import {
  getPictures,
} from '../../../actions/movies_action';

class MoviePictures extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPictures(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.props.getPictures(this.props.id);
    }
  }

  render() {
    if (!this.props.pictures.posters) return <Loading />;
    let { posters, backdrops } = this.props.pictures;
    if (posters.length < 1 && backdrops.length < 1) return null;
    return (
      <div className='pictures'>
        <h3>Pictures</h3>
          <ul className='picture-list'>
            {extractPictures(posters)}
            {extractPictures(backdrops, posters.length)}
          </ul>
      </div>
    );
  }
}

const extractPictures = (arr, offset = 0) => {
  const host = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  return arr.map((ele, i) => (
    <li key={i + offset}>
      <img src={`${host}${ele.file_path}`} alt={`${i}`}></img>
    </li>
  ));
};


const MSTP = (state, ownProps) => ({
  pictures: state.entities.movies.movie.pictures,
});

const MDTP = (dispatch, ownProps) => ({
  getPictures: (id) => dispatch(getPictures(id)),
});

export default connect(
  MSTP,
  MDTP
)(MoviePictures);