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
              <option value="actors">Actors</option>
              <option value="movies">Movies</option>
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