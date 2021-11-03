//import components
import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    //count items in cart
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);

    //return button with open cart
    return  (
                <button className={classes.button} onClick={props.onClick}>
                    <span className={classes.icon}>
                        <CartIcon />
                    </span>
                    <span>Your Cart</span>
                    <span className={classes.badge}>
                        {numberOfCartItems}
                    </span>
                </button>
            );
};

//export component
export default HeaderCartButton;