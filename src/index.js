import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';



const element = <App/>;

ReactDOM.render(element , document.getElementById('root'));

serviceWorker.unregister();
