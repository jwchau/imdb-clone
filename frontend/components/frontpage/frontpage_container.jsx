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

  componentDidMount() {
    this.props.fetchPopular();
    this.props.fetchTopRated();
    this.props.fetchUpcoming();
  }

  render() {
    return (
      <div id='frontpage'>
        <BillboardContainer name='Upcoming'/>
        <BillboardContainer name='Popular'/>
        <BillboardContainer name='Top Rated'/>

        {/* <BillboardContainer name='now-playing' fetchMoviesType={this.props.fetchNowPlaying}/> */}
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
  fetchUpcoming: () => dispatch(fetchUpcoming()),
  fetchNowPlaying: () => dispatch(fetchNowPlaying()),
  fetchPopular: () => dispatch(fetchPopular()),
  fetchTopRated: () => dispatch(fetchTopRated()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
