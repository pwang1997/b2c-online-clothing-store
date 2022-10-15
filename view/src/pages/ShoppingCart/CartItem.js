import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {ButtonGroup, FormHelperText} from "@mui/material";
import Box from "@mui/material/Box";
import {Fragment} from "react";

const CartItem = ({itemId, price, amount, reduceItemAmountFromCart, increaseItemAmountToCart}) => {
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
                    {/*<img src={'view/public/img/faw.jpg'} height='150' width='150'  alt={itemId}/>*/}
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
                    <Typography variant='inherit'>{itemId}</Typography>
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
                        <Typography variant='inherit'>{'$' + price}</Typography>
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
                                onClick={() => reduceItemAmountFromCart(itemId)}
                            >
                                -
                            </Button>
                        <Box component="span">
                            {amount}
                        </Box>
                            <Button
                                size="small"
                                variant="outlined"
                                onClick={() => increaseItemAmountToCart(itemId)}
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
                        {'$' + (price * amount).toFixed(2)}
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={2}
                    md={1}
                    display='grid'
                    textAlign='center'
                    justifyContent='center'
                    alignContent='center'
                >
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default CartItem;