import React, {Component} from 'react';
import './Home.css';
import Weather from './Weather/Weather';
import Music from './Music/Music';
import Date from './Date/Date'
import Todo from './Todo/Todo';

class Home extends Component {

    render() {
        return (
            <div className="main-grid">
                <div className="block one">
                    <div id="greetingDisplayFirst" className="timeGreeting"></div>
                    {/* <div id="time" className="time"></div>
                    <div id="greeting" className="timeGreeting"></div>
                    */}
                </div>
  
                <div className="block two">
                    <Weather />
                    {/* <div id="weatherWidget" className="weatherWidget">93</div>
                    <div id="description" className="description">Clear</div>
                    <div id="homeCity" className="homeCity">Austin</div> */}
                </div>
  
                <div className="block three">
                    <Music />
                    {/* <div className="music"><p>now playing on spotify</p></div>
                    <div className="info">
                    <div className="progress-bar">
                        <div className="time--current">1:25</div>
                        <div className="time--total">-3:25</div>
                        <div className="fill"></div>
                    </div>
                    <div className="currently-playing">
                        <h2 className="song-name">Paris in the Rain</h2>
                        <h3 className="artist-name">Lauv</h3>
                    </div>
                    <div className="controls">
                        <div className="option"><i className="fas fa-bars"></i></div>
                        <div claclassNamess="volume"><i className="fas fa-volume-up"></i></div>
                        <div className="previous"><i className="fas fa-backward"></i></div>
                        <div className="play"><i className="fas fa-play"></i></div>
                        <div className="next"><i className="fas fa-forward"></i></div>
                        <div className="shuffle"><i className="fas fa-random"></i></div>
                        <div className="add"><i className="fas fa-plus"></i></div>
                    </div>
                    </div> */}
                </div>
  
                <div className="block four">
                    <Date />
                    {/* <h1 id="date"></h1>
                    <a id="linkToCalendar" href="" target="_blank"></a>
                    <p><a href="">go to settings to edit calendar</a></p> */}
                </div>
  
                <div className="block five">
                    <Todo />
                    {/* <div className="reminders">
                        <p>reminders</p>
                        <div className="reminder--btns" onclick="displayAddItem()">
                        <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="reminders--list">
                        <ul id="listOfItemsID" className="things">
                        </ul>
                    </div>
                    <form id="formToAddItemsID" className="addItems" style={{display: 'none'}}>
                        <input type="text" name="item" placeholder="What do you need to do today?" required />
                        <input type="submit" value="Add Item" />
                    </form> */}
                </div>
            </div>
        )
    }
}

export default Home;