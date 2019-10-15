import React, { Component } from 'react';
import './common.css';
import Resume from './Resume';
import ReactGA from 'react-ga';

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-150069983-1');
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
