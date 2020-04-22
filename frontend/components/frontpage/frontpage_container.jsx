import React, { Component } from 'react';
import { connect } from 'react-redux';

//movie fetches
import {
  fetchUpcoming,
  fetchPopular,
  fetchTopRated,
} from '../../actions/movies_action';

//components
import BillboardContainer from './billboard/billboard_container';

const env = require('../../../config/keys').env;

class Frontpage extends Component {
  render() {
    console.log(env);
    return (
      <div id='frontpage'>
        <BillboardContainer name='Upcoming' fetch={this.props.fetchPopular}/>
        <BillboardContainer name='Popular' fetch={this.props.fetchTopRated}/>
        <BillboardContainer name='TopRated'fetch={this.props.fetchUpcoming}/>
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
