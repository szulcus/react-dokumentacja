import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'

ReactDOM.render(<input value="Cześć!" />, document.getElementById('root'));

setTimeout(function() {
	ReactDOM.render(<input value='' />, document.getElementById('root'));
}, 1000);

serviceWorker.unregister();
