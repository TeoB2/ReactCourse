//import components
import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context"
import classes from "./Cart.module.css";

const Cart = props => {

    //get cart item
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    };


    //cycle all cart items element
    const cartItems =   <ul className={classes["cart-item"]}>
                            {cartCtx.items.map(item => 
                                <CartItem 
                                    key={item.id} 
                                    name={item.name}
                                    amount={item.amount} 
                                    price={item.price} 
                                    onRemove={cartItemRemoveHandler.bind(null, item.id)} 
                                    onAdd={cartItemAddHandler.bind(null, item)} 
                                />)
                            }
                        </ul>;

    //bool if cart is empty or not
    const hasItems = cartCtx.items.length > 0;

    //fixed price and concatenate $
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    //return a modal with all cart items element
    return  (
                <Modal onHideCart={props.onHideCart}>
                    {cartItems}
                    <div className={classes.total}>
                        <span>Total Amount:</span>
                        <span>{totalAmount}</span>
                    </div>
                    <div className={classes.actions}>
                        <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
                        {hasItems && <button className={classes.button}>Order</button>}
                    </div>
                </Modal>
            );
};

//export component
export default Cart;