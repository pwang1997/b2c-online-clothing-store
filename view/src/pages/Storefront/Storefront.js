import { Grid } from "@mui/material";
import SeasonalProductCard from "../../components/SeasonalProductCard";
import { sortList } from "../../mock/sort";

const Storefront = () => {
  return (
    <Grid container gap={2} sx={{ justifyContent: "space-evenly" }}>
      {sortList?.map((item) => {
        return (
          <Grid key={item.id}>
            {/* <ProductCard {...item} /> */}
            <SeasonalProductCard {...item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Storefront;
