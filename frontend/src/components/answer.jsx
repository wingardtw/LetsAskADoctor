import React from 'react'
import UpvoteButton from './upvotebutton.jsx'

class Answer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      upvoteButtonClicked: false
    }
    this.handleUpvoteButtonClick = this.handleUpvoteButtonClick.bind(this)
  }

  handleUpvoteButtonClick() {
    if (this.state.upvoteButtonClicked) {
      this.props.answer.rating = this.props.answer.rating - 1
      this.props.adjustAnswerVote(this.props.answer.id, -1)
    }
    else {
      this.props.answer.rating = this.props.answer.rating + 1
      this.props.adjustAnswerVote(this.props.answer.id, 1)
    }
    this.setState({
      upvoteButtonClicked: !this.state.upvoteButtonClicked
    })

  }

  render() {
    return (
      <div>
        <span className = "answerContainer">
          <div className = "answerProfessionalInfoContainer">
            <div className = "professionalImage">🏥</div>
            <div className = "professionalName">{this.props.answer.user}</div>
          </div>        
        </span>
        <span className = "answerTextAndButtonContainer">
          <span className = "answerRating">{this.props.answer.rating}</span>
          <span className = "answerText">{this.props.answer.text}</span>
          <UpvoteButton upvoteButtonClicked={this.state.upvoteButtonClicked} handleUpvoteButtonClick={this.handleUpvoteButtonClick} professional={this.props.professional}/>
        </span>   
      </div>  
    )
  }
}

export default Answer