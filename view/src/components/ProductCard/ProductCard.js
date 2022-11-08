import React, {useContext, useEffect, useState} from "react";
import {
    Card, Box, Typography, Button, CardContent,
    CardActions, CardMedia
} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import {useCookies} from "react-cookie";
import {fetchProductImageService} from "../../services/ProductService";
import {useFirebaseShoppingCartCollection, useFirebaseStorage} from "../../context/FirebaseContext";
import {updateShoppingCartService} from "../../services/ShoppingCartService";

export default function ProductCard(props) {
    const {product} = props;
    // react-router-dom
    const navigate = useNavigate();
    const location = useLocation();
    // context
    const cartContext = useContext(CartContext);
    const useStorage = useFirebaseStorage();
    const shoppingCartCtx = useFirebaseShoppingCartCollection();
    // cookies
    const [cookie, setCookie] = useCookies(['user', 'shoppingCart']);
    const userCookie = cookie['user'];
    const shoppingCartCookie = cookie['shoppingCart'];

    const [image, setImage] = useState();

    useEffect(() => {
        if (product?.imageUrl) {
            fetchProductImageService(useStorage, product.imageUrl, setImage);
        }
    }, [])


    const go2ProductDetail = () => {
        navigate(`/product/${product?.id}`, {state: product, replace: true});
    };

    const handleAddProduct2Card = () => {
        // if user not login, redirect to login page
        if (!userCookie) {
            navigate("/sign-in");
            return;
        }

        cartContext.addItemToCart(product);

        const cart = JSON.parse(localStorage.getItem('cart'));

        // update products based on the LocalStorage cart
        updateShoppingCartService(shoppingCartCtx, shoppingCartCookie.cartId, cart)
            .then(() => {
                alert("Added to cart");
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <Card variant="outlined" sx={{width: 280}}>
            <CardContent>
                <CardMedia
                    component={"img"}
                    height={"280"}
                    image={image}
                    alt={product?.productName}
                    onClick={go2ProductDetail}
                />
                <Typography variant="h5" component="div">
                    {product?.productName}
                </Typography>
                <Typography
                    sx={{
                        display: "-webkit-box",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                    }}
                    color="text.secondary"
                    gutterBottom
                >
                    {product?.productDescription}
                </Typography>

                {
                    (product?.promotionStatus || location?.state?.promotionStatus) ?
                        <Box
                            sx={{
                                margin: "8px 0",
                                display: "inline-block",
                                justifyContent: "space-evenly",
                                height: 28,
                                fontSize: 16,
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "#f50057",
                                    color: "#e1f5fe",
                                    width: 74,
                                    lineHeight: "28px",
                                }}
                            >
                                20% off
                            </Box>
                            <Typography variant="body1">
                                ${product?.promotionPrice?.split(".")[0]}
                                <sup>{product?.promotionPrice?.split(".")[1]}</sup>
                            </Typography>
                            <Typography variant="body1">
                                Was : <del>${product?.price}</del>
                            </Typography>
                        </Box> :
                        <Typography variant="body1">
                            ${product?.price}
                        </Typography>
                }
            </CardContent>
            <CardActions sx={{justifyContent: "center"}}>
                <Button size="small" onClick={go2ProductDetail}>
                    Details
                </Button>
                <Button size="small" variant="contained" onClick={handleAddProduct2Card}>Add to Cart</Button>
            </CardActions>
        </Card>
    );
}