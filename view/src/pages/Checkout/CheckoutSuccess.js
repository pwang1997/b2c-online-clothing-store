import * as React from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";

const PaymentForm = () => {
    const [orderId, setOrderId] = React.useState(null);

    axios.get('/checkout').then((response) => {
        console.log("CHEOUTSUCCESS GET", response.data);
        // setOrderId(response.data.orderID);
    });

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
                Your order number is {orderId}. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
            </Typography>
        </React.Fragment>
    );
};

export default PaymentForm;