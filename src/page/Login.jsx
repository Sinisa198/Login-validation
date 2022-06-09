import React from "react";

import loginicon from '../assets/images/loginicon.jpg'

const initialState = {
  name: "",
  email: "",
  password: "",
  link: "",
  nameError: "",
  emailError: "",
  passwordError: "",
  linkError: ""
};


  class Login extends React.Component {
     
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let linkError = "";
    
    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }
    if (!this.state.password) {
      passwordError = "Invalid password";
    }
    if (!this.state.link.includes("github.com")) {
        linkError = "Invalid link repository"
    }
    if (emailError || nameError || passwordError || linkError) {
      this.setState({ emailError, nameError, passwordError, linkError });
      return false;
    }
    return true;
    
  };

    handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
      console.log('Logged')
    }
    else
      console.log('Login for go to the next page')
  };
  render() {
    return (
      <div className="login-form">
      <div className="wrapper fadeInDown" onSubmit={this.handleSubmit} >
      <div id="formContent" className="form-content">
        <h2 className="active"> Sign In </h2>
        <div className="fadeIn first">
          <img src={loginicon} id="icon" alt="User Icon"  className="login-icon"/>
        </div>
    
        <form>
          <input type="text" id="name" className="fadeIn second" name="name" placeholder="Name"   
          value={this.state.name}
          onChange={this.handleChange}
    />
    <div style={{ fontSize: 12, color: "red" }}>
      {this.state.nameError}
    </div>
    <input type="email" id="email" className="fadeIn second" name="email" placeholder="Email"   
          value={this.state.email}
          onChange={this.handleChange}
    />
    <div style={{ fontSize: 12, color: "red" }}>
      {this.state.emailError}
    </div>
    <input type="password" id="password" className="fadeIn second" name="password" placeholder="Password"   
          value={this.state.name}
          onChange={this.handleChange}
    />
    <div style={{ fontSize: 12, color: "red" }}>
      {this.state.passwordError}
    </div>
          <input type="text" id="link" className="fadeIn second" name="link" placeholder="Link repository " 
          value={this.state.link}
          onChange={this.handleChange}
    />
    <div style={{ fontSize: 12, color: "red" }}>
      {this.state.linkError}
    </div>
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>
    
    
      </div>
    </div>
    </div>

    )}}
export default Login;