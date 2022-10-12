import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import {useRef} from "react";
import {FormControl, Input, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";

export default function AddProduct(props) {
    const productNameRef = useRef("");
    const productDescriptionRef = useRef("");
    const productDefaultPriceRef = useRef(0);

    return (
        <Box
            component="form"
        >

            <Grid container
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  spacing={2}
            >
                <Grid item>
                    <TextField
                        ref={productNameRef}
                        id="productName"
                        label="ProductName"
                        variant="outlined"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        ref={productDescriptionRef}
                        id="filled-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        variant="filled"
                    />

                    <FormControl fullWidth sx={{m: 1}} variant="standard">
                        <InputLabel htmlFor="productDefaultPrice">Description</InputLabel>
                        <Input
                            id="productDefaultPrice"
                            ref={productDescriptionRef}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth sx={{m: 1}} variant="standard">
                        <InputLabel htmlFor="productDefaultPrice">Amount</InputLabel>
                        <Input
                            id="productDefaultPrice"
                            ref={productDefaultPriceRef}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
}