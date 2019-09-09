import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
import AddressForm from './AddressForm';
import shirtImage from '../images/autentico.jpg';

function ShirtAutentico(props) {
    // actual Skus
    const smallSku = 'sku_FjifrBAEg2gfuf';
    const mediumSku = 'sku_FjifHDP8KUeKfM';
    const largeSku = 'sku_FjigAoHoJuIH2w';

    //test skus
    // const smallSku = 'sku_Fhr4OckKneZqEE';
    // const mediumSku = 'sku_FihP9XufHxebxv';
    // const largeSku = 'sku_FjibfVW1LXXPrK';

    const [shirtSku, setShirtSku] = useState(smallSku);
    const [shirtSize, setShirtSize] = useState('small');
    const [purchaseClicked, setPurchaseClicked] = useState(false);

    //get the right sku for checkout button
    function shirtSelection(e) {
        //change the URL of the button based on the shirt size selection
        if (e.currentTarget.value === 'small') {
            setShirtSku(smallSku);
            setShirtSize('Small');
        } else if (e.currentTarget.value === 'medium') {
            setShirtSku(mediumSku);
            setShirtSize('Medium');
        } else if (e.currentTarget.value === 'large') {
            setShirtSku(largeSku);
            setShirtSize('Large');
        }
    }

    function purchaseClick() {
        setPurchaseClicked(true);
    }

    if (purchaseClicked) {
        return (
            <div className="address-container">
                <Header />
                <AddressForm shirtName="Autentico" size={shirtSize} shirtSku={shirtSku} />
            </div>
        );
    }

    return (
        <div className="shirt-page">
            <Header />
            <div className="shirt-layout">
                {/* Shirt Image */}
                <img
                    src={shirtImage}
                    className="shirt-page-image"
                    alt="Gray shirt with Christ statue looking over pão de açucar"
                />
                {/* Shirt Text */}
                <div className="shirt-text">
                    <h2>Autentico (t-shirt)</h2>
                    <h3>$25</h3>
                    <p className="small-text margin-bottom-24">Free Shipping</p>
                    {/* Shirt Size Picker */}
                    <form className="shirt-size-selection">
                        <label>Select Shirt Size</label>
                        <div className="form-row">
                            <label>
                                <input
                                    type="radio"
                                    name="shirtsize"
                                    value="small"
                                    onChange={shirtSelection}
                                    defaultChecked
                                />
                                Small
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="shirtsize"
                                    value="medium"
                                    onChange={shirtSelection}
                                />
                                Medium
                            </label>
                            <label className="margin-bottom-24">
                                <input
                                    type="radio"
                                    name="shirtsize"
                                    value="large"
                                    onChange={shirtSelection}
                                />
                                Large
                            </label>
                        </div>
                        <button
                            type="button"
                            className="primary"
                            role="link"
                            onClick={purchaseClick}
                        >
                            Purchase
                        </button>
                        <div id="error-message"></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ShirtAutentico;
