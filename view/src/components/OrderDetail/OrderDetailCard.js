import {FormHelperText, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, {Fragment, useEffect, useState} from "react";
import {useFirebaseStorage} from "../../context/FirebaseContext";
import {fetchProductImageService} from "../../services/ProductService";
import {useNavigate} from "react-router-dom";
import Divider from "@mui/material/Divider";

const OrderDetailCard = (props) => {

    const navigate = useNavigate();
    const {pid, orderedProduct} = props;
    const {product, amount} = orderedProduct;
    const productCtx = useFirebaseStorage();
    const [image, setImage] = useState();

    useEffect(() => {
        fetchProductImageService(productCtx, product.imageUrl, setImage);
    }, []);

    return (
        <React.Fragment>
            <Typography variant='inherit' >{product.productName}</Typography>
            <Grid container m={2}>
                <Grid
                    item
                    xs={12}
                    md={2}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <img src={image} height='150' width='150'
                         alt={product.productName}
                         onClick={
                             () => {
                                 navigate(`/product/${pid}`, {
                                     state: product,
                                     replace: true
                                 });
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
                    <Box component="span" marginLeft={1} marginRight={1}>
                            {amount}
                        </Box>
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
            <Divider />
        </React.Fragment>
    )
}

export default OrderDetailCard;