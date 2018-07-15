import React from 'react'
import reactDOM from 'react-dom'
import Login from './login.jsx'
import QuestionsView from './questionsview.jsx'
import Answers from './answers.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayPage: 'login',
      activeQuestion: null,
      professional: false,
      username: null,
      questions: [{
        text: 'Can I be vaccinated for X disease?',
        rating: 0,
        tags: ['vaccines'],
        user: 'Gary',
        id: 1
      }, {
        text: 'Can I do X if I am pregnant?',
        rating: 12,
        tags: ['pregnant'],
        user: 'Melissa',
        id: 2
      }, {
        text: 'Is it safe to take X medicine if I am Y years old?',
        rating: 8,
        tags: ['medicine', 'delete'],
        user: 'Trololo123',
        id: 3
      }, {
        text: 'What is the typical dosage for medicine B?',
        rating: 43,
        tags: ['medicine', 'doses'],
        user: 'May',
        id: 4
      }].sort((question1, question2) => {
        return question2.rating > question1.rating
      }),
      answers: [{
        text: 'Of course!',
        rating: 10,
        user: 'Jennifer, MD',
        id: 1
      }, {
        text: 'This is not recommended because Z',
        rating: 15,
        user: 'Brian, Pharmacist',
        id: 2
      }, {
        text: 'Y medicine may have X effects',
        rating: 890,
        user: 'Dr. Mario',
        id: 3
      }].sort((answer1, answer2) => {
        return answer2.rating > answer1.rating
      })
    }
    this.changeDisplayAnswers = this.changeDisplayAnswers.bind(this)
    this.submitCredentials = this.submitCredentials.bind(this)
    this.submitQuestion = this.submitQuestion.bind(this)
    this.adjustAnswerVote = this.adjustAnswerVote.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
  }

  componentDidMount() {
    const app = this;
    this.setState({
      activeQuestion: app.state.questions[0]
    })
  }

  adjustAnswerVote(answerId, change) {
    //change is 1 or -1, update the answer score in the database accordingly.
    console.log(answerId, change)
  }

  adjustQuestionVote(questionId, change) {
    //change is 1 or -1, update the question score in the database accordingly.
    console.log(questionId, change)
  }

  changeDisplayAnswers(questionId) {

    //questions are mapped, you'll be able to extract the id of the question.
    //make a query to the server to get all answers with that question ID.
    //we will then display all answers to that question if any(if there are none, let the user know)
    //we also need to set the activeQuestion to the question corresponding to questionid

    this.setState({
      displayPage: 'answers'
    })

  }

  submitAnswer(text) {
    //submit an answer to the database, get username from this.state.username, 
    console.log("We are going to submit this answer ", text, "from ", this.state.username)
  }

  submitQuestion(text) {
    //submit a question to the database, get username from this.state.username
    console.log("We are going to submit this question: ", text)
  }

  submitCredentials(username, password) {
    //query db for username, see if password matches, if it does...
      //query the database for user type and set the state to it.
    //if it doesn't match, tell the user that the credentials don't match and don't let them do anything
    if (username === 'Dr. Mario') {
      this.setState({
        displayPage: 'patient',
        professional: true,
        username: username
      })
    } else {
      this.setState({
        displayPage: 'patient',
        professional: false,
        username: username
      })
    }
  }

  render() {
    return (
      <div className = "allViewsContainer">
        <Login submitCredentials={this.submitCredentials} displayPage={this.state.displayPage}/>
        <QuestionsView displayPage={this.state.displayPage} displayQuestions={this.state.questions} username={this.state.username} 
        submitQuestion={this.submitQuestion} changeDisplayAnswers={this.changeDisplayAnswers} professional={this.state.professional} />
        <Answers displayPage={this.state.displayPage} answers={this.state.answers} question={this.state.activeQuestion} adjustAnswerVote={this.adjustAnswerVote} 
        professional={this.state.professional} submitAnswer={this.submitAnswer}/>
      </div>
    )
  } 
}

export default App