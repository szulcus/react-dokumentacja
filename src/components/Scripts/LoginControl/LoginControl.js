import React from 'react'
import Greeting from '../Greeting/Greeting';

function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Zaloguj się
		</button>
	)
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Wyloguj się
		</button>
	)
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn: false};
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true})
	}

	handleLogoutClick() {
		this.setState({isLoggedIn: false})
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;

		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />;
		}
		
		else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		}

		return (
			<>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</>
		)
	}
}

export default LoginControl