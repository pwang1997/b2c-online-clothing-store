// import { Button } from "@material-ui";
import Button from '@mui/material/Button';
import {useState} from "react";


const CartItem = ({itemId, price, amount}) => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    );

    const increaseItemAmountToCart = (itemId) => {
        console.log(itemId)
        setCart(cart.filter((cartItem) => cartItem.id === itemId.toString()));
        let cartItem = JSON.parse(localStorage.getItem('cart')).filter(item => item.itemId === itemId)
        cartItem[0].amount = (parseInt(cartItem[0].amount)+1)
        localStorage.setItem('cart', JSON.stringify(cartItem));
    };

    const reduceItemAmountFromCart = (itemId) => {
        setCart(cart.filter((cartItem) => cartItem.id === itemId));
        const cartItem = JSON.parse(localStorage.getItem('cart')).filter((cartItem) => cartItem.itemId === itemId)
        // let itemAmount = parseInt(cartItem[0],amount)
        cartItem[0].amount = (parseInt(cartItem[0].amount)-1)
        localStorage.setItem('cart', JSON.stringify(cartItem));
    };

    const isInCart = (itemId) => cart.some((cartItem) => cartItem.id === itemId);

    const totalItemPrice = (itemId) =>
        setCart(cart.filter((cartItem) => cartItem.id !== itemId));
        cart.reduce((acc, item) => (acc += item.amount), 0);

    return (
        // <Wrapper>
        <div>
            <h3>{itemId}</h3>
            <div className="information">
                <p>Price: ${price}</p>
                <p>Total: ${(price * amount).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => reduceItemAmountFromCart(itemId)}
                >
                    -
                </Button>
                <p>{amount}</p>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => increaseItemAmountToCart(itemId)}
                >
                    +
                </Button>
            </div>
        </div>
            // <img src={item.image} alt={item.title} />
        // </Wrapper>


    );
};

export default CartItem;