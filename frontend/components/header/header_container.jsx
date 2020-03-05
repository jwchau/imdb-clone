import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { fetchMovies } from '../../actions/movies_action';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    ownProps
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
