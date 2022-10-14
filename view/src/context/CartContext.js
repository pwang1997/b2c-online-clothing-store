import { useState, createContext, useEffect } from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    );

    //cart methods
    const addItemToCart = (item) => {
        setCart([...cart, item]);
        localStorage.setItem('cart', JSON.stringify([...cart, item]));
    };

    const removeItemFromCart = (id) => {
        setCart(cart.filter((cartItem) => cartItem.id !== id));
        localStorage.setItem(
            'cart',
            JSON.stringify(cart.filter((cartItem) => cartItem.id !== id))
        );
    };

    const isInCart = (itemId) => cart.some((cartItem) => cartItem.id === itemId);

    const amountOfItemsInCart = () => {
        cart.reduce((acc, item) => (acc += item.amount), 0);
    }

    const totalCartPrice = () =>
        cart.reduce((acc, item) => (acc += item.price * item.amount), 0);

    const resetCart = () => {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    };

    const increaseItemAmountToCart = (itemId) => {
        const cartItems = JSON.parse(localStorage.getItem('cart'))
        // const cartItem = cartItems.filter((cartItem) => cartItem.itemId === itemId.toString())
        let query = cartItems.map(item => {
            console.log(item)
            if (item.itemId === itemId){
                item.amount = item.amount+1
            }
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(query));
        setCart(JSON.parse(localStorage.getItem('cart')));
    };

    const reduceItemAmountFromCart = (itemId) => {
        const cartItems = JSON.parse(localStorage.getItem('cart'))
        // const cartItem = cartItems.filter((cartItem) => cartItem.itemId === itemId.toString())
        let query = cartItems.map(item => {
            console.log(item)
            if (item.itemId === itemId){
                item.amount = item.amount-1
            }
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(query));
        setCart(JSON.parse(localStorage.getItem('cart')));
    };
    // [{"itemId":"faw","price":90,"amount":24}, {"itemId":"caihbfw","price":90,"amount":23}]
    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addItemToCart,
                removeItemFromCart,
                isInCart,
                amountOfItemsInCart,
                totalCartPrice,
                resetCart,
                increaseItemAmountToCart,
                reduceItemAmountFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};