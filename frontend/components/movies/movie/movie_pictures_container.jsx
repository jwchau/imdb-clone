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

  render() {
    if (!this.props.pictures.posters) return <Loading />;
    return (
      <div className='pictures'>
        i am movie pictures
      </div>
    );
  }
}

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