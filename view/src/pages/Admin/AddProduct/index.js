import * as React from 'react';
import {useRef, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import {FormControl, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import {useFirebaseProductCollection, useFirebaseStorage} from "../../../context/FirebaseContext";
import {addProductService} from "../../../services/ProductService";
import Admin from "../../Admin";
import {ProductCategories, PromotionStatuses} from "../../../constants/Products";

export default function AddProduct(props) {
    const promotionStatuses = PromotionStatuses;
    const productCategories = ProductCategories;

    const useProductContextRef = useFirebaseProductCollection();
    const useStorage = useFirebaseStorage();

    const productNameRef = useRef("");
    const productDescriptionRef = useRef("");
    const productDefaultPriceRef = useRef(0);
    const productPromotionPriceRef = useRef(-1);
    const [productPromotionStatus, setProductPromotionStatus] = useState(false);
    const [productImage, setProductImage] = useState("");
    const [productCategory, setProductCategory] = useState("");

    const handleAddProduct = (event) => {
        event.preventDefault();

        const product = {
            productName: productNameRef.current.value,
            description: productDescriptionRef.current.value,
            price: parseFloat(productDefaultPriceRef.current.value),
            category : productCategory,
            promotionStatus : productPromotionStatus == "true",
            promotionPrice : parseFloat(productPromotionPriceRef.current.value)
        }

        if (!product.productName && !product.price && !product.description && !productImage) {
            alert("Inputs must not be empty!");
            return;
        }

        addProductService({
            storage: useStorage,
            db: useProductContextRef
        }, product, productImage);
    }


    return (
        <Box component="form">
            <Admin/>
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
                    <TextField
                        select
                        onChange={(e) => setProductCategory(e.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Product Category"
                    >
                        {productCategories.map((category) => (
                            <option key={category.label} value={category.label}>
                                {category.label}
                            </option>
                        ))}
                    </TextField>
                </Grid>

                <Grid item>
                    <TextField
                        select
                        onChange={(e) => setProductPromotionStatus(e.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Promotion Status"
                        value={productPromotionStatus}
                    >
                        {promotionStatuses.map((status) => (
                            <option key={status.value} value={status.value}>
                                {status.label}
                            </option>
                        ))}
                    </TextField>
                </Grid>

                <Grid item>
                    <FormControl fullWidth sx={{m: 1}} variant="standard">
                        <InputLabel htmlFor="productPromotionPrice">Promotion Price</InputLabel>
                        <Input
                            id="productPromotionPrice"
                            inputRef={productPromotionPriceRef}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </Grid>

                <Grid item>
                    <Button fullWidth variant="contained" component="label">
                        Upload Image
                        <input
                            hidden
                            accept="image/*"
                            type="file"
                            onChange={(e) => {
                                setProductImage(e.target.files[0])
                            }}/>
                    </Button>
                    {productImage?.name}
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