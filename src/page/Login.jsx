import React from "react";
import { Link } from 'react-router-dom'

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

 export default class Login extends React.Component {
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
    if (!this.state.link.includes("https://github.com")) {
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
    }
  };

  render() {
    return (
        <div> 
            <h1 className='login-title'>Log in</h1>
            <p className='login-paragraf'>Share with us your success</p>
      <form onSubmit={this.handleSubmit} className='form'>
         <img src={loginicon} className="login-icon" alt="" />
        <div>
          <input className='login-input'
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input className='login-input'
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input className='login-input'
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            
          /> <br />
         <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
          <div>
          <input className='login-input'
            name="link"
            placeholder="Link repository"
            value={this.state.link}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.linkError}
          </div>
        </div>
          
          
        </div>
        <button type="login" className="login-btn">Login</button>
      </form>
      </div>
    );
  }
}