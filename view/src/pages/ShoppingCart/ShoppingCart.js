import Typography from "@mui/material/Typography";
import { useContext, Fragment } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import EmptyCart from "./EmptyCart";
import * as React from "react";
import CartItem from "./CartItem"
import {CartContext} from "../../context/CartContext";

const ShoppingCart = () => {
    const {totalCartPrice, cart, increaseItemAmountToCart, reduceItemAmountFromCart} = useContext(CartContext);

    return (
        <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{flex: 2}}>
            ShoppingCart page
            {cart.length > 0 ? (
                <List disablePadding>
                    {cart.map((product) => (
                        <ListItem key={product.itemId} sx={{ py: 1, px: 0 }}>
                            <CartItem  itemId={product.itemId}
                                       price={product.price}
                                       amount={product.amount}
                                       increaseItemAmountToCart={increaseItemAmountToCart}
                                       reduceItemAmountFromCart={reduceItemAmountFromCart} />
                        </ListItem>
                    ))}

                    <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary="Total" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            {totalCartPrice().toFixed(2)}
                        </Typography>
                    </ListItem>
                </List>): (
                <EmptyCart />
            )}
        </Typography>
    );
};

export default ShoppingCart;