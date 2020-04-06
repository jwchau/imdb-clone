import React, { Component } from 'react';
import { connect } from 'react-redux';

//movie fetches
import {
  fetchUpcoming,
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
} from '../../actions/movies_action';

//components
import BillboardContainer from './billboard/billboard_container';

class Frontpage extends Component {
  render() {
    return (
      <div id='frontpage'>
        <BillboardContainer name='upcoming' fetchMoviesType={this.props.fetchUpcoming}/>
        <BillboardContainer name='now-playing' fetchMoviesType={this.props.fetchNowPlaying}/>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
  fetchUpcoming: () => dispatch(fetchUpcoming()),
  fetchNowPlaying: () => dispatch(fetchNowPlaying()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
