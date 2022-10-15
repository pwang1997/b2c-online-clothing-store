import {useState, createContext} from 'react';

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

    const removeItemFromCart = (itemId) => {
        setCart(cart.filter((cartItem) => cartItem.itemId !== itemId));
        localStorage.setItem(
            'cart',
            JSON.stringify(cart.filter((cartItem) => cartItem.itemId !== itemId))
        );
    };

    const isInCart = (itemId) => cart.some((cartItem) => cartItem.itemId === itemId);

    const amountOfItemsInCart = () => cart.reduce((acc, item) => (acc += item.amount), 0);

    const amountOfItems = (itemId) => cart.filter((cartItem) => cartItem.itemId === itemId)[0].amount

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
            if (item.itemId === itemId){
                item.amount = item.amount+1
            }
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(query));
        setCart(JSON.parse(localStorage.getItem('cart')));
    };

    const reduceItemAmountFromCart = (itemId) => {
        if(amountOfItems(itemId) > 1){
            const cartItems = JSON.parse(localStorage.getItem('cart'))
            let query = cartItems.map(item => {
                if (item.itemId === itemId){
                    item.amount = item.amount-1
                }
                return item;
            })
            localStorage.setItem('cart', JSON.stringify(query));
            setCart(JSON.parse(localStorage.getItem('cart')));
        }else{
            removeItemFromCart(itemId)
        }
    };
    // [{"itemId":"1","price":90,"amount":24}, {"itemId":"2","price":90,"amount":23}]
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