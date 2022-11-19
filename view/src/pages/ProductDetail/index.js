import {Box, Typography, Divider, Button, Rating} from "@mui/material";
import React, {useContext, useEffect, useState, Fragment, useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import {useCookies} from "react-cookie";
import Grid from "@mui/material/Grid";
import {
    useFirebaseProductCollection,
    useFirebaseShoppingCartCollection,
    useFirebaseStorage
} from "../../context/FirebaseContext";
import {
    fetchAllProductsService,
    fetchProductImageService
} from "../../services/ProductService";
import {updateShoppingCartService} from "../../services/ShoppingCartService";
import Overflow from "../../components/OverFlow";
import _ from "lodash";

export default function ProductDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(['user', 'shoppingCart']);
    const userCookie = cookie['user'];
    const shoppingCartCookie = cookie['shoppingCart'];

    const dataRef = useRef(location.state);
    const [image, setImage] = useState();
    const [products, setProducts] = useState([]);

    const cartContext = useContext(CartContext);
    const shoppingCartCtx = useFirebaseShoppingCartCollection();
    const productCtx = useFirebaseProductCollection();
    const useStorage = useFirebaseStorage();

    useEffect(() => {
        fetchProductImageService(useStorage, dataRef.current.imageUrl, setImage);
        fetchAllProductsService(productCtx, setProducts);
        dataRef.current = location.state;
    }, [location.pathname, image]);

    const handleAddProduct2Cart = () => {
        // if user not login, redirect to login page
        if (!userCookie) {
            navigate("/sign-in");
            return;
        }

        cartContext.addItemToCart(dataRef.current);

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
        <Fragment>
            <Grid container marginTop={5} marginBottom={10}>
                <Grid item md={2} display={{xs: "none", md: "block"}}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                    >
                        <Grid item>
                            <img src={image} alt={dataRef.current.productName} width={60} height={60}
                                 border={"1px solid black"}/>
                        </Grid>

                        <Grid item>
                            <img src={image} alt={dataRef.current.productName} width={60} height={60}
                                 border={"1px solid black"}/>
                        </Grid>

                        <Grid item>
                            <img src={image} alt={dataRef.current.productName} width={60} height={60}
                                 border={"1px solid black"}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={3} marginLeft={0}>
                    <img src={image} alt={dataRef.current.productName}
                         height={400} width={300}
                         display={"inline-block"} border={"1px solid black"}/>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box sx={{textAlign: "left", paddingLeft: "12px "}}>
                        <Typography variant="h5" component="h1" sx={{marginBottom: "12px"}}>
                            {dataRef.current?.productName}
                        </Typography>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly/>
                        <Divider/>

                        <Typography variant="h5" component="h5">
                            <span className="label"> <b>Category</b>:</span>
                            {dataRef.current?.category}
                        </Typography>

                        {/*Price part*/}

                        <Box className="main" sx={{margin: "12px 0"}}>
                            <div className="body-item">
                                {
                                    (dataRef.current.promotionStatus) ?
                                        <>
                                            <Box
                                                sx={{
                                                    backgroundColor: "#f50057",
                                                    color: "#e1f5fe",
                                                    width: 74,
                                                    lineHeight: "28px",
                                                    display: "inline-block"
                                                }}
                                            >
                                                {
                                                    Math.floor(dataRef.current.price - dataRef.current.promotionPrice
                                                        / dataRef.current.price)
                                                }% off
                                            </Box>
                                            <Typography variant="h6" sx={{display: "inline-block"}}>
                                                ${dataRef.current.promotionPrice?.toString().split(".")[0]}
                                                <sup>{dataRef.current.promotionPrice?.toString().split(".")[1]}</sup>
                                            </Typography>
                                            <Typography variant="body1">
                                                Was : <del>${dataRef.current.price}</del>
                                            </Typography>
                                        </>
                                        :
                                        <Typography variant="body1">
                                            <b>Price: </b> ${dataRef.current.price}
                                        </Typography>
                                }
                            </div>
                            <Typography variant="h5" component="h5">
                                <span className="label"> <b>Description</b>:</span>
                                {dataRef.current?.description}
                            </Typography>

                            {/*Basic Info*/}
                            <Box className="body-container ">
                                <Box className="btn">
                                    <Button variant="contained" onClick={handleAddProduct2Cart}>Add to Cart</Button>
                                </Box>
                            </Box>
                            <Divider/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/*Similar items*/}
            <Grid item xs={12}>
                <Overflow title={`${dataRef.current.category} items`}
                          products={products && _.filter(products, {category: dataRef.current.category})}
                          navigate={navigate}/>
            </Grid>

            <Grid item xs={12}>
                <Overflow title={"Guess you like"}
                          products={products && _.sampleSize(products, 12)}
                          navigate={navigate}/>
            </Grid>


        </Fragment>

    );
}