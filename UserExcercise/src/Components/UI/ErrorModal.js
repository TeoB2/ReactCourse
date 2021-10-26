import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = props => {
    return (
    <div>
        <div className={styles.backdrop} onClick={props.onErrorHandler} />
        <Card cssClass={styles.modal}>
            <header className={styles.header}>
                <h2>{props.error.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.error.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onErrorHandler}>Okay</Button>
            </footer>
        </Card>;
    </div>)
};

export default ErrorModal;