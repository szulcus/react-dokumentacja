import React from 'react';

function Mailbox(props) {
	const unreadMessages = props.unreadMessages;
	return (
		<>
			<h1>Cześć!</h1>
			{unreadMessages.length > 0 && 
				<h2>
					Masz {unreadMessages.length} nieprzeczytanych wiadomości.
				</h2>
			}
		</>
	);
}

export default Mailbox