import React from 'react';

export default props => {
  let { pic } = props;
  return (
    <div className='grey-hover' id='watchlist-button'>
      {/* weird looking icon */}
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon--watchlist ipc-button__icon ipc-button__icon--pre" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z" fill="currentColor"></path></svg>
      <div className="button-text">Watchlist</div>
    </div>
  );
}
