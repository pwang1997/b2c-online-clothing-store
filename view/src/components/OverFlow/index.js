import React from "react";
import {Box} from "@mui/material";
import "./style.css";
import Typography from "@mui/material/Typography";

export default function Overflow(props) {

    const {title, products, navigate} = props;

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
                    products.map((product) => {
                        return (
                            <div className="scroll" key={product.id}>
                                <img src={product.image} alt={product.productName} onClick={() =>
                                    navigate(`/product/${product.id}`, { state: product, replace: true})
                                }/>
                            </div>
                        );
                    })
                }
            </div>
        </Box>
    );
}
