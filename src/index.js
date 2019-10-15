import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/containers/App';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.GA);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
