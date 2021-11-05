//import components
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    //count items in cart
    const numberOfCartItems = items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);

    //dynamic button classes if btnIsHighlighted is true or false
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    //effect for set btnIsHighlighted true and create the animation (activated each change of items)
    useEffect(() => {
        if(items.length <= 0)
        {
            return false;
        }

        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        //return cleaner function
        return () => {
            clearTimeout(timer);
        };

    }, [items]);

    //return button with open cart
    return  (
                <button className={btnClasses} onClick={props.onClick}>
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