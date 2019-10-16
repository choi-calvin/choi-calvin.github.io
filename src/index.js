import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/containers/App';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
