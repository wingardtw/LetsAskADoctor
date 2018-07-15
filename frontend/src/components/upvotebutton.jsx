import React from 'react';

const UpvoteButton = ({ upvoteButtonClicked, handleUpvoteButtonClick, professional }) => {
  if (!professional) {
    return <span></span> 
  }
  if (!upvoteButtonClicked) {
    return <span className="professionalVoteImage" onClick={handleUpvoteButtonClick}>⬆️</span>
  }
  return <span className="professionalVoteImage" onClick={handleUpvoteButtonClick}>↩️ </span>
}

export default UpvoteButton