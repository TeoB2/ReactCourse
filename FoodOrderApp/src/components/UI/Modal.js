//import components
import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

//element where insert modal
const portalElement = document.getElementById("overlays");

const Backdrop = props => {
    //return black screen for modal
    return  (
                <div className={classes.backdrop} onClick={props.onHideCart} />
            );
};

const ModalOverlay = props => {
    //return modal content
    return  (
                <div className={classes.modal}>
                    <div className={classes.content}>
                        {props.children}
                    </div>
                </div>
            );
};

const Modal = props => {
    //return two portal, Backdrop is a black screen and ModalOverlay is modal content
    return  (
                <Fragment>
                    {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
                    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
                </Fragment>
            );
};

//export component
export default Modal;