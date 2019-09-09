import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

function SuccessMessage(props) {
    function visitHome() {
        props.history.push('/');
    }

    return (
        <div className="address-container">
            <Header />
            <div className="margin-bottom-32">
                <h2>Thank you for your purchase!</h2>
                <p>We will send an email within 24 hours with a comfirmation and tracking info</p>
            </div>
            <button className="primary" onClick={visitHome}>
                See our other shirts
            </button>
        </div>
    );
}

export default withRouter(SuccessMessage);
