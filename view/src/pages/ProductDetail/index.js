import {Box, Typography, Divider, Button} from "@mui/material";
import React, {useState} from "react";
import {useLocation} from "react-router-dom";

export default function ProductDetail() {
    const location = useLocation();

    const [data, setData] = useState(location.state);

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
                    <Typography className="body-item">
                        {
                            (data.promotionStatus) ?
                                <>
                                    <span className="label"><b>Price</b>: </span>
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
                    </Typography>
                    <Typography className="body-item">
                        <span className="label"> <b>Description</b>:</span>
                        {data?.productDescription}
                    </Typography>
                    <Typography className="body-item">
                        <span className="label"><b>Size</b>: </span>
                        {"Moderate size order with regular size"}
                    </Typography>
                    <Typography className="body-item">
                        <sapn className="label"><b>Color</b>:</sapn>
                        {"Healther Navy"}
                    </Typography>
                    <Divider/>
                    {/*Basic Info*/}
                    <Box className="body-container ">
                        <Typography variant="h5" sx={{marginBottom: "20px"}}>
                            Product Details
                        </Typography>
                        <Typography className="body-item">
                            <sapn className="label">Types of Fabric:</sapn>
                            {"100% cotton"}
                        </Typography>
                        <Typography className="body-item">
                            <sapn className="label">Instructions:</sapn>
                            {
                                "For a child to be born with this disability indicates a defect in obstetric care."
                            }
                        </Typography>
                        <Typography className="body-item">
                            <sapn className="label">Country of origin:</sapn>
                            {"China"}
                        </Typography>
                        <Box className="btn">
                            <Button variant="contained">Add to Cart</Button>
                        </Box>
                    </Box>
                    <Divider/>
                </Box>
            </Box>
        </Box>
    );
}