import {Box, Typography, Divider, Button} from "@mui/material";
import React, {useContext, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import {useCookies} from "react-cookie";

export default function ProductDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(['user']);
    const userCookie = cookie['user'];

    const [data, setData] = useState(location.state);
    const cartContext = useContext(CartContext);

    const handleAddProduct2Card = () => {
        // if user not login, redirect to login page
        if(!userCookie) {
            navigate("/sign-in");
            return;
        }

        cartContext.addItemToCart(data);
    }

    return (
        <Box sx={{display: "flex", justifyContent: "start", margin: "12px"}}>
            <Box sx={{width: "35%"}}>
                <img src={data?.image} alt={data.productName} className="img"/>
            </Box>
            <Box sx={{width: "65%", textAlign: "left", paddingLeft: "12px "}}>
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
                            <Button variant="contained" onClick={handleAddProduct2Card}>Add to Cart</Button>
                        </Box>
                    </Box>
                    <Divider/>
                </Box>
            </Box>
        </Box>
    );
}