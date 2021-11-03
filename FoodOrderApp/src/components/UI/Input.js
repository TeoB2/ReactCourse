//import components
import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    //div with inside the label and the input with the parameters passed by the parent component
    return  (
                <div className={classes.input}>
                    <label htmlFor={props.input.id}>{props.label}</label>
                    <input ref={ref} {...props.input} />
                </div>
            );
});

//export component
export default Input;