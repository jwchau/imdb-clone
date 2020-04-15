import React, { Component } from 'react';

import {
  getCreditsPerson,
} from '../../util/movies_api_util';

import {
  sourcePicture,
} from '../../util/util';

import Loading from '../loading/loading';

export default class PersonCredits extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      credits: {},
    }
  }

  componentDidMount() {
    getCreditsPerson(this.props.id)
      .then(credits => {
        this.setState({credits});
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      getCreditsPerson(this.props.id)
        .then(credits => {
          this.setState({credits});
        });
    }
  }

  render() {
    if (!this.state.credits.cast) return <Loading />;
    const {cast, crew} = this.state.credits;
    if (cast.length < 1 && crew.length < 1) return null;

    return (
      <div className='w-hundred flex-col start-center' id='person-credits'>
        <h3>Filmography</h3>
        <ul className='cast-list'>
          <li>fight me</li>
          <li>fight me 2.0</li>
          <li>fight me 6 point 9</li>
        </ul>
        <ul className='crew-list'>
          <li>with pleasure</li>
          <li>with testing</li>
          <li>withheld the right to ______</li>
        </ul>
      </div>
    );
  }


}
