import Typography from "@mui/material/Typography";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductGallery = () => {
    return (
        <div>
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                sx={{flex: 2}}>
                ProductGallery page
            </Typography>

            <ProductCard />
        </div>


    );
};

export default ProductGallery;