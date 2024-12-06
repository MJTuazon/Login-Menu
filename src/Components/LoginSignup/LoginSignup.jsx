import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

    const renderInput = (icon, placeholder) => (
        <div className="input">
            <img src={icon} alt="" />
            <input type="text" placeholder={placeholder} />
        </div>
    );

    return (
        <div className="container">
            <div className="navigation-header">
                {["Login", "Sign Up"].map((item) => (
                    <button
                        key={item}
                        className={action === item ? "nav-button active" : "nav-button"}
                        onClick={() => setAction(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="form-container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Sign Up" && renderInput(user_icon, "Name")}
                    {renderInput(email_icon, "Email ID")}
                    {renderInput(password_icon, "Password")}
                </div>
                {action === "Login" && (
                    <div className="forgot-password">
                        Lost Password? <span>Click Here!</span>
                    </div>
                )}
                <div className="submit-container">
                    <div className="submit" onClick={() => console.log(`${action} form submitted!`)}>
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
