import React, {useEffect, useRef, useState} from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import { doc } from "firebase/firestore";
import { db } from "../../firebase-config";
import {
  deleteProductService, fetchProductImageService,
  updateProductService,
} from "../../services/ProductService";
import _ from 'lodash';
import {useFirebaseStorage} from "../../context/FirebaseContext";

export default function AdminProductCard(props) {
  const { id, productName, price, description, promotionStatus, promotionPrice, image } = props;
  const useStorage = useFirebaseStorage();

  const [imageURL, setImageURl] = useState();

  let originalProduct = {
    productName: productName,
    description: description,
    price: price,
    promotion_status: promotionStatus,
    promotion_price: promotionPrice
  }

  const promotionStatuses = [
    { label: "TRUE", value: true },
    { label: "FALSE", value: false }
  ]

  const productNameRef = useRef(productName);
  const productDescriptionRef = useRef(description);
  const productDefaultPriceRef = useRef(price);
  const promotionPriceRef = useRef(promotionPrice);

  const [productPromotionStatus, setProductPromotionStatus] = useState(promotionStatus);

  useEffect(() => {
    // fetch product image url
    if(!image) {
      return;
    }
    fetchProductImageService(useStorage, image, setImageURl);
  },[]);

  const handleChange = (event) => {
    setProductPromotionStatus(event.target.value);
  };

  const [isDeleted, setIsDeleted] = useState(false);
  const docRef = doc(db, "products", id);

  const handleProductUpdate = (event) => {
    event.preventDefault();

    const product = {
      productName: productNameRef.current.value,
      description: productDescriptionRef.current.value,
      price: parseFloat(productDefaultPriceRef.current.value),
      promotion_status: productPromotionStatus == "true",
      promotion_price: parseFloat(promotionPriceRef.current.value)
    };
    
    // early termination when trying to update product with empty fields
    if (!product.productName || !product.price || !product.description
       || !product.promotion_price) {
      alert("Inputs must not be empty!");
      return;
    }

    // early termination when no update is needed.
    if (_.isEqual(originalProduct, product)) {
      alert("No Update");
      return;
    }

    // update and sync to latest product data
    updateProductService(docRef, product);
    alert("Product Updated");
    originalProduct = product;
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

        <Grid item>
          <TextField
            select
            onChange={handleChange}
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
          <TextField
            id="promotionPrice"
            label="Promotion Price"
            variant="standard"
            inputRef={promotionPriceRef}
            defaultValue={promotionPrice}
          />
        </Grid>

        <Grid item>
          <img sx={{maxWidth:"200px", maxHeight:"200px"}} src={imageURL} alt={image} />
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
