import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Resume from './Resume';
import './common.css';

class App extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className="App">
        <Resume />
      </div>
    );
  }
}

export default App;
