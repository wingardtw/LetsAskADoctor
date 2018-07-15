import React from 'react'

const PatientQuestions = ({ questions }) => {
  return questions.map((question) => {
    return <div className = 'question'>{question.text}</div>
  })
}

// class PatientQuestions extends React.Component {
//   constructor(props) {
//     super(props)

//   }

//   render() {


//   }
// }


export default PatientQuestions