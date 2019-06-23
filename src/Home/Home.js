import React, {Component} from 'react';
import './Home.css';
import Music from './Music/Music';
import Date from './Date/Date'
import Todo from './Todo/Todo';
import Time from './Time/Time';
import Weather from './Weather/Weather';

class Home extends Component {
    render() {
        let lsName;
        if (localStorage.names) {
            lsName = localStorage.getItem('names').replace(/"/g,"");
        }
        return (
            <div className="main-grid">
                <div className="block one">
                    <Time />
                    <p>{lsName}</p>
                </div>
  
                <div className="block two">
                    <Weather />
                </div>
  
                <div className="block three">
                    <Music />
                </div>
  
                <div className="block four">
                    <Date />
                </div>
  
                <div className="block five">
                    <Todo />
                </div>
            </div>
        )
    }
}

export default Home;