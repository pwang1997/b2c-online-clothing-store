import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {ButtonGroup, FormHelperText} from "@mui/material";
import Box from "@mui/material/Box";
import React, {Fragment, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {fetchProductImageService} from "../../services/ProductService";
import {useFirebaseShoppingCartCollection, useFirebaseStorage} from "../../context/FirebaseContext";
import {updateShoppingCartService} from "../../services/ShoppingCartService";
import {useCookies} from "react-cookie";

const CartItem = (props) => {
    const {product, amount, reduceItemAmountFromCart, increaseItemAmountToCart} = props;
    const navigate = useNavigate();

    const [image, setImage] = useState();
    const useStorage = useFirebaseStorage();
    const shoppingCartCtx = useFirebaseShoppingCartCollection();

    const [cookie, setCookie] = useCookies(['shoppingCart']);
    const shoppingCartCookie = cookie['shoppingCart'];

    useEffect(() => {
        console.log(product);
        fetchProductImageService(useStorage, product.imageUrl, setImage);
    }, []);

    const onIncrementProduct2Cart = (pid) => {
        increaseItemAmountToCart(pid);
        updateShoppingCartService(shoppingCartCtx,
            shoppingCartCookie.cartId,
            JSON.parse(localStorage.getItem('cart')))
            .then((res) => {
                console.log("Cloud cart updated");
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const onDecrementProduct2Cart = (pid) => {
        reduceItemAmountFromCart(pid);
        updateShoppingCartService(shoppingCartCtx,
            shoppingCartCookie.cartId,
            JSON.parse(localStorage.getItem('cart')))
            .then((res) => {
                console.log("Cloud cart updated");
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <Fragment>
            <Typography variant='inherit'>{product.productName}</Typography>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    md={2}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <img src={image} height='150' width='150' alt={product.productName} onClick={
                        () => {
                            navigate(`/product/${product.id}`, {state: product, replace: true});
                        }
                    }/>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={3}
                    md={4}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <Box>
                        <FormHelperText> Price </FormHelperText>
                        {
                            product.promotionStatus ?
                                <Fragment>
                                    <Typography variant="inherit">
                                        <del>${product?.price}</del>
                                    </Typography>
                                    <Typography variant={"inherit"}>
                                        ${product?.promotionPrice?.toString().split(".")[0]}
                                        <sup>{product?.promotionPrice?.toString().split(".")[1]}</sup>
                                    </Typography>
                                </Fragment>
                                :
                                <Typography variant='inherit'>{'$' + product.price}</Typography>
                        }
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={3}
                    md={2}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <FormHelperText> Qty </FormHelperText>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => onDecrementProduct2Cart(product.id)}
                        >
                            -
                        </Button>
                        <Box component="span" marginLeft={1} marginRight={1}>
                            {amount}
                        </Box>
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => onIncrementProduct2Cart(product.id)}
                        >
                            +
                        </Button>
                    </ButtonGroup>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={3}
                    md={4}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <FormHelperText> Total </FormHelperText>
                    {
                        product.promotionStatus ?
                            <Fragment>
                                <Typography variant='inherit'>
                                    <del>${(amount * product.price).toFixed(2)}</del>
                                </Typography>
                                <Typography variant='inherit'>
                                    ${(amount * product.promotionPrice).toFixed(2)}
                                </Typography>
                            </Fragment>
                            :
                            <Typography variant='inherit'>
                                ${(amount * product.price).toFixed(2)}
                            </Typography>
                    }
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default CartItem;