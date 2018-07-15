import React from 'react'

const Question = ({ question , changeDisplayAnswers }) => {

  console.log('CDA', changeDisplayAnswers)

    return (
      <div className = "questionContainer">
        <span className="questionRating">{question.rating}</span>
        <span className="questionText">{question.text}</span>
        <div className="askedBy">Asked by {question.user}</div>
        <button onClick={function() {changeDisplayAnswers(question.id)}}>See Answers</button>
      </div>
    )

}

export default Question