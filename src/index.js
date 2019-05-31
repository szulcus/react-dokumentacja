import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import avatar from './components/images/me.png';
import * as serviceWorker from './serviceWorker';

function formatName(user) {
	return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
	if (user) {
		return <h1>Witaj, {formatName(user)}!</h1>;
	}
	return <h1>Witaj, nieznajomy</h1>;
}

const user = {
	firstName: 'Jakub',
	lastName: 'Schulz',
	avatarUrl: { avatar }
};

const reactElement = React.createElement(
	'h1',
	{ className: 'greeting' },
	'Witaj świecie!'
);

const element = (
	<>
		{reactElement}
		<img className="avatar" src={avatar} alt="" />
		{getGreeting(user)}
		<div tabIndex="0">Tab - test</div>
	</>
);

ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();
