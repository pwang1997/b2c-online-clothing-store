import React, { useEffect, useState } from "react";

import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Slideshow from "../../components/SlideShow";
import Overflow from "../../components/OverFlow";
import { fetchAllProductsService } from "../../services/ProductService";
import { useFirebaseProductCollection } from "../../context/FirebaseContext";

const Index = () => {
    const navigate = useNavigate();
    const productContext = useFirebaseProductCollection();

    const [products, setProducts] = useState();
    useEffect(() => {
        fetchAllProductsService(productContext, setProducts);
    }, []);

    return (
            <Grid container>
                <Grid item xs={12}>
                    <Slideshow/>
                </Grid>

                <Grid item xs={12}>
                    <Overflow title={"Fall season sales"} products={products} navigate={navigate}/>
                </Grid>
            </Grid>
    );
}
export default Index;
