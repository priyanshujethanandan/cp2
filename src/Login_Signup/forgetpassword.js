import React,{useState} from "react";
import Signup from "./signup";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Check if an account exists with the provided email
            const confirmResult = await auth.fetchSignInMethodsForEmail(email);
            if (confirmResult.signInMethods.length > 0) {
                // Account exists with the email
                // Proceed with password reset or other actions as needed
                console.log('Account exists with email:', email);
                alert("account exsist");
                // ... (handle successful confirmation and next steps)
            } else {
                // Email not found in Firebase Authentication
                setError('Email not found. Please check the email or create an account.');
            }
        } catch (error) {
            console.error('Error checking email:', error);
            setError('Something went wrong. Please try again later.');
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
                <form onSubmit={handleSubmit}>
                    <div className="login-form">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ConfirmEmail" /><br />

                        <button type="submit" name="submit" className="input-submit">
                            Confirm
                        </button>
                        <p className="pass">
                            <Link to="/signup">Need help?</Link>
                        </p>

                    </div>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};
export default ForgetPassword;