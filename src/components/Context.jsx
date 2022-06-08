import React from 'react'
import { useNavigate } from 'react-router-dom'

const Context = () => {

    const state = {
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      };
  
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }
  
    const checkLoginStatus = () => {
      axios
        .get("http://localhost:3002/profile", { withCredentials: true })
        .then(response => {
          if (
            response.data.logged_in &&
            state.loggedInStatus === "NOT_LOGGED_IN"
          ) {
            this.setState({
              loggedInStatus: "LOGGED_IN",
              user: response.data.user
            });
          } else if (
            !response.data.logged_in &
            (state.loggedInStatus === "LOGGED_IN")
          ) {
            this.setState({
              loggedInStatus: "NOT_LOGGED_IN",
              user: {}
            });
          }
        })
        .catch(error => {
          console.log("check login error", error);
        });
    }
  
    const componentDidMount = () => {
     checkLoginStatus();
    }
  
    const handleLogout = () => {
        setState({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      });
    }
  
    const handleLog = (data) => {
      setState({
        loggedInStatus: "LOGGED_IN",
        user: data.user
      });
    }
    
  return (
    <div>
      
    </div>
  )}


export default Context
