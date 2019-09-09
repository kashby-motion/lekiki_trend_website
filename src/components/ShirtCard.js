import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';

function ShirtCard(props) {
    const [name] = useState(props.name);
    const googleURL = `${props.googleURL}`;
    const buttonTextTest = `${props.buttonText}`;
    const shirtAvailable = buttonTextTest === 'View Shirt';

    //when you click on the button
    function getName() {
        //if the button type is primary
        if (shirtAvailable) {
            //get url function
            const url = `/${name}`;
            props.history.push(url);
            //return the url
            return url;
        } else {
            // if the button time is notification go to google form
            window.open(googleURL, '_blank');
        }
    }

    return (
        <div className="card">
            {/* T-shirt Picture */}
            <img
                className="shirt-image"
                src={require(`../images/${props.shirtName.toLowerCase()}.jpg`)}
                alt={props.shirtDescription}
            />
            {/* Shirt Title */}
            <h2>{props.name}</h2>
            {/* Shirt Costs */}
            <h3 className="margin-bottom-16">{props.price}</h3>
            <button className={`${props.buttonType}`} onClick={getName}>
                {props.buttonText}
            </button>
        </div>
    );
}

export default withRouter(ShirtCard);
