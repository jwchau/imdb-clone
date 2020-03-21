import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import {searchAll} from '../../util/util';

class Searchbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchterm: "",
      filter: "",
      results: [],
      // showSearch: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.clickMovie = this.clickMovie.bind(this);
    // this.showSearch = this.showSearch.bind(this);
  }

  handleSearch(e) {
    if (e.target.value === "") {
      this.setState({searchterm: e.target.value, results: []});
      return;
    }

    this.setState({ searchterm: e.target.value },
      () => searchAll(this.state.searchterm)
        .then(movies => this.setState({ results: movies })));
  }

  handleSubmit(e) {
    e.preventDefault();

    //TODO
    // if (this.state.searchterm === "") return;
    // else {
    //   this.props.history.push(`/movies`);
    //   this.setState({searchterm: "", results: []});
    // }
  }

  onSelect(value) {
    this.setState({filter: value});
  }


  clickMovie(mid) {
    const {history} = this.props;
    return e => {
      this.setState({searchterm: "", results: []});
      history.push(`/movies/${mid}`);
    };
  }

  searchResults() {
    return this.state.results
      .map( movie => (
        <li key={movie.id} onClick={this.clickMovie(movie.id)} className='movie-link'>
          <img src={movie.posterUrl} alt={movie.title}/>
          <span>{movie.title} ({movie.year})</span>
        </li>
      ));
  }

  render() {
    return ( 
      <nav id='header-searchbar'>
       <form onSubmit={this.handleSubmit} className='search-form'>
          <input className='input-text'
            onChange={this.handleSearch}
            type="text" name="searchterm"
            value={this.state.searchterm}
          />

          <div id='movie-searched'>
            {this.searchResults()}
          </div>

          <input type="submit" value="&#128269;" />
       </form>
      </nav>
    );
  }
}

export default withRouter(Searchbar);