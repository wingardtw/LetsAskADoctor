import React from 'react';
import PatientQuestions from './patientquestions.jsx';

class PatientView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayQuestions: this.props.displayQuestions,
      searchInput: '',
      filterInput: '',
      userFilter: false
    }
    this.toggleUserFilter = this.toggleUserFilter.bind(this)
    this.handleTagSearchClick = this.handleTagSearchClick.bind(this)
    this.changeTagSearchInput = this.changeTagSearchInput.bind(this)
  }

  changeTagSearchInput(e) {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleTagSearchClick(e) {
    e.preventDefault()
    const app = this;
    this.setState({
      displayQuestions: this.props.displayQuestions.filter(question => {
        return question.tags.includes(app.state.searchInput)
      })
    })
  }

  toggleUserFilter() {
    if (this.state.userFilter) {
      this.setState({
        userFilter: false,
        displayQuestions: this.props.displayQuestions
      })
    } else {
      this.setState({
        userFilter: true,
        displayQuestions: this.props.displayQuestions.filter(question => {
          return question.user === this.props.username
        })
      })
    }
  }



  render() {
    if (this.props.userType !== 'patient') {
      return <div></div>
    } else {
      return (
        <div className='patientViewContainer'>
          <h2 className = "questionBoxHeader" > Have a question? </h2>
          <div>
            <form>
              <textarea rows="7" cols="70" />
              <input type="submit" value="Ask"/>
            </form>
          </div>
          <input type="checkbox" id="userFilter" onChange={this.toggleUserFilter} />
          <label for="userFilter">Show my questions</label>
            <form>
              Search a tag: <input type="text" id="tagSearch" onChange={this.changeTagSearchInput} />
              <input type="submit" onClick={this.handleTagSearchClick}/>
            </form>
          <PatientQuestions questions={this.state.displayQuestions}/>
          
        </div>)
    }    
  }
}

export default PatientView