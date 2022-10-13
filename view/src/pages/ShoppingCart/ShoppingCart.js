import Typography from "@mui/material/Typography";
import { useState, createContext } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import EmptyCart from "./EmptyCart";
import * as React from "react";
import CartItem from "./CartItem"

const ShoppingCart = () => {
    // [{"itemId":"caihbfw", "price":80,"amount":5}]
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    );

    const isInCart = (itemId) => cart.some((cartItem) => cartItem.id === itemId);

    const totalItemPrice = (itemId) =>
        setCart(cart.filter((cartItem) => cartItem.id !== itemId));
        cart.reduce((acc, item) => (acc += item.amount), 0);

    const totalCartPrice = () =>
        cart.reduce((acc, item) => (acc += item.price * item.amount), 0);

    const resetCart = () => {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    };

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
                    {cart.map((item) => (
                        <CartItem {...item}
                            // itemId={item.itemId}
                            // price={item.price}
                            // amount={item.amount}
                        />
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