import React from 'react'

class Welcome extends React.Component {
	render() {
		return <h1>Cześć, {this.props.name}</h1>
	}
}

export default Welcome