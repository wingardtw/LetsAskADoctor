import React from 'react';
import PatientQuestions from './patientquestions.jsx';

class QuestionsView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayQuestions: this.props.displayQuestions,
      searchInput: '',
      filterInput: '',
      questionInput: '',
      userFilter: false
    }
    this.toggleUserFilter = this.toggleUserFilter.bind(this)
    this.handleTagSearchClick = this.handleTagSearchClick.bind(this)
    this.changeTagSearchInput = this.changeTagSearchInput.bind(this)
    this.filterByKeyword = this.filterByKeyword.bind(this)
    this.handleAskQuestionClick= this.handleAskQuestionClick.bind(this)
    this.handleQuestionInputChange = this.handleQuestionInputChange.bind(this)
  }

  changeTagSearchInput(e) {
    this.setState({
      searchInput: e.target.value
    })
  }

  filterByKeyword(e) {
    this.setState({
      displayQuestions: this.props.displayQuestions.filter(question => {
        return question.text.includes(e.target.value)
      })
    })
  }

  handleAskQuestionClick(e) {
    e.preventDefault()
    this.props.submitQuestion(this.state.questionInput)
  }

  handleQuestionInputChange(e) {
    this.setState({
      questionInput: e.target.value
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
    if (this.props.displayPage !== 'patient') {
      return <div></div>
    } else if (this.props.professional) {
      return (
        <div className='patientViewContainer'>
            <form>
              Search a tag: <input type="text" id="tagSearch" onChange={this.changeTagSearchInput} />
              <input type="submit" onClick={this.handleTagSearchClick}/>
            </form>
            <form>
              Filter by keyword: <input type="text" id="filter" onChange={this.filterByKeyword} />
            </form>
          <PatientQuestions questions={this.state.displayQuestions} changeDisplayAnswers={this.props.changeDisplayAnswers}/>          
        </div>
      )
    } else {
      return (
        <div className='patientViewContainer'>
          <h2 className = "questionBoxHeader" > Have a question? </h2>
          <div>
            <form>
              <textarea rows="7" cols="70" onChange={this.handleQuestionInputChange}/>
              <input type="submit" value="Ask" onClick={this.handleAskQuestionClick}/>
            </form>
          </div>
          <input type="checkbox" id="userFilter" onChange={this.toggleUserFilter} />
          <label for="userFilter">Show my questions</label>
            <form>
              Search a tag: <input type="text" id="tagSearch" onChange={this.changeTagSearchInput} />
              <input type="submit" onClick={this.handleTagSearchClick}/>
            </form>
            <form>
              Filter by keyword: <input type="text" id="keywordFilter" onChange={this.filterByKeyword} />
            </form>
          <div className = "questionsContainer">
            <PatientQuestions questions={this.state.displayQuestions} changeDisplayAnswers={this.props.changeDisplayAnswers}/> 
          </div>         
        </div>)
    }    
  }
}

export default QuestionsView