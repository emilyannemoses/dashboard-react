import React from 'react';
import './Weather.css';

function Weather() {
    return (
        <div>
            <div id="weatherWidget" className="weatherWidget">93</div>
            <div id="description" className="description">Clear</div>
            <div id="homeCity" className="homeCity">Austin</div>
        </div>
    )
}

export default Weather;