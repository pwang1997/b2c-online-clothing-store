import React, {useContext} from "react";
import {
    Card, Box, Typography, Button, CardContent,
    CardActions, CardMedia
} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {CartContext} from "../../context/CartContext";

export default function ProductCard(props) {
    const {
        id, productName, productDescription, url,
        price, promotionPrice, promotionStatus = (id % 2 === 0)
    } = props;

    const navigate = useNavigate();
    const location = useLocation();
    const cartContext = useContext(CartContext);

    const data = {
        id: id,
        productName: productName,
        price: price,
        promotionPrice: promotionPrice,
        promotionStatus: promotionStatus,
        productDescription: productDescription,
        image: url
    }

    const go2ProductDetail = () => {
        navigate(`/product/${id}`, {state: data, replace: true});
    };

    const handleAddProduct2Card = () => {
        cartContext.addItemToCart(data);
    }

    return (
        <Card variant="outlined" sx={{width: 280}}>
            <CardContent>
                <CardMedia
                    component={"img"}
                    height={"280"}
                    image={url}
                    alt={productName}
                    onClick={go2ProductDetail}
                />
                <Typography variant="h5" component="div">
                    {productName}
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
                    {productDescription}
                </Typography>

                {
                    (promotionStatus || location?.state?.promotionStatus) ?
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
                                ${promotionPrice?.split(".")[0]}
                                <sup>{promotionPrice?.split(".")[1]}</sup>
                            </Typography>
                            <Typography variant="body1">
                                Was : <del>${price}</del>
                            </Typography>
                        </Box> :
                        <Typography variant="body1">
                            ${price}
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