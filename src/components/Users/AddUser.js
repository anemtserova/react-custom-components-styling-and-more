import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddUser.module.css';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [users, setUsers] = useState([]);

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length !== 0 && enteredAge.trim().length !== 0) {
			if (+enteredAge > 0) {
				console.log(enteredAge, enteredUsername);
				setEnteredUsername('');
				setEnteredAge('');
			}
		}
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					type="text"
					value={enteredUsername}
					onChange={usernameChangeHandler}
				/>
				<label htmlFor="age">Age (Years)</label>
				<input
					id="age"
					type="text"
					value={enteredAge}
					onChange={ageChangeHandler}
				/>
				<Button onClick={addUserHandler} type="submit">
					Add User
				</Button>
			</form>
		</Card>
	);
};

export default AddUser;
