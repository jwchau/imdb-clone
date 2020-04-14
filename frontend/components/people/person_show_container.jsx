import { connect } from 'react-redux';
import React, { Component } from 'react';

import PersonImages from './person_images';
import PersonCredits from './person_credits';
import PersonExternals from './person_externals';

import {
  getDetailsPerson,
} from '../../util/movies_api_util';

import {
  sourcePicture,
} from '../../util/util';


import Loading from '../loading/loading';

class PersonShow extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      details: {},
    };
  }

  componentDidMount() {
    getDetailsPerson(this.props.id)
      .then((details) => {
        this.setState({details});
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({details: {}});
      getDetailsPerson(this.props.id)
        .then((details) => {
          this.setState({details});
        });
    }
  }

  render() {
    if (!this.state.details.id) return <Loading />;
    const {
      biography, birthday, deathday,
      homepage, known_for_department:kfd, name,
      place_of_birth:pob, profile_path:pUrl,
    } = this.state.details;
    return (
      <div className='person-show flex-col start-center'>
        <h3>{name}</h3>
        <img src={sourcePicture(pUrl)} alt=""/>
        {(valid(homepage)) ? <span>Homepage: <a href={homepage}>{homepage}</a></span> : null}
        {(valid(pob)) ? <span>Place of Birth: <span>{pob}</span></span> : null}
        {(valid(birthday)) ? <span>Birthday: <span>{birthday}</span></span> : null}
        {(valid(deathday)) ? <span>Deathday: <span>{deathday}</span></span> : null}
        {(valid(kfd)) ? <span>Known for: <span>{kfd}</span></span> : null}
        {(valid(biography)) ? <span>Biography: <span>{biography}</span></span> : null}

        <PersonImages id={this.props.id}/>
        <PersonCredits id={this.props.id}/>
        <PersonExternals id={this.props.id}/>
      </div>
    );
  }
}

const valid = (str) => {
  if (str !== null && str !== "" && str !== 0 && str.length !== 0) return true;
  return false;
}

const MSTP = (state, ownProps) => ({
  id: parseInt(ownProps.match.params.id),
});

const MDTP = (dispatch, ownProps) => ({
});

export default connect(
  MSTP,
  MDTP
)(PersonShow);
