import React from 'react'
import QuestionUpvote from './questionupvote.jsx'

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      upvoteButtonClicked: false
    }
    this.handleUpvoteButtonClick = this.handleUpvoteButtonClick.bind(this)
  }

  handleUpvoteButtonClick() {
    if (this.state.upvoteButtonClicked) {
      this.props.question.rating = this.props.question.rating - 1
    }
    else {
      this.props.question.rating = this.props.question.rating + 1
    }
    this.setState({
      upvoteButtonClicked: !this.state.upvoteButtonClicked
    })
  }

  render() {
    const app = this
    return (
      <div className = "questionContainer">
        <span className="questionRating">{this.props.question.rating}</span>
        <span className="questionText">{this.props.question.text}</span>
          <QuestionUpvote upvoteButtonClicked={this.state.upvoteButtonClicked} handleUpvoteButtonClick={this.handleUpvoteButtonClick}/>
        <div className="askedBy">Asked by {this.props.question.user}</div>
        <button onClick={function() {app.props.changeDisplayAnswers(app.props.question.id)}}>See Answers</button>
      </div>
    )

  }
    

}

export default Question