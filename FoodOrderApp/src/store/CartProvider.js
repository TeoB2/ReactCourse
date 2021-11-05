//import components
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

//update the cart
const cartReducer = (state, action) => {
    //add item
    if(action.type === "ADD")
    {
        //search item into the cart
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        //get item 
        const existingCartItem = state.items[existingCartItemIndex];
        
        let updateItems;

        if(existingCartItem)
        {
            //update amount
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updateItems = [...state.items]
            updateItems[existingCartItemIndex] = updateItem;
        }
        else
        {
            //add item
            updateItems = state.items.concat(action.item);
        }

        //update total amount
        const totalUpdateAmount = state.totalAmount + action.item.price * action.item.amount;

        //return new cart
        return {
            items: updateItems,
            totalAmount: totalUpdateAmount
        };
    }
    //remove item
    else if(action.type === "REMOVE")
    {
        //search item into the cart
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);

        //get item 
        const existingCartItem = state.items[existingCartItemIndex];

        let updateItems;
        
        if(existingCartItem)
        {
            //update amount
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            };

            //if amount is minor than 1 I remove the item
            if(updateItem.amount < 1)
            {
                updateItems = state.items.filter(item => item.id !== action.id);
            }
            else
            {
                //update item
                updateItems = [...state.items]
                updateItems[existingCartItemIndex] = updateItem;
            }

            //update total amount
            const totalUpdateAmount = state.totalAmount - existingCartItem.price;

            //return new cart
            return {
                items: updateItems,
                totalAmount: totalUpdateAmount
            };
        }
    }

    return defaultCartState;
};

const CartProvider = props => {
    //useReducer hook for update cartState
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    //add item to the cart
    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    //remove item to the cart
    const removeItemToCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    //return a CartContext Provider with cart as value
    return  (
                <CartContext.Provider value={cartContext}>
                    {props.children}
                </CartContext.Provider>
            );
};

//export component
export default CartProvider;