//import components
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = props => {

    //cycle all cart items element
    const cartItems =   <ul className={classes["cart-item"]}>
                            {[{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map(item => <li key={item.id}>{item.name}</li>)}
                        </ul>;

    //return a modal with all cart items element
    return  (
                <Modal onHideCart={props.onHideCart}>
                    {cartItems}
                    <div className={classes.total}>
                        <span>Total Amount:</span>
                        <span>$35.98</span>
                    </div>
                    <div className={classes.actions}>
                        <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
                        <button className={classes.button}>Order</button>
                    </div>
                </Modal>
            );
};

//export component
export default Cart;