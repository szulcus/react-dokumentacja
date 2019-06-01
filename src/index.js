import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import NumberList from './components/Scripts/NumberList/NumberList1'
// import App from './App'

const numbers = [1, 2, 3, 4]
ReactDOM.render(
	<NumberList numbers={numbers} />,
	document.getElementById('root')
);

serviceWorker.unregister();
