import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../loading/loading';

import {
  getPictures,
} from '../../../util/movies_api_util';

class MoviePictures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: {},
    }
  }

  componentDidMount() {
    getPictures(this.props.id).then(res => {
      this.setState({pictures: res});
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({pictures: {}});
      getPictures(this.props.id).then(res => {
        this.setState({pictures: res});
      });
    }
  }

  render() {
    if (this.state.pictures.posters === undefined) return <Loading />;
    let { posters, backdrops } = this.state.pictures;
    if (posters.length < 1 && backdrops.length < 1) return null;
    return (
      <div className='pictures top-line'>
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
  const host = "https://image.tmdb.org/t/p/original";
  return arr.map((ele, i) => {
    if (ele.file_path) {
      return (
        <li key={i + offset}>
          <img src={`${host}${ele.file_path}`} alt={`${i}`}></img>
        </li>
      );
    }
  });
};


const MSTP = (state, ownProps) => ({
});

const MDTP = (dispatch, ownProps) => ({
});

export default connect(
  MSTP,
  MDTP
)(MoviePictures);