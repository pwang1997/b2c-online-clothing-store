import * as React from 'react';
import Typography from '@mui/material/Typography';
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import {useState} from "react";

const PaymentForm = () => {
    const axios = require('axios');
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderId) => {
        axios.post("/checkout", {
            orderID: orderId
        })
        setPaidFor(true);
    }

    if (paidFor){

    }

    if (error){
        alert(error);
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
                <PayPalScriptProvider options={{ "client-id": 'AUW9uJ2tm-lvA3BvifgMs9Q4gsXLjMrjdjEWnEhbX2m5aD3PNfG0U_4IysfOvZreTcVfi_m6unET-ced'}}>
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
                        }}
                        onCancel={()=>{

                        }}
                        onError={(err) => {
                            setError(err);
                            console.error("PayPal Checkout Error: ", err);
                        }}
                    />
                </PayPalScriptProvider>
            </Typography>
        </React.Fragment>
    );
};

export default PaymentForm;