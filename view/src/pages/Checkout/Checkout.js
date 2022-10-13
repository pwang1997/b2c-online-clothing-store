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
import {useNavigate} from "react-router-dom";

const Checkout = () => {
    const products = [
        {
            name: 'Product 1',
            desc: 'A nice thing',
            price: '$9.99',
        },
        {
            name: 'Product 2',
            desc: 'Another thing',
            price: '$3.45',
        },
        {
            name: 'Product 3',
            desc: 'Something else',
            price: '$6.51',
        },
        {
            name: 'Product 4',
            desc: 'Best thing of all',
            price: '$14.11',
        },
        { name: 'Shipping', desc: '', price: 'Free' },
    ];

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleApprove = (orderId) => {
        setPaidFor(true);
        navigate('/checkoutSuccess', {state: {orderId: orderId}, replace: true});
    }

    if (paidFor){

    }

    if (error){
        alert(error);
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs="auto">
                    <Typography variant="h6" gutterBottom>
                        Order summary
                    </Typography>
                    <List disablePadding>
                        {products.map((product) => (
                            <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                                <ListItemText primary={product.name} secondary={product.desc} />
                                <Typography variant="body2">{product.price}</Typography>
                            </ListItem>
                        ))}

                        <ListItem sx={{ py: 1, px: 0 }}>
                            <ListItemText primary="Total" />
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                $34.06
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Shipping address
                    </Typography>
                    <Grid container spacing={3}>
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

                    <Typography variant="h6" gutterBottom>
                        Payment method
                        <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: "0.99",
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
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
};
export default Checkout;



