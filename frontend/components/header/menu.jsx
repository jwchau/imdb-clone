import React from 'react';

class Menu extends React.Component {

  constructor(props) {
    super(props);

    // this.handleMenu = this.handleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }


  closeMenu(e) {
    e.preventDefault();
    let menu = document.getElementById('menu-page');
    menu.classList.remove('active');
    document.body.style.overflow = '';
  }  

  openMenu(e) {
    e.preventDefault();
    let menu = document.getElementById('menu-page');
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  render() {

    return (
      <div id='header-menu'>
        <div className='gradient' id='menu-page'>
          <img className='menu-logo' src={window.imdbLogoURL}/>
          <div onClick={this.closeMenu} className='close-button'>X</div>
        </div>
        <div id='menu-button' className='grey-hover'>
          <svg className='grey-hover' onClick={this.openMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--menu ipc-button__icon ipc-button__icon--pre" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg>
          <div className='grey-hover' onClick={this.openMenu} className="button-text">Menu</div>
        </div>
      </div>
    );
  }
}

export default Menu;