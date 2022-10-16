import {useState, createContext} from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    );

    //cart methods
    const addItemToCart = (item) => {
        const existItem = cart.find(el => el.id === item.id);

        if(existItem) {
            existItem.amount+=1;
            setCart([...cart]);
            localStorage.setItem('cart', JSON.stringify([...cart]));
        } else {
            item.amount = 1;
            setCart([...cart, item]);
            localStorage.setItem('cart', JSON.stringify([...cart, item]));
        }
    };

    const removeItemFromCart = (id) => {
        setCart(cart.filter((cartItem) => cartItem.id !== id));
        localStorage.setItem(
            'cart',
            JSON.stringify(cart.filter((cartItem) => cartItem.id !== id))
        );
    };

    const isInCart = (id) => cart.some((cartItem) => cartItem.id === id);

    const amountOfItemsInCart = () => cart.reduce((acc, item) => (acc += item.amount), 0);

    const amountOfItems = (id) => cart.filter((cartItem) => cartItem.id === id)[0].amount

    const totalCartPrice = () =>
        cart.reduce((acc, item) => (acc += item.price * item.amount), 0);

    const resetCart = () => {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    };

    const increaseItemAmountToCart = (id) => {
        const cartItems = JSON.parse(localStorage.getItem('cart'))
        // const cartItem = cartItems.filter((cartItem) => cartItem.id === id.toString())
        let query = cartItems.map(item => {
            if (item.id === id){
                item.amount = item.amount+1
            }
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(query));
        setCart(JSON.parse(localStorage.getItem('cart')));
    };

    const reduceItemAmountFromCart = (id) => {
        if(amountOfItems(id) > 1){
            const cartItems = JSON.parse(localStorage.getItem('cart'))
            let query = cartItems.map(item => {
                console.log(item);
                if (item.id === id){
                    item.amount = item.amount-1
                }
                return item;
            })
            localStorage.setItem('cart', JSON.stringify(query));
            setCart(JSON.parse(localStorage.getItem('cart')));
        }else{
            removeItemFromCart(id)
        }
    };
    // [{"id":"1","price":90,"amount":24}, {"id":"2","price":90,"amount":23}]
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