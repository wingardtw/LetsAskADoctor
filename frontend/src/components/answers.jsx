import React from 'react'
import Answer from './answer.jsx'

class Answers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answerInput: ''
    }
    this.handleAnswerInputChange = this.handleAnswerInputChange.bind(this)
    this.handleAnswerQuestionClick = this.handleAnswerQuestionClick.bind(this)

  }

  handleAnswerInputChange(e) {
    this.setState({
      answerInput: e.target.value
    })
  }

  handleAnswerQuestionClick() {
    this.props.submitAnswer(this.state.answerInput)
  }

  render() {
    if (this.props.displayPage !== 'answers') {
      return (<div></div>)
    }

    let fullAnswers = [<div className="questionBy">Question by: {this.props.question.user}</div>, <div className="questionOnAnswerPage">{this.props.question.text}</div>]

    if (this.props.professional) {
      fullAnswers.push(
        <h2 className="answerBoxHeader"> Answer this question: </h2>)
      fullAnswers.push(
        <div>
          <textarea rows="7" cols="70" onChange={this.handleAnswerInputChange}/>
          <input type="submit" value="Submit answer" onClick={this.handleAnswerQuestionClick}/>
        </div>)
    }

    this.props.answers.forEach((answer) => {
      fullAnswers.push(<Answer answer={answer} professional={this.props.professional} adjustAnswerVote={this.props.adjustAnswerVote}/>)
    })

    return fullAnswers
  }
} 


export default Answers