import React, { useState, useEffect } from "react";
import Header from './Header'
import './LR.css'
import "./Box.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch } from 'react-redux';
import { login } from '../auth';




const Login = () => {
  

  const dispatch = useDispatch();
  const history = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault()
        try{
             await axios.post("http://localhost:3000/",{
                email,password
             })
             .then(res=>{
                if(res.data=="exist"){
                  dispatch(login(email));
                  history('/home',{state:{id:email}})
                             
                }
                else if(res.data=="notexist"){
                   alert("There is no such user")
                }
             })
             .catch(e=>{
                alert("wrong detail")
                console.log(e)
             })
        }
        catch(e){
            console.log(e);
        }
    }
  return (
    <div>
      <Header />
      
      <div> 
     
      <body className="Login-body">
        {/* <div className="l-img"> */}

        <div className="auth-form-container">
          <h2 className="Login-name">Login</h2>

          <form className="login-form" action="POST">
            <label className="Email-btn" htmlfor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="Email-btn" htmlfor="password">
              password
            </label>
            <input
              type="password"
              placeholder="*********"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="btn-btn1" type="submit" onClick={submit} >
              Log IN
            </button>
          </form>

          {/* <button className= "link-btn" onClick={()=>props.onFormSwitch('register')} >Don't have a account? Register Here</button> */}
        </div>
        <div className="l-img">       
          <img
          className="l-img"
          src="https://d38cf3wt06n6q6.cloudfront.net/tyasuitefront/webgpcs/images/asset-management-software.png"
        />
        </div>

        <br/>
        <div className="content">
        <h2 className="content">"Welcome to great karikalan magic show"</h2>
        </div>
      </body>
     
    </div>
    <Footer /> 
    </div>
  );
};

export default Login;
