//import components
import React from "react";

//create context for cart
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

//export component
export default CartContext;