import React from 'react'

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Woda będzie sie gotować.</p>
	}
	return <p>Woda nie będzie sie gotować.</p>
}

export default BoilingVerdict