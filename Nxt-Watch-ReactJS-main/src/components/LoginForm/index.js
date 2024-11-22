import {Component} from 'react'

import {
  LoginFormContainer,
  LoginCardContainer,
  WebsiteLogo,
  Form,
  InputContainer,
  Label,
  Input,
  CheckboxContainer,
  CheckBoxInput,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    checkbox: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = event => {
    if (event.target.checked) {
      this.setState({checkbox: true})
    } else {
      this.setState({checkbox: false})
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <Label htmlForm="username">USERNAME</Label>
        <Input
          type="text"
          id="username"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password, checkbox} = this.state
    return (
      <>
        <Label htmlForm="password">PASSWORD</Label>
        <Input
          type={checkbox ? 'text' : 'password'}
          id="password"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderCheckbox = () => (
    <CheckboxContainer>
      <CheckBoxInput
        type="checkbox"
        id="showPassword"
        onClick={this.onChangeCheckbox}
      />
      <ShowPasswordLabel htmlFor="showPassword">
        Show Password
      </ShowPasswordLabel>
    </CheckboxContainer>
  )

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <LoginFormContainer>
        <LoginCardContainer>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website-logo"
          />
          <Form onSubmit={this.onSubmitForm}>
            <InputContainer>{this.renderUsername()}</InputContainer>
            <InputContainer>{this.renderPassword()}</InputContainer>
            <InputContainer>{this.renderCheckbox()}</InputContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </Form>
        </LoginCardContainer>
      </LoginFormContainer>
    )
  }
}

export default LoginForm
