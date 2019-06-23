import React, {Component} from 'react';
import './Time.css';

class Time extends Component {
    render() {
        return (
            <div>
                <div id="time" className="time"></div>
                <div id="greeting" className="timeGreeting"></div>
            </div>
        )
    }
}

export default Time;