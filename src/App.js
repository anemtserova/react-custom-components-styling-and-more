import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
	const [activeUsers, setActiveUsers] = useState([]);

	const addToActiveUsers = (name, age) => {
		setActiveUsers((prevActiveUsers) => {
			return [
				...prevActiveUsers,
				{
					name: name,
					age: age,
					id: Math.random().toString(),
				},
			];
		});
	};

	return (
		<div>
			<AddUser onAdd={addToActiveUsers} />
			<UserList users={activeUsers} />
		</div>
	);
}

export default App;
