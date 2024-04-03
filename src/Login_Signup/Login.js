import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { auth, app } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const naviagte=useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    

    try {
      const userCredential=await signInWithEmailAndPassword(auth,email,password);
      console.log(userCredential);
      alert("Logined succesfully")
      naviagte("/signup");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
      naviagte("/");
    }
  };

  return (
    <div className="container">
      <div className="left-half"></div>
      <div className="right-half">
        <div className="logo">
          <img src="./images/logo.png" alt="login" className="loginimg" />
          <p>"Start your hostel journey with<br />
            a quick Login."</p>
        </div>
        <form onSubmit={signIn}>
          <div className="login-form">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <p className="pass">
              <Link to="/forgetpassword">Forget Password?</Link>
            </p>
            <button type="submit" name="submit" className="input-submit">
              Login
            </button>
            <p>
              <Link to="/signup">Don't have an account?</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
