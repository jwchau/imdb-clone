import React from 'react';
import {
//   BrowserRouter as Router,
  Link,
//   Route,
//   Switch,
} from 'react-router-dom';

//header buttons
import Menu from './menu';
import Searchbar from './searchbar';
import Logo from './logo';
import WatchlistButton from './watchlistbutton';
import LoginButton from './loginbutton';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let cu = this.props.currentUser;
    
    return (
      <div className='header'>
        <Link to='/'><img className='header-logo' src="/assets/imdb_logo.svg"/></Link>
        <Menu />
        <Link to='/imdbtv'><Logo pic={'imdbtv_logo.svg'}/></Link>
        <Searchbar />
        <Link to='/imdbpro'><Logo pic={'imdbpro_logo.svg'}/></Link>
        <Link to='/watchlist'><WatchlistButton /></Link>
        <Link to='/signin'><LoginButton /></Link>
      </div>
    );
  }
  


}

export default Header;