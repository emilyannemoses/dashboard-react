import React, {Component} from 'react';
import './TodaysDate.css'
import {Link} from 'react-router-dom';

class TodaysDate extends Component() {
    getDate = () => {
         let today = new Date();
         let month = today.getMonth();
         let day = today.getUTCDate();
         let year = today.getFullYear();
         let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return {month, day, year, months}
    }
    render() {
        const {month, day, year, months} = this.getDate();
        return (
            <div>
                <h1 id="date">{months[month]} {day}  {year}</h1>
                <p><Link to="/settings">go to settings to edit calendar</Link></p>
            </div>
        )
    }
}

export default TodaysDate;