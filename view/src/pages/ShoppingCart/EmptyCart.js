import Typography from '@mui/material/Typography';
import {Button} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import * as React from "react";
import {Fragment} from "react";
import {useNavigate} from "react-router-dom";

const EmptyCart = () => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <Box m={2} pt={3}>
                <Typography variant='h6' align='center' sx={{ my: 5 }}>
                    Your cart is Empty
                </Typography>
                <Box display='flex'>
                    <Button
                        variant='outlined'
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
        </Fragment>
    );
}

export default EmptyCart;