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
};

export default ProductGallery;
