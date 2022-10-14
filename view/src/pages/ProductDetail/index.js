import { Grid } from "@mui/material";
import PreCard from "../../components/PrePrdCard";
import { sortList } from "../../mock/sort";

const PreProduct = () => {
  return (
    <>
      <Grid container gap={2} sx={{ justifyContent: "space-evenly" }}>
        {sortList?.map((item) => {
          return (
            <Grid key={item.id}>
              {/* <ProductCard {...item} /> */}
              <PreCard {...item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default PreProduct;
