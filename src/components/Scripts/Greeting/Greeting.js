import React from 'react'

function UserGreeting(props) {
	return <h1>Witamy ponownie!</h1>;
}

function GuestGreeting(props) {
	return <h1>Proszę się zarejestrować</h1>;
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}

export default Greeting