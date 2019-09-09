import React from 'react';
import '../App.css';

function SignUpCard(props) {
    function signUpForm() {
        const url =
            'https://docs.google.com/forms/d/e/1FAIpQLSeZwBbZVM-t6MC2B_M5-H6Oqj195dayYnsfSNUdxsxGoXFcwQ/viewform?usp=sf_link';
        window.open(url, '_blank');
    }

    return (
        <div className="card">
            <h2>Join Newsletter</h2>
            <p className="margin-bottom-16">Find out when new shirts arrive in our store.</p>
            <button className="notify-btn" onClick={signUpForm}>
                Sign Up
            </button>
        </div>
    );
}

export default SignUpCard;
