import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

//api calls
import { searchPeople } from '../../util/movies_api_util';
import { searchTMDB, sourcePicture } from '../../util/util';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      people: [],
    }
  }

  componentDidMount() {
    searchPeople(this.props.term)
      .then(obj => this.setState({people: obj.results}));
    searchTMDB(this.props.term)
      .then(obj => this.setState({movies: obj.results}));
    $('html,body').animate({scrollTop: 0}, 'slow')
  }

  componentDidUpdate(prevProps) {
    if (prevProps.term !== this.props.term) {
      searchPeople(this.props.term)
        .then(obj => this.setState({people: obj.results}));
      searchTMDB(this.props.term)
        .then(obj => this.setState({movies: obj.results}));
      $('html,body').animate({scrollTop: 0}, 'slow')
    }
  }

  render() {
    if (this.state.movies.length < 1 && this.state.people.length < 1) return noResults(this.props.term);
    return (
      <div className='flex-col start-center' id='search-page'>
        <h3>Search Results for: {this.props.term}</h3>

        <h4>Titles</h4>
        <ul className='flex-col start-center scroll-y movie-results'>
          {extractResults(this.state.movies, 'movies')}
        </ul>

        <h4>Names</h4>
        <ul className='flex-col start-center scroll-y person-results'>
          {extractResults(this.state.people, 'people')}
        </ul>
      </div>
    )
  }
}

const noResults = (query) => {
  return (
    <div className='flex-col, start-center'>
      <h3>No results for:</h3>
      <h4>{query}</h4>
    </div>
  )
}

const extractResults = (arr, type) => {
  if (type === 'movies') {
    return arr.map((ele, i) => (
      <li key={i}>
        <Link className='flex-col center-center' to={`/movies/${ele.id}`}>
          <p>{ele.title} ({(!ele.release_date || ele.release_date === '') ? 'N/A' : ele.release_date})</p>
          <img className='tile-100' src={sourcePicture(ele.poster_path)} alt={ele.title}/>
        </Link>
      </li>
    ));
  } else {
    return arr.map((ele, i) => (
      <li key={i}>
        <Link className='flex-col center-center' to={`/people/${ele.id}`}>
          <p>{ele.name}</p>
          <img className='tile-100' src={sourcePicture(ele.profile_path)} alt={ele.name}/>
        </Link>
      </li>
    ));
  }
};

const MSTP = (state, ownProps) => ({
  term: ownProps.match.params.term,
});

const MDTP = (dispatch) => ({

});

export default connect(MSTP, MDTP)(SearchResults);