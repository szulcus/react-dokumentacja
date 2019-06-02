import React from 'react'

const scaleNames = {
	c: 'Celsjuszach',
	f: 'Fahrenheitach'
}

// class TemperatureInput extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {temperature: ''};
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(e) {
// 		this.setState({temperature: e.target.value});
// 	}

// 	render() {
// 		const temperature = this.state.temperature;
// 		const scale = this.props.scale;
// 		return (
// 			<fieldset>
// 				<legend>Podaj temperature w {scaleNames[scale]}:</legend>
// 				<input
// 					value={temperature}
// 					onChange={this.handleChange}
// 				/>
// 			</fieldset>
// 		);
// 	}
// }

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {temperature: ''};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>Podaj temperature w {scaleNames[scale]}:</legend>
				<input
					value={temperature}
					onChange={this.handleChange}
				/>
			</fieldset>
		);
	}
}

export default TemperatureInput