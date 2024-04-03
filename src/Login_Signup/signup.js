import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { auth } from './firebase'; // Import the Auth module
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    gender: "",
    institute: "",
    department: "",
    sem: "",
    password: "",
    confirmpassword: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    if (['firstname', 'lastname'].includes(name)) {
      value = value.replace(/[^a-zA-Z ]/g, ''); // Allow spaces too
    } else if (name === 'mobile') {
      value = value.replace(/[^0-9]/g, ''); // Restrict to numbers for mobile
    }

    setUserData({ ...userData, [name]: value});
  };
  const validateEmail = (email) => {
    const atIndex = email.indexOf('@');
    const dotIndex = email.indexOf('.');
    return atIndex >= 0 && dotIndex > 0 && dotIndex > atIndex;
  };
  const submitData = async (event) => {
    event.preventDefault();
    try{
      const userCredential=await createUserWithEmailAndPassword(auth,userData.email,userData.password);
      console.log(userCredential);
      const user=userCredential.user;

    }catch (error){
      alert(error);
    }

    if (!validateEmail(userData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (userData.password !== userData.confirmpassword) {
      alert("Passwords do not match! Please re-enter passwords.");
      return; // Prevent form submission if passwords don't match
    }
    
    
    
    const { firstname, lastname, email, mobile, gender, institute, department, sem, password, confirmpassword } = userData;
    const res = await fetch(
      "https://hostel-management-3999c-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          mobile,
          gender,
          institute,
          department,
          sem,
          password,
          confirmpassword
        })
      }
    );
    if (res) {
      setUserData({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        gender: "",
        institute: "",
        department: "",
        sem: "",
        password: "",
        confirmpassword: "",
      })
      alert("data entered");
    }
    else {
      alert("Enter the data")
    }

  };
  return (
    <div class="container1">
      <section class="form-section">
        <center>
          <div class="form-container">
            <img
              src="./images/logo.png"
              alt="Hostel Illustration"
              class="image"
            />
            <p>"Start your hostel journey with<br />
              a quick Login."</p>
            <form method="POST">
              <div class="input-group">
                <input
                  type="text"
                  id="firstName"
                  
                  placeholder="First Name"
                  aria-label="First Name"
                  value={userData.firstname}
                  onChange={postUserData}
                  name='firstname'
                  required
                />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  
                  value={userData.lastname}
                  onChange={postUserData}
                  name='lastname'
                  required
                />
              </div>
              <br />
              <div class="input-group">
                <input type="email" id="email" placeholder="Email" aria-label="Email" name='email'
                  value={userData.email}
                  onChange={postUserData}  required/>
              </div>
              <br />
              <div className="input-group">
                <input
                  type="tel" // Use type="tel" for phone number input
                  id="mobileNo"
                  placeholder="Mobile No"
                  aria-label="Mobile No"
                  maxLength="10"
                  value={userData.mobile}
                  onChange={postUserData}
                  name='mobile'
                  required
                // Add error class conditionally based on mobileNoError
                // className={mobileNoError ? 'input-error' : ''}
                />
                {/* {mobileNoError && <p className="error-message">{mobileNoError}</p>} */}
              </div>
              <br />
              <div class="input-group">
                <select id="gender" class="select-input" aria-label="Gender" name='gender'
                  value={userData.gender}
                  onChange={postUserData} required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <br />
              <div class="input-group">
                <select id="Institute" class="select-input" aria-label="Institute" name='institute'
                  value={userData.institute}
                  onChange={postUserData} required>
                  <option value="">Institute</option>
                  <option value="UVPCE">UVPCE</option>
                  <option value="BSPP">BSPP</option>
                  <option value="DCS">DCS</option>
                  <option value="SKPCER">SKPCER</option>
                  <option value="MUIS">MUIS</option>
                  <option value="CHAS">CHAS</option>
                  <option value="CMSR">CMSR</option>
                </select>
              </div>
              <br />
              <div class="input-group">
                <select id="department" class="select-input" aria-label="Department" name='department'
                  value={userData.department}
                  onChange={postUserData} required>
                  <option value="">Department</option>
                  <option value="IT">Information Technology</option>
                  <option value="CS">Computer Science</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <br />
              <div class="input-group">
                <select id="sem" class="select-input" aria-label="Sem" name='sem'
                  value={userData.sem}
                  onChange={postUserData} required>
                  <option value="">Sem</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
              <br />
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  aria-label="Password"
                  value={userData.password}
                  onChange={postUserData}
                  name='password'
                  required
                />
                {/* {passwordError && <p className="error-message">{passwordError}</p>} */}
              </div>
              <br />
              <div className="input-group">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  value={userData.confirmpassword}
                  onChange={postUserData}
                  name='confirmpassword'
                  required
                />
              </div>
              <button type="submit" class="button" onClick={submitData}>
                Sign Up
              </button>
            </form>
            <p>
              <Link to="/">Already have an account?</Link>
            </p>
          </div>
        </center>
      </section>

      <section class="image-section">
      </section>
    </div>
  );
};

export default Signup;
