import * as React from 'react';
import Typography from '@mui/material/Typography';
import { PayPalButton } from "react-paypal-button-v2";

export default function PaymentForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <PayPalButton
                amount="0.01"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);

                    // OPTIONAL: Call your server to save the transaction
                    return fetch("/paypal-transaction-complete", {
                        method: "post",
                        body: JSON.stringify({
                            orderID: data.orderID
                        })
                    });
                }}
            />
        </React.Fragment>
    );
}