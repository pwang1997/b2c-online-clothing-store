import {Box, Typography, Divider, Button} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import {useCookies} from "react-cookie";
import Grid from "@mui/material/Grid";
import {useFirebaseShoppingCartCollection, useFirebaseStorage} from "../../context/FirebaseContext";
import {fetchProductImageService} from "../../services/ProductService";
import {updateShoppingCartService} from "../../services/ShoppingCartService";

export default function ProductDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(['user', 'shoppingCart']);
    const userCookie = cookie['user'];
    const shoppingCartCookie = cookie['shoppingCart'];

    const [data, setData] = useState(location.state);
    const [image, setImage] = useState();

    const cartContext = useContext(CartContext);
    const shoppingCartCtx = useFirebaseShoppingCartCollection();
    const useStorage = useFirebaseStorage();

    useEffect(() => {
        fetchProductImageService(useStorage, data.imageUrl, setImage);
    }, []);

    const handleAddProduct2Cart = () => {
        // if user not login, redirect to login page
        if (!userCookie) {
            navigate("/sign-in");
            return;
        }

        cartContext.addItemToCart(data);

        const cart = {
            uid: userCookie.uid,
            products: cartContext.cart?.products
        }

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
        // <Box sx={{display: "flex", justifyContent: "start", margin: "12px"}}>
            <Grid container >
                <Grid item xs={12} md={3}>
                    <Box sx={{maxHeight:"300px", maxWidth: "300px", display: "inline-block"}}>
                        <img src={image} alt={data.productName} className="img"/>
                    </Box>
                </Grid>
                <Grid item md={3}></Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{textAlign: "left", paddingLeft: "12px "}}>
                        <Box className="header" sx={{marginBottom: "12px"}}>
                            <Typography variant="h3" component="h5">
                                {data?.productName}
                            </Typography>
                        </Box>
                        <Divider/>
                        {/*Price part*/}
                        <Box className="main" sx={{margin: "12px 0"}}>
                            <div className="body-item">
                                {
                                    (data.promotionStatus) ?
                                        <>
                                            {/*<span className="label"><b>Price</b>: </span>*/}
                                            <Box
                                                sx={{
                                                    backgroundColor: "#f50057",
                                                    color: "#e1f5fe",
                                                    width: 74,
                                                    lineHeight: "28px",
                                                    display: "inline-block"
                                                }}
                                            >
                                                20% off
                                            </Box>
                                            <Typography variant="h6" sx={{display: "inline-block"}}>
                                                ${data.promotionPrice?.split(".")[0]}
                                                <sup>{data.promotionPrice?.split(".")[1]}</sup>
                                            </Typography>
                                            <Typography variant="body1">
                                                Was : <del>${data.price}</del>
                                            </Typography>
                                        </>
                                        :
                                        <Typography variant="body1">
                                            <b>Price: </b>  ${data.price}
                                        </Typography>
                                }
                            </div>
                            <Typography className="body-item">
                                <span className="label"> <b>Description</b>:</span>
                                {data?.productDescription}
                            </Typography>
                            <Typography className="body-item">
                                <span className="label"><b>Size</b>: </span>
                                {"Moderate size order with regular size"}
                            </Typography>
                            <Typography className="body-item">
                                <span className="label"><b>Color</b>:</span>
                                {"Healther Navy"}
                            </Typography>
                            <Divider/>
                            {/*Basic Info*/}
                            <Box className="body-container ">
                                <Typography variant="h5" sx={{marginBottom: "20px"}}>
                                    Product Details
                                </Typography>
                                <Typography className="body-item">
                                    <span className="label">Types of Fabric:</span>
                                    {"100% cotton"}
                                </Typography>
                                <Typography className="body-item">
                                    <span className="label">Instructions:</span>
                                    {
                                        "For a child to be born with this disability indicates a defect in obstetric care."
                                    }
                                </Typography>
                                <Typography className="body-item">
                                    <span className="label">Country of origin:</span>
                                    {"China"}
                                </Typography>
                                <Box className="btn">
                                    <Button variant="contained" onClick={handleAddProduct2Cart}>Add to Cart</Button>
                                </Box>
                            </Box>
                            <Divider/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        // </Box>
    );
}