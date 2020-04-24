import React, { Component } from 'react'

import { fetchPopularPeople } from '../../util/movies_api_util';
import { sourcePicture } from '../../util/util';
import { Link } from 'react-router-dom';

export default class PopularPeople extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    }
  }

  componentDidMount() {
    fetchPopularPeople()
      .then( obj => this.setState({people: obj.results}));
  }

  render() {
    if (this.state.people.length < 1) return null;
    return (
      <div className='w-hundred flex-col start-center' id='popular-people-container'>
        <h3 className='section-h3'>Popular People</h3>
        <ul className='w-hundred flex' id='popular-people'>
          {extractPopularPeople(this.state.people)}
        </ul>
      </div>
    );
  }
}

const extractPopularPeople = arr => {
  return arr.map((person) => {
    return (
      <Link key={person.name} to={`people/${person.id}`}>
        <li className='person flex-col center-center'>
          <p>{person.name}</p>
          <img src={sourcePicture(person.profile_path)} alt={person.name}></img>
        </li>
      </Link>
    );
  });
}