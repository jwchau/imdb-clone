import React from 'react';

class Searchbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchterm: "",
      filter: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  handleChange(type) {
    return e => this.setState({[type]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    //fetch data based on filter, then match with searchterm
  }

  onSelect(value) {
    this.setState({filter: value});
  }

  render() {

    return ( //<div>hi</div>
      <div className='problem-box' id='header-searchbar'>
       <form onSubmit={this.handleSubmit} className='search-form'>
          <div className="search-filter">
            <select id='select-filter' onChange={(e) => this.onSelect(e.target.value)}>
              <option value="all">All</option>
              <option value="titles">Titles</option>
              <option value="tv">Television</option>
              <option value="celebs">Celebs</option>
              <option value="companies">Companies</option>
              <option value="keyword">Keyword</option>
            </select>
          </div>
          <input className='input-text'
            onChange={this.handleChange('searchterm')}
            type="text" name="searchterm"
            value={this.state.searchterm}
          />
          <input type="submit" value="&#128269;"/>
       </form>
      </div>
    );
  }
}

export default Searchbar;