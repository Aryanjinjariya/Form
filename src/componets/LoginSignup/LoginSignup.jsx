import React, { useState } from 'react';
import email_Icon from '../Assets/email.png';
import Password_Icon from '../Assets/password.png';
import user_Icon from '../Assets/person.png';
import './LoginSignup.css';
export const LoginSignup = () => {
  const[action,setAction]=useState("Sign Up");
  return (
    <div className='container'>
    <div className='header'>
    <div className='textarea'>{action}</div>
    <div className='underline'></div>
    </div>
    <div className='Inputs'>
    {action==="Login"?<div></div>: < div className='Input'><img src={user_Icon}alt=''/>
    <input type='Text' placeholder='Name'/></div>}
    
    <div className='Input'>
    <img src={email_Icon}alt=''/>
    <input type='email' placeholder='Email ID'/>
    </div>
    <div className='Input'>
    <img src={Password_Icon}alt=''/>
    <input type='password' placeholder='Password'/>
    </div>
    {action==="Sign Up"?<div></div>:<div className='Forgot-password'>Forget Password?<span>Click Here</span></div>}
    <div className='Submit-container'>
    <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
    <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
    </div>
    </div>
    </div>
  )
}

