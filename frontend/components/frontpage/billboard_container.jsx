import React from 'react';
import { connect } from 'react-redux';

class Billboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className='billboard'>
        i am billboard

        <Link to='/explore'>Explore</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Billboard);
