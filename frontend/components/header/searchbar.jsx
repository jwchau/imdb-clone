import React from 'react';

import {searchAll} from '../../util/util';

class Searchbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchterm: "",
      filter: "",
      results: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  handleSearch(e) {
    if (e.target.value === "") {
      this.setState({searchterm: e.target.value, results: []});
      return;
    }

    this.setState({ searchterm: e.target.value },
      () => searchAll(this.state.searchterm)
        .then(movies => this.setState({ results: movies }) ));
    
  }

  handleSubmit(e) {
    e.preventDefault();
    //fetch data based on filter, then match with searchterm
  }

  onSelect(value) {
    this.setState({filter: value});
  }

  searchResults() {
    return this.state.results
      .map( movie => (
        <li>{movie.title}</li>
      ));
  }

  render() {
    return ( //<div>hi</div>
      <nav id='header-searchbar'>
       <form onSubmit={this.handleSubmit} className='search-form'>
          <div id='search-filter'>
            <select className='select' onChange={(e) => this.onSelect(e.target.value)}>
              <option value="all">All</option>
              <option value="titles">Titles</option>
              <option value="tv">Television</option>
              <option value="celebs">Celebs</option>
              <option value="companies">Companies</option>
              <option value="keyword">Keyword</option>
            </select>
          </div>
          <input className='input-text'
            onChange={this.handleSearch}
            type="text" name="searchterm"
            value={this.state.searchterm}
          />
          <div className='movie-searched'>
            {this.searchResults()}
          </div>
          <input type="submit" value="&#128269;"/>
       </form>
      </nav>
    );
  }
}

export default Searchbar;