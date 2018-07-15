import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usernameText: '',
      passwordText: ''
    }
    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleSubmitCredentialsClick = this.handleSubmitCredentialsClick.bind(this)
  }

  handleUsernameInputChange(e) {
    const app = this;
    app.setState({
      usernameText: e.target.value
    })
  }

  handlePasswordInputChange(e) {
    const app = this;
    app.setState({
      passwordText: e.target.value
    })
  }

  handleSubmitCredentialsClick(e) {
    e.preventDefault()
    this.props.submitCredentials(this.state.usernameText, this.state.passwordText)
  }

  render() {
    if (this.props.displayPage !== 'login') {
      return (<div></div>)
    }
    return (
      <div className='loginContainer'>
        <div>Already have an account?</div>
        <form>
          Username: <input type="textarea" name="username" onChange={this.handleUsernameInputChange}/><br />
          Password: <input type="password" name="password" onChange={this.handlePasswordInputChange}/><br />
          <input type="submit" value="Log in" onClick={this.handleSubmitCredentialsClick}/>
        </form>
      </div>)
  }
}

export default Login