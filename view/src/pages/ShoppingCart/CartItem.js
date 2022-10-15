import Button from '@mui/material/Button';


const CartItem = ({itemId, price, amount, reduceItemAmountFromCart, increaseItemAmountToCart}) => {
    return (
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
    );
};

export default CartItem;