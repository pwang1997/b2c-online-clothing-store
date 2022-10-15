import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useLocation } from "react-router-dom";
import {
  autumnList,
  springList,
  summerList,
  winterList,
} from "../../mock/product";

const ProductGallery = () => {
  const location = useLocation();
  const dataMap = {
    spring: springList,
    summer: summerList,
    autumn: autumnList,
    winter: winterList,
  };
  const [Data, setData] = useState([
    ...springList,
    ...summerList,
    ...winterList,
    ...autumnList,
  ]);
  useEffect(() => {
    if (location.state?.name) {
      setData(dataMap[location.state?.name]);
    }
  }, [location.state?.name]);

  return (
    <Grid container gap={2} sx={{ justifyContent: "space-evenly" }}>
      {Data?.map((item) => {
        return (
          <Grid key={item.id}>
            <ProductCard {...item} />
          </Grid>
        );
      })}
    </Grid>
  );

// import {useFirebaseProductCollection} from "../../context/FirebaseContext";
// import {fetchAllProductsService, fetchProductsByProductNameService, fetchProductsByCategoryService} from "../../services/ProductService";
//
// const ProductGallery = () => {
//     const productCollectionRef = useFirebaseProductCollection();
//
//     const location = useLocation();
//     const [products, setProducts] = useState([]);
//
//     useEffect(() => {
//
//         console.log(location.state);
//
//         if (!location.state) {
//             console.log("fetching all products");
//             fetchAllProductsService(productCollectionRef, setProducts);
//         } else if(location && location.state && location.state.productName) {
//             console.log("fetching products by productName");
//             fetchProductsByProductNameService(productCollectionRef, location.state.productName, setProducts);
//         } else if (location && location.state && location.state.category) { // fetch products based on category
//             console.log("fetching products by category");
//             fetchProductsByCategoryService(productCollectionRef, location.state.category, setProducts);
//         }
//     }, [location.state])
//
//     return (
//         <Fragment>
//
//         </Fragment>
//
//             // {
//             //     // placeholder for displaying actual products
//             //     (products) &&
//             //     products.map((row) => {
//             //         console.log(row.product);
//             //         return (
//             //             <Fragment key={row.id}>
//             //                 <p>{row.product.productName}</p>
//             //                 <p>{row.product.price}</p>
//             //             </Fragment>
//             //         )
//             //     })
//             // }
//     );
};
export default ProductGallery;