import React from 'react';

class Searchbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return ( //<div>hi</div>
      <div id='header-searchbar'>
       <form className='search-form'>
          <div className="search-filter">
            <select>
              <option value="all">All</option>
              <option value="titles">Titles</option>
              <option value="tv">TV Episodes</option>
              <option value="celebs">Celebs</option>
              <option value="companies">Companies</option>
              <option value="keyword">Keyword</option>
            </select>
          </div>
          <input type="text" name="searchterm"/>
          <input type="submit" value="&#128269;"/>
       </form>
      </div>
    );
  }
}

export default Searchbar;