import React from 'react';

const extractVideos = (arr) => {
  return arr.map((ele, i) => (
    <li key={i}>
      <div className="youtube" data-embed={`${ele.key}`}> 
      </div>
    </li>
  ));
};

class MovieVideos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.videos.length < 1) return null;
    return (
      <div className='videos'>
        <h3>Videos</h3>
        <ul className='video-list'>
          {extractVideos(this.props.videos)}
        </ul>
      </div>
    );
  }
}
  

export default MovieVideos;