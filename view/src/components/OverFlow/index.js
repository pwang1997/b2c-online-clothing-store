import React from "react";
import {Link} from "@mui/material";
import {Box} from "@mui/material";
import "./style.css";
import Typography from "@mui/material/Typography";

export default function Overflow(props) {

    const {title, products, navigate} = props;

    return (
        <Box>
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
                                <Link
                                    onClick={() => navigate(`/product/${product.id}`, {
                                        state: {
                                            id: product.id,
                                            src: "img/product/" + product.src
                                        }
                                    })}>
                                    <img src={"img/product/" + product.src} alt=""/>
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        </Box>
    );
}
