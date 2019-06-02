import React from 'react'
import FancyBorder from './FancyBorder';

// function WelcomeDialog() {
// 	return (
// 		<FancyBorder color="pink">
// 			<h1 className="Dialog-title">
// 				Witaj
// 			</h1>
// 			<p className="Dialog-message">
// 				Dziękujemy za wizytę na naszym statku kosmicznym!
// 			</p>
// 		</FancyBorder>
// 	);
// }

// function Dialog(props) {
// 	return (
// 		<FancyBorder color="blue">
// 			<h1 className="Dialog-title">
// 				{props.title}
// 			</h1>
// 			<p className="Dialog-message">
// 				{props.message}
// 			</p>
// 		</FancyBorder>
// 	);
// }

// function WelcomeDialog() {
// 	return (
// 		<Dialog
// 			title="Witaj"
// 			message="Dziękujemy za wizytę!"
// 		/>
// 	);
// }

function Dialog(props) {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
				{props.title}
			</h1>
			<p className="Dialog-message">
				{props.message}
			</p>
			{props.children}
		</FancyBorder>
	);
}

class SignUpDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {login: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
	}

	handleChange(e) {
		this.setState({login: e.target.value})
	}

	handleSignUp() {
		if(this.state.login === '') {
			alert(`Wpisz swoje imię!`)
		}
		else {
			alert(`Witaj na pokładzie, ${this.state.login}!`)
		}
	}

	render() {
		return (
			<Dialog
				title="Program Eksproracji Marsa"
				message="Jak powinniśmy się do ciebie zwracać?"
			>
				<input
					value={this.state.login}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSignUp}>
					Zapisz mnie!
				</button>
			</Dialog>
		);
	}
}

// export default WelcomeDialog
export default SignUpDialog