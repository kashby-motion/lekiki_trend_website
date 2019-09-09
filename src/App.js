import React from 'react';
import logo from './images/logo_mono.svg';
import './App.css';
import ShirtCard from './components/ShirtCard';
import SignUpCard from './components/SignUpCard';

function App() {
    return (
        <div className="App">
            <header>
                <img src={logo} alt="logo" />
                <div className="header-text">
                    <h3 className="margin-bottom-8">Brazilian Shirt Designs</h3>
                    <p>Free Shipping on All Shirts</p>
                </div>
            </header>
            <div className="all-shirts">
                <ShirtCard
                    shirtName="carioca"
                    name="Carioca"
                    price="$25"
                    buttonType="primary-btn"
                    buttonText="View Shirt"
                    shirtDescription="grey shirt with Christ statue overlooking pao de açucar"
                />
                <ShirtCard
                    shirtName="kombi"
                    name="Kombi"
                    price="$25"
                    buttonType="primary-btn"
                    buttonText="View Shirt"
                    shirtDescription="blue shirt with a line drawing of an old VW bus"
                />
                <ShirtCard
                    shirtName="autentico"
                    name="Autentico"
                    price="$25"
                    buttonType="primary-btn"
                    buttonText="View Shirt"
                    shirtDescription="black shirt that has a stamp that says made in brazil"
                />
                <ShirtCard
                    shirtName="formas"
                    name="Formas"
                    price="$25"
                    buttonType="primary-btn"
                    buttonText="View Shirt"
                    shirtDescription="navy blue shirt with shapes from the Brazlian flag, blue circle, yellow triangle, and green square"
                />
                <ShirtCard
                    shirtName="padrao"
                    name="Padrão"
                    googleURL="https://forms.gle/A5K9PYVENDJ3kFzLA"
                    price="Sold Out"
                    buttonType="notify-btn"
                    buttonText="Get Notified"
                    shirtDescription="navy blue shirt with repeating pattern shapes from the brazlian flag"
                />
                <ShirtCard
                    shirtName="bookontable"
                    name="Book is on the Table"
                    googleURL="https://forms.gle/c2KQJNTqwM8mqXHp9"
                    price="Sold Out"
                    buttonType="notify-btn"
                    buttonText="Get Notified"
                    shirtDescription="grey shirt with line art of a book on a table"
                />
            </div>
            <SignUpCard />
            <footer>©2019 Lekiki</footer>
        </div>
    );
}

export default App;
