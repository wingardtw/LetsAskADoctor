import React from 'react'

const QuestionUpvote = ({ upvoteButtonClicked, handleUpvoteButtonClick }) => {
  if (!upvoteButtonClicked) {
    return <span className="professionalVoteImage" onClick={handleUpvoteButtonClick}>⬆️</span>
  }
  return <span className="professionalVoteImage" onClick={handleUpvoteButtonClick}>↩️ </span>
}

export default QuestionUpvote