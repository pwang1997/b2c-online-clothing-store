import * as React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {PayPalButtons} from "@paypal/react-paypal-js";
import {useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import {Button, styled} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Checkout = () => {
    const { state } = useLocation();
    const { cartString, totalCartPrice } = state;
    const cart = JSON.parse(cartString)

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#F8EDE3' : '#F8EDE3',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const handleApprove = (orderId) => {
        setPaidFor(true);
        navigate('/checkoutSuccess', {state: {orderId: orderId}, replace: true});
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Box m={3} pt={3}>
                <Box display='flex'>
                    <Button
                        variant='text'
                        color="success"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={() => {
                            navigate(-1)
                        }}
                    >
                        Go back
                    </Button>
                </Box>
            </Box>
            <Container spacing={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Item>
                            <Typography variant="h5" gutterBottom>
                                Order summary
                            </Typography>
                            <List disablePadding>
                                {cart.map((product) => (
                                    <ListItem key={product.itemId} sx={{ py: 1, px: 0 }}>
                                        <ListItemText
                                            primary={product.itemId}
                                            secondary={'x'+product.amount}
                                        />
                                        <Typography variant="body2">
                                            ${product.price}
                                        </Typography>
                                    </ListItem>
                                ))}

                                <ListItem sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="Total" />
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                        ${totalCartPrice}
                                    </Typography>
                                </ListItem>
                            </List>
                        </Item>
                    </Grid>

                    <Grid item xs={12} sm={6} md={8} lg={8}>
                        <Paper>
                            <Typography variant="h5" gutterBottom>
                                Shipping address
                                <Divider variant='middle' sx={{ my: 3 }} />
                            </Typography>
                            <Box m={2} pt={3}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="firstName"
                                            name="firstName"
                                            label="First name"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="lastName"
                                            name="lastName"
                                            label="Last name"
                                            fullWidth
                                            autoComplete="family-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="address1"
                                            name="address1"
                                            label="Address line 1"
                                            fullWidth
                                            autoComplete="shipping address-line1"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="address2"
                                            name="address2"
                                            label="Address line 2"
                                            fullWidth
                                            autoComplete="shipping address-line2"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="city"
                                            name="city"
                                            label="City"
                                            fullWidth
                                            autoComplete="shipping address-level2"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id="state"
                                            name="state"
                                            label="State/Province/Region"
                                            fullWidth
                                            variant="standard"
                                        />
                                    </Grid>
                                </Grid>
                            </Box>

                            <Divider variant='middle' sx={{ my: 3 }} />
                            <Box m={2} pt={3}>
                                <Typography variant="h5" gutterBottom>
                                Payment Method
                            </Typography>
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: totalCartPrice,
                                                    },
                                                },
                                            ],
                                        });
                                    }}
                                    onApprove={async (data, actions) => {
                                        const order = await actions.order.capture();
                                        console.log("Paypal Order:", order);
                                        handleApprove(data.orderID);
                                        await axios.post("http://localhost:5000/checkout", {
                                            orderId: data.orderID
                                        }).then((res) => {
                                            console.log(res.data)
                                        }).catch((error) => {
                                            console.log(error)
                                        })
                                    }}
                                    onCancel={()=>{

                                    }}
                                    onError={(err) => {
                                        setError(err);
                                        console.error("PayPal Checkout Error: ", err);
                                    }}
                                />
                            </Box>

                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </React.Fragment>
    )
};
export default Checkout;



