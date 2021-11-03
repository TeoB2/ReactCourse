//import components
import classes from "./MealItem.module.css";

const MealItem = props => {
    //item price
    const price = `$${props.price.toFixed(2)}`;

    //return one element of meal list
    return  (
                <li className={classes.meal} key={props.id}>
                    <div>
                        <h3>{props.name}</h3>
                        <div className={classes.description}>{props.description}</div>
                        <div className={classes.price}>{price}</div>
                    </div>
                    <div></div>
                </li>
            );
};

//export component
export default MealItem;