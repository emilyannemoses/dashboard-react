import React, {Component} from 'react';
import Menu from '../Menu/Menu';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthorized: false,
    }
  }

  render() {
    return (
      <div id="dashboard-container" className="container">
        <Menu />
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
