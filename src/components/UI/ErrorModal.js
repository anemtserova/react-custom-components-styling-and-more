import React, { Fragment } from 'react';
import reactDom from 'react-dom';
import Card from './Card';
import Button from './Button';

import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.onClick}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return (
		<Fragment>
			{reactDom.createPortal(
				<Backdrop onClick={props.onClick} />,
				document.getElementById('backdrop-root')
			)}
			{reactDom.createPortal(
				<ModalOverlay
					onClick={props.onClick}
					title={props.title}
					message={props.message}
				/>,
				document.getElementById('overlay-root')
			)}
		</Fragment>
	);
};

export default ErrorModal;
