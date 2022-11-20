import Typography from "@mui/material/Typography";
import {useContext, Fragment} from 'react';
import EmptyCart from "./EmptyCart";
import * as React from "react";
import CartItem from "./CartItem"
import {CartContext} from "../../context/CartContext";
import {Button} from "@mui/material";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import {useNavigate} from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Grid from "@mui/material/Grid";

const ShoppingCart = () => {
    const {totalCartPrice, cart, increaseItemAmountToCart, reduceItemAmountFromCart} = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <Container>

            <Box m={2} pt={3}>
                <Divider/>
                <Typography variant="h5" gutterBottom>
                    Shopping Cart
                </Typography>

                <Divider/>

                {cart ? (
                    <>
                        <Container className='animate__animated animate__fadeIn'>
                            {Object.keys(cart?.products).map((pid) => (
                                <Fragment key={pid}>
                                    <CartItem
                                        amount={cart.products[pid].amount}
                                        product={cart.products[pid].product}
                                        increaseItemAmountToCart={increaseItemAmountToCart}
                                        reduceItemAmountFromCart={reduceItemAmountFromCart}/>
                                    <Divider variant='middle' sx={{my: 5}}/>
                                </Fragment>
                            ))}
                        </Container>

                        <Typography
                            variant='h6'
                            align='right'
                            className='animate__animated animate__fadeInUp'
                        >
                            <Box m={2} pt={1}>
                                Total: {'$' + totalCartPrice().toFixed(2)}
                            </Box>
                        </Typography>
                        <Box m={2} pt={3}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid item>
                                    <Box display='flex' gap justifyContent={'center'} my>
                                        <Button
                                            variant='text'
                                            color="success"
                                            startIcon={<ArrowBackIosIcon/>}
                                            onClick={() => {
                                                navigate(-1)
                                            }}
                                        >
                                            Go back
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box display='flex' gap justifyContent={'center'}>
                                        <Button
                                            variant='contained'
                                            color="success"
                                            startIcon={<PointOfSaleIcon/>}
                                            onClick={() => {
                                                navigate("/checkout", {
                                                    state: {
                                                        cart: cart,
                                                        totalCartPrice: totalCartPrice()
                                                    }, replace: true
                                                })
                                            }}
                                        >
                                            Process to checkout
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                ) : (
                    <EmptyCart/>
                )}
            </Box>
        </Container>

    );
};

export default ShoppingCart;