import React from 'react';
import './Date.css'
import {Link} from 'react-router-dom';

function Date() {
    return (
        <div>
            <h1 id="date">Today's date</h1>
            <p><Link to="/settings">go to settings to edit calendar</Link></p>
        </div>
    )
}

export default Date;