import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function tick(user) {
	const element = (
		<>
			<h1>Witaj świecie!</h1>
			<h2>
				Aktualny czas: {new Date().toLocaleTimeString()}
			</h2>
		</>
	);
	ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

serviceWorker.unregister();
