import React from 'react'
import reactDOM from 'react-dom'
import Login from './login.jsx'
import PatientView from './patientview.jsx'
import ProfessionalView from './professionalview.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userType: null,
      username: null,
      questions: [{
        text: 'Can I be vaccinated for X disease?',
        rating: 0,
        tags: ['vaccines'],
        user: 'Gary'
      }, {
        text: 'Can I do X if I am pregnant?',
        rating: 12,
        tags: ['pregnant'],
        user: 'Melissa'
      }, {
        text: 'Is it safe to take X medicine if I am Y years old?',
        rating: 8,
        tags: ['medicine', 'delete'],
        user: 'Trololo123'
      }].sort((question1, question2) => {
        return question1.rating > question2.rating
      }),
      answers: [{
        text: 'Of course!',
        rating: 10
      }]
    }
    this.submitCredentials = this.submitCredentials.bind(this)
  }

  submitCredentials(username, password) {
    //query db for username, see if password matches, if it does...
      //query the database for user type and set the state to it.
    //if it doesn't match, tell the user that the credentials don't match and don't let them do anything

    this.setState({
      userType: 'patient',
      username: username
    })
    // app.setState(userType: 'patient')
  }

  render() {
    return (
      <div className = "allViewsContainer">
        <Login submitCredentials={this.submitCredentials} userType={this.state.userType}/>
        <PatientView userType={this.state.userType} displayQuestions={this.state.questions} username={this.state.username}/>
        <ProfessionalView userType={this.state.userType}/>
      </div>
    )
  } 
}

export default App