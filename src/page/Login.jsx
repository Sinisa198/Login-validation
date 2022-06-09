import { useState, useEffect } from "react";
 
import { useNavigate} from 'react-router-dom'
import logoicon from '../assets/images/logoicon.jpg'

  function Login() {

      const initialValues = { username: "", email: "", password: "", link: ""};
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
      const navigate = useNavigate()
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };

      useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
          navigate('/profile')
        }
      }, [formErrors]);
      const validate = (values) => {

        const errors = {};
        const notValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.username) {
          errors.username = "Name is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!notValid.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        if (!values.link) {
          errors.link = "Link is required";
        }
       
        return errors;
      };

  return (
    
    <div className="login-form">
      <form onSubmit={handleSubmit} className="fadeIn first">
        <h1 className="login-title">Share your success with us!</h1>
        <div className="ui form">
          <img src={logoicon} className="login-icon" />
          <div className="field">
            <input className="login-input"
              type="text"
              name="username"
              placeholder="Name"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}} >{formErrors.username}</p>

          <div className="login-input">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}} >{formErrors.email}</p>

          <div className="login-input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            
          </div>
         <p style={{color:"red"}} >{formErrors.password}</p>
          <div className="login-input">
            <input
              type="text"
              name="link"
              placeholder="Link repository"
              
              value={formValues.link}
              onChange={handleChange}
              
            />
            
          </div>
          <p style={{color:"red"}}>{formErrors.link}</p>

          <input type="submit" className="login-button" value="Log In" />
        </div>
      </form>
    </div>
  );
}

export default Login;