import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import { doc } from "firebase/firestore";
import { db } from "../../firebase-config";
import {
  deleteProductService,
  updateProductService,
} from "../../services/ProductService";
export default function AdminProductCard(props) {
  const { id, productName, price, description } = props;

  const productNameRef = useRef(productName);
  const productDescriptionRef = useRef(description);
  const productDefaultPriceRef = useRef(price);

  const [isDeleted, setIsDeleted] = useState(false);
  const docRef = doc(db, "products", id);

  const handleProductUpdate = (event) => {
    event.preventDefault();

    const product = {
      productName: productNameRef.current.value,
      description: productDescriptionRef.current.value,
      price: productDefaultPriceRef.current.value,
    };

    if (!product.productName && !product.price && !product.description) {
      alert("Inputs must not be empty!");
      return;
    }

    updateProductService(docRef, product);
  };

  const handleProductRemoval = (event) => {
    event.preventDefault();

    if (!id) {
      alert("Found Invalid Product ID!");
      return;
    }

    deleteProductService(docRef);
    alert("Product removed");
    setIsDeleted(!isDeleted);
  };

  return (
    !isDeleted && (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ marginBottom: "15px" }}
      >
        <Grid item>
          <TextField
            id="productName"
            label="Product Name"
            variant="standard"
            inputRef={productNameRef}
            defaultValue={productName}
          />
        </Grid>
        <Grid item>
          <TextField
            id="productDescription"
            label="Description"
            variant="standard"
            inputRef={productDescriptionRef}
            defaultValue={description}
          />
        </Grid>

        <Grid item>
          <TextField
            id="productPrice"
            label="Price"
            variant="standard"
            inputRef={productDefaultPriceRef}
            defaultValue={price}
          />
        </Grid>

        <Button
          sx={{ mb: 2 }}
          onClick={handleProductUpdate}
          variant="contained"
        >
          UPDATE
        </Button>

        <Button
          sx={{ mb: 2, ml: 2 }}
          color={"error"}
          onClick={handleProductRemoval}
          variant="contained"
        >
          Remove
        </Button>
      </Grid>
    )
  );
}
