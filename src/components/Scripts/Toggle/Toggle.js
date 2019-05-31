import React from 'react';

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'Włączony' : 'Wyłączony'}
			</button>
		)
	}
}

class LogginButton extends React.Component {
	handleClick = () => {
		console.log('this ma wartość:', this)
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				Kliknij mnie!
			</button>
		)
	}
}

// class LogginButton extends React.Component {
// 	handleClick() {
// 		console.log('this ma wartość:', this)
// 	}

// 	render() {
// 		return (
// 			<button onClick={(e) => this.handleClick(e)}>
// 				Kliknij mnie!
// 			</button>
// 		)
// 	}
// }

export default Toggle
export { LogginButton }