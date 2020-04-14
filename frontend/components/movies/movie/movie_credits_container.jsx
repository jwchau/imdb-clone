import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../../loading/loading';

import {
  getCredits,
} from '../../../util/movies_api_util';

import {
  sourcePicture
} from '../../../util/util';

class MovieCredits extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      credits: {}
    }
  }

  componentDidMount() {
    getCredits(this.props.id)
      .then(credits => {
        this.setState({credits});
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      getCredits(this.props.id)
        .then(credits => {
          this.setState({credits});
        });
    }
  }

  render() {
    if (!this.state.credits.cast) return <Loading />;
    return (
      <div className='credits w-hundred flex-column center-center'>
        <h3>Credits</h3>
        <div className='w-hundred h-hundred flex center-start'>
          <ul className='cast w-fifty h-hundred scroll-y'>
            <h3>Cast</h3>
            {createPeople(this.state.credits.cast, 'cast')}
          </ul>
          <ul className='crew w-fifty h-hundred scroll-y'>
            <h3>Crew</h3>
            {createPeople(this.state.credits.crew, 'crew')}
          </ul>
        </div>
      </div>
    );
  }
}

// accepts arr of objects
const removeDupes = (arr, type) => {
  const people = {};

  for (let i = 0; i < arr.length; i++) {
    if (people[arr[i].name]) {
      people[arr[i].name].role += (type === 'cast')
        ? " / " + arr[i].character
        : " / " + arr[i].job
    } else {
      people[arr[i].name] = arr[i];
      people[arr[i].name].role = (type === 'cast') ? arr[i].character : arr[i].job;
    }
  }
  return Object.values(people);
}

const createPeople = (arr, type) => {
  arr = removeDupes(arr, type);
  const people = arr.map((person, i) => {
    let {id, name, role, profile_path} = person;
    let OddOrEven = 'even';
    if (i % 2 === 0) {
      if (type === 'cast') OddOrEven = 'even';
      else OddOrEven = 'odd'
    } else {
      if (type === 'cast') OddOrEven = 'odd';
      else OddOrEven = 'even';
    }
    return (
      <li key={i} className={`person flex spaceb-center ${OddOrEven}`}>
        <Link to={`/people/${id}`}>
          <img src={sourcePicture(profile_path)} alt={name}></img>
          {name}
        </Link>
        <div className='flex'>
          <p>{role}</p>
        </div>
      </li>
    );
  });

  return people;
}


const MSTP = (state, ownProps) => ({

});

const MDTP = (dispatch, ownProps) => ({

});

export default connect(
  MSTP,
  MDTP
)(MovieCredits);