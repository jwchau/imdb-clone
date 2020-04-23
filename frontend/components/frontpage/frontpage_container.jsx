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
import PopularPeople from '../people/popular_people';

class Frontpage extends Component {
  render() {
    return (
      <div id='frontpage'>
        <BillboardContainer name='Upcoming' fetch={this.props.fetchPopular}/>
        <BillboardContainer name='Popular' fetch={this.props.fetchTopRated}/>
        <BillboardContainer name='TopRated'fetch={this.props.fetchUpcoming}/>
        <PopularPeople />
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
