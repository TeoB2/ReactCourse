//import components
import classes from "./Card.module.css";

const Card = (props) => {
    return  (
                <div className={classes.card}>
                    {props.children}
                </div>
            );
};

//export component
export default Card;