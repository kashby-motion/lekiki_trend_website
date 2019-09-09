import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

function AddressForm(props) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [st, setSt] = useState('');
    const [zip, setZip] = useState('');

    var stripe = window.Stripe('pk_live_gZz8zK2PbYL5CyKgRo5PHkej00tlmzd1Bz');

    //validate the form funciton

    function submitBtn(e) {
        e.preventDefault();

        //validate the forms

        //gather props from inputs
        let templateParams = {
            name: name,
            email: email,
            address: address,
            city: city,
            state: st,
            zip: zip,
            size: `${props.size}`,
            shirtName: `${props.shirtName}`
        };
        // Send email to me with information from user
        emailjs
            .send('gmail', 'lekiki_trend_t_shirt', templateParams, 'user_ZNRCkUWp1sx3jKPQ1AAV1')
            .then(
                function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                },
                function(error) {
                    console.log('FAILED...', error);
                }
            );
        //STRIPE CHECKOUT
        const finalShirtSku = `${props.shirtSku}`;
        stripe
            .redirectToCheckout({
                items: [{ sku: finalShirtSku, quantity: 1 }],

                // Do not rely on the redirect to the successUrl for fulfilling
                // purchases, customers may not always reach the success_url after
                // a successful payment.
                // Instead use one of the strategies described in
                // https://stripe.com/docs/payments/checkout/fulfillment
                successUrl: window.location.protocol + '//lekikitrend.com/success',
                cancelUrl: window.location.protocol + '//lekikitrend.com/canceled',
                customerEmail: email
            })
            .then(function(result) {
                if (result.error) {
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, display the localized error message to your customer.
                    var displayError = document.getElementById('error-message');
                    displayError.textContent = result.error.message;
                }
            });
    }

    return (
        <div>
            <h3 className="margin-bottom-24">Please enter your email & shipping info</h3>
            <form id="shipping-info" onSubmit={submitBtn}>
                <div className="form-row">
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-row">
                    <label>Name on Package</label>
                    <input
                        name="name"
                        type="text"
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-row">
                    <label>Address</label>
                    <input
                        name="address"
                        type="text"
                        onChange={e => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-row">
                    <label>City</label>
                    <input
                        name="city"
                        type="text"
                        onChange={e => setCity(e.target.value)}
                        required
                    />
                </div>
                <div className="form-row">
                    <label>State</label>
                    <input
                        name="state"
                        type="text"
                        onChange={e => setSt(e.target.value)}
                        required
                    />
                </div>
                <div className="form-row">
                    <label>Zip</label>
                    <input
                        className="margin-bottom-24"
                        name="zip"
                        type="number"
                        onChange={e => setZip(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Finalize Payment</button>
                {/* <button className="primary" role="link" onClick={buyNow}>
                    Purchase
                </button> */}
                <div className="note">
                    <p>Note: If you are having difficulty, please contact lekikitrend@gmail.com</p>
                </div>
            </form>
        </div>
    );
}

export default AddressForm;
