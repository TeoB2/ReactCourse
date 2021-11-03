//import components
import classes from "./Input.module.css";

const Input = props => {
    //div with inside the label and the input with the parameters passed by the parent component
    return  (
                <div className={classes.input}>
                    <label htmlFor={props.input.id}>{props.label}</label>
                    <input {...props.input} />
                </div>
            );
};

//export component
export default Input;