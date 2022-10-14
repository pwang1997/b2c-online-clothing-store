import * as React from "react";
import Typography from "@mui/material/Typography";
import {useLocation} from "react-router-dom";

const CheckoutSuccess = () => {
    const { state } = useLocation();
    const { orderId } = state;

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
                Your order number is {orderId}. We will send you an update when your order has
                shipped.
            </Typography>
        </React.Fragment>
    );
};

export default CheckoutSuccess;