import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import styles from './AddUser.module.css';

const AddUser = (props) => {
	const nameRef = useRef();
	const ageRef = useRef();

	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [isNotValid, setIsNotValid] = useState(false);
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		console.log(nameRef.current.value);
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setIsNotValid(true);
			setError({
				title: 'Invalid Input',
				message: 'You should enter a non-zero value in the fields.',
			});
			return;
		}
		if (+enteredAge < 1) {
			setIsNotValid(true);
			setError({
				title: 'Invalid Age Input',
				message: 'You should enter age value greater than 0.',
			});
			return;
		}
		console.log(enteredAge, enteredUsername);

		props.onAdd(enteredUsername, enteredAge);
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<Wrapper>
			{isNotValid ? (
				<ErrorModal
					title={error.title}
					message={error.message}
					onClick={() => setIsNotValid(false)}
				/>
			) : null}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enteredUsername}
						onChange={usernameChangeHandler}
						ref={nameRef}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						type="text"
						value={enteredAge}
						onChange={ageChangeHandler}
						ref={ageRef}
					/>
					<Button onClick={addUserHandler} type="submit">
						Add User
					</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
