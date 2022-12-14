import {useState, createContext} from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || null
    );
    const updateCart = (newCart) => {
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }
    //cart methods
    const addItemToCart = (product) => {
        let newCart = structuredClone(cart);

        if(newCart?.products[product.id]) {
            newCart.products[product.id].amount+=1;
        } else {
            newCart.products[product.id] = {
                amount : 1,
                product : product
            };
        }
        updateCart(newCart);
    };

    const removeItemFromCart = (id) => {
        const newCart = structuredClone(cart);
        if(newCart.products[id].amount === 1) {
            delete newCart.products[id];
        } else {
            newCart.products[id].amount--;
        }
        updateCart(newCart);
    };

    const isInCart = (id) => cart.products[id];

    const amountOfItemsInCart = () => cart && Object.keys(cart?.products).reduce((acc, pid) => (acc += cart?.products[pid]?.amount), 0);

    const amountOfItems = (id) => cart?.products[id].amount;

    const totalCartPrice = () => cart ? Object.keys(cart.products).reduce((acc, pid) => {
        const productItem = cart.products[pid];
        const price = (productItem.product.promotionStatus) ?
            productItem.product.promotionPrice :
            productItem.product.price;
        acc += productItem.amount * price;
        return acc;
    },0) : 0;

    const resetCart = () => updateCart({uid: cart.uid, products: {}});

    const increaseItemAmountToCart = (id) => {
        const newCart = JSON.parse(localStorage.getItem('cart'));
        // const cartItem = cartItems.filter((cartItem) => cartItem.id === id.toString())
        newCart.products[id].amount++;
        updateCart(newCart);
    };

    const reduceItemAmountFromCart = (id) => {
        if(amountOfItems(id) > 1){
            const newCart = JSON.parse(localStorage.getItem('cart'));
            newCart.products[id].amount--;
            updateCart(newCart);
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