import * as React from 'react';
import {useRef} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import {FormControl, Input, InputAdornment, InputLabel} from "@mui/material";
import {useFirebaseProductCollection} from "../../../context/FirebaseContext";
import {addProductService} from "../../../services/ProductService";
import Admin from "../../Admin";

export default function AddProduct(props) {

    const useProductContextRef = useFirebaseProductCollection();

    const productNameRef = useRef("");
    const productDescriptionRef = useRef("");
    const productDefaultPriceRef = useRef(0);

    const handleAddProduct = (event) => {
        event.preventDefault();

        const product = {
            productName : productNameRef.current.value,
            description : productDescriptionRef.current.value,
            price : productDefaultPriceRef.current.value
        }

        if(!product.productName && !product.price && !product.description) {
            alert("Inputs must not be empty!");
            return;
        }

        addProductService(useProductContextRef, product);
    }
    return (
        <Box component="form">
            <Admin />
            <Grid container
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  spacing={2}
            >
                <Grid item>
                    <FormControl fullWidth sx={{m: 1}} variant="standard">
                        <InputLabel htmlFor="productName">Product Name</InputLabel>
                        <Input
                            id="productName"
                            inputRef={productNameRef}
                        />
                    </FormControl>

                </Grid>

                <Grid item>
                    <FormControl fullWidth sx={{m: 1}} variant="standard">
                        <InputLabel htmlFor="productDefaultPrice">Description</InputLabel>
                        <Input
                            id="productDefaultPrice"
                            inputRef={productDescriptionRef}
                        />
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth sx={{m: 1}} variant="standard">
                        <InputLabel htmlFor="productDefaultPrice">Amount</InputLabel>
                        <Input
                            id="productDefaultPrice"
                            inputRef={productDefaultPriceRef}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </Grid>

                <Grid item>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleAddProduct}
                        sx={{mb: 2}}
                    >
                        Add Product
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}