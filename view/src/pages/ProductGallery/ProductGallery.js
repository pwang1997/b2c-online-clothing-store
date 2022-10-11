import Typography from "@mui/material/Typography";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductGallery = () => {
    return (
        <div>
            <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/elegant-icons.css" type="text/css"/>
            <link rel="stylesheet" href="css/magnific-popup.css" type="text/css"/>
            <link rel="stylesheet" href="css/nice-select.css" type="text/css"/>
            <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/slicknav.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/style.css" type="text/css"/> 
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