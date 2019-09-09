import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

function NotFound(props) {
    function visitHome() {
        props.history.push('/');
    }

    return (
        <div className="address-container">
            <Header />
            <div className="margin-bottom-32">
                <h2>I'm Sorry, something went wrong</h2>
                <p>For any questions please reach out to lekikitrend@gmail.com</p>
            </div>
            <button className="primary" onClick={visitHome}>
                Return to Home
            </button>
        </div>
    );
}

export default withRouter(NotFound);
