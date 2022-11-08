import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {ButtonGroup, FormHelperText} from "@mui/material";
import Box from "@mui/material/Box";
import {Fragment, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {fetchProductImageService} from "../../services/ProductService";
import {useFirebaseStorage} from "../../context/FirebaseContext";

const CartItem = (props) => {
    const {product, amount, reduceItemAmountFromCart, increaseItemAmountToCart} = props;
    const navigate = useNavigate();

    const [image,setImage] = useState();
    const useStorage = useFirebaseStorage();

    useEffect(() => {
        console.log(product);
        fetchProductImageService(useStorage, product.imageUrl, setImage);
    }, [])

    return (
        <Fragment>
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
                    md={2}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                    <Typography variant='inherit'>{product.productName}</Typography>
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
                    <Box>
                        <FormHelperText> Price </FormHelperText>
                        <Typography variant='inherit'>{'$' + product.price}</Typography>
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
                    <FormHelperText> Quality </FormHelperText>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => reduceItemAmountFromCart(product.id)}
                        >
                            -
                        </Button>
                        <Box component="span">
                            {amount}
                        </Box>
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => increaseItemAmountToCart(product.id)}
                        >
                            +
                        </Button>
                    </ButtonGroup>

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
                    <FormHelperText> Total </FormHelperText>
                    <Typography variant='inherit'>
                        {'$' + (product.price * amount).toFixed(2)}
                    </Typography>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default CartItem;