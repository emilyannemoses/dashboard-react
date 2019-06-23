import React, {Component} from 'react';
import './Time.css';

class Time extends Component {
    timeFunc = () => {
        // Current time display
        let today = new Date();
        let time = today.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
        let hours = today.getHours();    
        // Message based on the time
        let message = '';
        if (hours < 11) {
            message = 'good morning';
        } else if (hours > 17) {
            message = 'good evening';
        } else {
            message = 'good afternoon';
        }
        return {message, time}
    }
    render() {
        const {message, time} = this.timeFunc();
        return (
            <div>
                <div id="time" className="time">{time}</div>
                <div id="greeting" className="timeGreeting">{message}</div>
            </div>
        )
    }
}

export default Time;