import React, {Component} from 'react';
import './TodaysDate.css'
import {Link} from 'react-router-dom';

class TodaysDate extends Component {
    getDate = () => {
        let today = new Date();
        let month = today.getMonth();
        let day = today.getDay();
        let numberDay = today.getDate();
        let year = today.getFullYear();
        let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let dayOfWeek = weekDays[day]
         return {month, numberDay, year, months, dayOfWeek}
    }
    render() {
        const {month, numberDay, year, months, dayOfWeek} = this.getDate();
        const calendarHref = this.props.calendarHref;
        return (
            <div className="todays-date">
                <h1 id="date">{dayOfWeek}</h1>
                <h1 id="date">{months[month]} {numberDay},  {year}</h1>
                <br></br>
                {
                    calendarHref ? (
                        <a href={calendarHref} target="_blank" rel="noopener noreferrer">Go to your calendar</a>
                    ) : (
                        <div></div>
                    )
                }
                <p><Link to="/settings">go to settings to edit calendar</Link></p>
            </div>
        )
    }
}

export default TodaysDate;