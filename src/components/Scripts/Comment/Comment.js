import React from 'react'
import UserInfo from './components/UserInfo';

function formatDate(date) {
	return date.toLocaleDateString();
}

function Comment(props) {
	return (
		<div className="Comment">
			<UserInfo user={props.author} />
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
	);
}

const comment = {
	date: new Date(),
	text: `Uczę się React'a!`,
	author: {
		name: 'jakub104',
		avatarUrl: 'https://placekitten.com/g/64/64',
	},
};

export default Comment
export {comment}