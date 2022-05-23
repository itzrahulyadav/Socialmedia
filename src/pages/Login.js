import React from 'react'
import {auth,provider} from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { FcGoogle } from 'react-icons/fc';

const Login = ({setIsAuth}) => {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
        signInWithPopup(auth,provider).then((result) => {
              localStorage.setItem("isAuth",true);
              setIsAuth(true);
              navigate('/');
        })
  }
  return (
    <div className  = "loginPage">
      <div className = "login-container">
      <p>Sign in with google to continue or click on home</p>
      <button className = "login-with-google-button" onClick = {signInWithGoogle}>
        <FcGoogle /> sign in
      </button>
      </div>
    </div>
  )
}

export default Login