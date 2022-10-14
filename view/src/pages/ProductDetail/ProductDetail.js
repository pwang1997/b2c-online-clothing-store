import { Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productList } from "../../mock/product";

const ProductDetail = () => {
  return (
    <>
      <Grid container gap={2}>
        {productList?.map((item) => {
          return (
            <Grid key={item.id}>
              <ProductCard {...item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductDetail;
