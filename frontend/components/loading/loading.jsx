import React from 'react';

const Loading = (props) => {

  return (
    <div className='loading-screen'>
      {/* <div className='loading-circle'></div> */}
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      {/* <div className="lds-dual-ring"></div>
      <div className="lds-heart"><div></div></div>
      <div className="lds-hourglass"></div> */}
    </div>
  );
};

export default Loading;