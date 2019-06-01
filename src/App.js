import React from 'react';
import Blog from './components/Scripts/Blog/Blog'
function App() {
	const posts = [
		{
			id: 1,
			title: 'Witaj Świecie',
			content: 'Witamy uczacych się Reacta!',
		},
		{
			id: 2,
			title: 'Instalacja',
			content: 'Możesz zainstalowac Reacta używając npm.',
		},
		// {
		// 	id: 3,
		// 	title: 'Twój pierwszy projekt',
		// 	content: 'Możesz stworzyć nowy projekt Reacta używając npx.',
		// },
	]
	return (
		<>
			<Blog posts={posts} />
		</>
	);
}

export default App;
