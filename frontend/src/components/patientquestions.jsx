import React from 'react'
import Question from './question.jsx'

const PatientQuestions = ({ questions , changeDisplayAnswers }) => {
  return questions.map((question) => {
    return <Question question={question} changeDisplayAnswers={changeDisplayAnswers} />
  })
}

export default PatientQuestions