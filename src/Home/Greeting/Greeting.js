import React from 'react';
import './Greeting.css';

function Greeting() {
    return (
        <div>
            <div className="user">
                <div id="greetingContainer">
                    <div className="text">Please enter your full name</div>
                    <div id="yourName"><input /></div>
                </div>
            </div>
        </div>
    )
}

export default Greeting;