import React, { Component } from 'react'

import {
  getImagesPerson,
} from '../../util/movies_api_util';

import {
  sourcePicture,
} from '../../util/util';


export default class PersonImages extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      images: [],
    }
  }
  
  componentDidMount() {
    getImagesPerson(this.props.id)
      .then(res => {
        this.setState({images: res.profiles});
      })
    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      getImagesPerson(this.props.id)
        .then(res => {
          this.setState({images: res.profiles});
        });
    }
  }


  render() {
    if (this.state.images.length < 1) return null;
    return (
      <div className='w-hundred top-line flex-col start-center' id='person-images'>
        <h3>Pictures</h3>
        <ul className='w-hundred image-list flex scroll-x'>
          {extractImages(this.state.images)}
        </ul>
      </div>
    )
  }
}

const extractImages = (arr) => {
  return arr.map((a, i) => {
    return (
      <li key={i}>
        <img src={sourcePicture(a.file_path)} alt={i}/>
      </li>
    );
  });
}
