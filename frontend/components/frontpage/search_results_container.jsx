import React, { Component } from 'react'
import {connect} from 'react-redux';


class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {
    if (prevProps.term !== this.props.term) {

    }
  }

  render() {
    debugger
    return (
      <div id='search-page'>
        <ul className='movie-results'>
          {/*  */}
        </ul>
        <ul className='person-results'>

        </ul>
      </div>
    )
  }

}

const MSTP = (state, ownProps) => ({
  term: ownProps.match.params.term,
});

const MDTP = (dispatch) => ({

});

export default connect(MSTP, MDTP)(SearchResults);