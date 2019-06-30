import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Menu from '../Menu/Menu';
import Home from '../Home/Home'
import Settings from '../Settings/Settings'
import Contact from '../Contact/Contact'
import About from '../About/About'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameVal: '',
      greetingToggle: false,
      calendarHref: '',
    }
  }
  componentDidMount(){
    if (localStorage.names) {
      this.setState({
        greetingToggle: true
      })
    }
  }
  toggleName = (event) => {
    if (event.charCode === 13 && this.state.nameVal.length > 0) {
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
  addHref = (event) => {
    // https://calendar.google.com/calendar/r/day
    this.setState({
        calendarHref: event.target.value
    })
    const calendarHref = event.target.value;
    let parsingCalLS = JSON.parse(localStorage.getItem('calendar'));
    parsingCalLS = calendarHref;
    localStorage.setItem('calendar', JSON.stringify(parsingCalLS))
  }
  render() {
    return (
      <div id="dashboard-container" className="container">
        <BrowserRouter>
        <Menu
          addHref={this.addHref}
          calendarHref={this.state.calendarHref}
          nameVal={this.state.nameVal}
          setNameState={this.setNameState}
          greetingToggle={this.state.greetingToggle}
          toggleName={this.toggleName}
        />
          <Switch>
            <Route exact path="/dashboard-react"
              render={route => <Home {...route} 
              addHref={this.addHref}
              calendarHref={this.state.calendarHref}
              nameVal={this.state.nameVal}
              setNameState={this.setNameState}
              greetingToggle={this.state.greetingToggle}
              toggleName={this.toggleName}
              />}
            />
            <Route exact path="/settings"
              render={route => <Settings {...route} 
              calendarHref={this.props.calendarHref}
              addHref={this.props.addHref}
            />}
            />
            <Route exact path="/about"
              render={route => <About {...route} />}
            />
            <Route exact path="/contact"
              render={route => <Contact {...route} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
