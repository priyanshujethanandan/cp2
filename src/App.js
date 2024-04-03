import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login_Signup/Login';
import Signup from './Login_Signup/signup';
import ForgetPassword from './Login_Signup/forgetpassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
