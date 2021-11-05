//import components
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === "ADD")
    {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];
        
        let updateItems;

        if(existingCartItem)
        {
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updateItems = [...state.items]
            updateItems[existingCartItemIndex] = updateItem;
        }
        else
        {
            updateItems = state.items.concat(action.item);
        }

        
        const totalUpdateAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updateItems,
            totalAmount: totalUpdateAmount
        };
    }
    else if(action.type === "REMOVE")
    {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);

        const existingCartItem = state.items[existingCartItemIndex];

        let updateItems;
        
        if(existingCartItem)
        {
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            };

            if(updateItem.amount < 1)
            {
                updateItems = state.items.filter(item => item.id !== action.id);
            }
            else
            {
                updateItems = [...state.items]
                updateItems[existingCartItemIndex] = updateItem;
            }

            const totalUpdateAmount = state.totalAmount - existingCartItem.price;

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