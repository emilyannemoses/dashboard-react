import React from 'react';

function Greeting() {
    return (
        <div>
            <div className="user">
                <div id="greetingContainer">
                    This is the GREETING component
                    {/* <div className="text">Please enter your full name</div> */}
                    {/* <input id="name" type="text" /> */}
                </div>
                <div id="greetingDisplay" className="greeting" style={{display:'none'}}></div>
            </div>
        </div>
    )
}

export default Greeting;