//import components
import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context"
import classes from "./MealItem.module.css";

const MealItem = props => {
    //get cart item
    const cartCtx = useContext(CartContext);

    //item price
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    //return one element of meal list
    return  (
                <li className={classes.meal} key={props.id}>
                    <div>
                        <h3>{props.name}</h3>
                        <div className={classes.description}>{props.description}</div>
                        <div className={classes.price}>{price}</div>
                    </div>
                    <div>
                        <MealItemForm onAddToCart={addToCartHandler} />
                    </div>
                </li>
            );
};

//export component
export default MealItem;