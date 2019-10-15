import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/containers/App';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactGA.initialize('UA-150069983-1');
