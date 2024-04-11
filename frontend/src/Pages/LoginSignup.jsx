import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { addUser } from '../API/api';
import { loginUser } from '../API/api';


export const LoginSignup = () => {

  const [state, setState] = useState("Log In");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const login = async () => {
    try {
      console.log(formData, "in loginsignup")
      const responseData = await loginUser(formData);
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/events");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      alert("Login failed: " + error.errors);
    }
  };

  const signup = async () => {
    try {
      const responseData = await addUser(formData);
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/events");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      alert("Signup failed: " + error.errors);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
        {state==="Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your username'/> :<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
        </div>
        <button onClick={() => {state==="Log In"?login():signup()}}>Continue</button>
        {state==="Sign Up" ? <p className="loginsignup-login">Already have an account? <span onClick={()=> setState("Log In")}>Log in here</span></p>
                           : <p className="loginsignup-login">Create an account? <span onClick={()=> setState("Sign Up")}>Click here</span></p>}        
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;