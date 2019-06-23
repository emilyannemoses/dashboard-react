import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameVal: '',
      greetingToggle: false
    };
  }
  poopFunc = (event) => {
    if (event.charCode === 13) {
      this.setState({
        greetingToggle: true
      });
    }
  }
  saveToLS = (value) => {
    let parsingNameLS = JSON.parse(localStorage.getItem('names'));
    parsingNameLS = value
    localStorage.setItem('names', JSON.stringify(parsingNameLS));
  }
  setNameState = (char) => {
    this.setState({
        nameVal: char.target.value
    });
    this.saveToLS(char.target.value)
  }

  render() {
    return (
      <div id="dashboard-container" className="container">
        <Router>
          <Menu
            nameVal={this.state.nameVal}
            setNameState={this.setNameState}
            greetingToggle={this.state.greetingToggle}
            poopFunc={this.poopFunc}
          />
        </Router>
        {/* main area will import:
        time/name, 
        weather,
        spotify component,
        date/calendar
        todo list
        
        And will toggle between:
        Home
        Settings
        About
        Contact*/}
      </div>
    )
  }
}

export default App;
