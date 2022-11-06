import React from "react";
import {Box} from "@mui/material";
import "./style.css";
import Typography from "@mui/material/Typography";
import ProductSnippet from '../ProductSnippet';

export default function Overflow(props) {

    const {title, products} = props;

    return (
        <Box sx={{m:4}}>
            <Typography
                variant="h5"
                component="h2"
            >
                {title}
            </Typography>
            <div className="flow-container">
                {
                    products?.map((product) => {
                        return (
                            <ProductSnippet key={product.id} product={product} />
                        );
                    })
                    
                }
            </div>
        </Box>
    );
}