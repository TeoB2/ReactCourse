import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onErrorHandler} />;
};

const ModalOverlay = (props) => {
    return (<Card cssClass={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onErrorHandler}>Okay</Button>
        </footer>
    </Card>);
};

const ErrorModal = props => {
    return (
    <React.Fragment>
        {ReactDom.createPortal(<Backdrop onClick={props.onErrorHandler} />, document.getElementById("backdrop-root"))}
        {ReactDom.createPortal(<ModalOverlay title={props.error.title} message={props.error.message} onErrorHandler={props.onErrorHandler} />, document.getElementById("modal-root"))}
    </React.Fragment>)
};

export default ErrorModal;