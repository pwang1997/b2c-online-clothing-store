import React from "react";
import {Link} from "@mui/material";
import {Box} from "@mui/material";
import "./style.css";
import {useNavigate} from "react-router-dom";

export default function Overflow() {
    const tops = [
        {id: "1", src: "product-2.jpg"},
        {id: "2", src: "product-4.jpg"},
        {id: "3", src: "product-5.jpg"},
        {id: "4", src: "product-8.jpg"},
        {id: "5", src: "product-9.jpg"},
        {id: "6", src: "product-12.jpg"},
    ]
    const shoes = [
        {id: "1", src: "product-1.jpg"},
        {id: "2", src: "product-3.jpg"},
        {id: "3", src: "product-1.jpg"},
        {id: "4", src: "product-3.jpg"},
        {id: "5", src: "product-1.jpg"},
        {id: "6", src: "product-3.jpg"},
    ]
    const navigate = useNavigate();
    return (
        <div>
            <Box>
                <div className="flow-container">
                    {
                        tops.map((top) => {
                            return (
                                <div className="scroll" key={top.id}>
                                    <Link
                                        onClick={(event) => navigate('/product', {state: {id: top.id, src: "img/product/"+top.src}})}>
                                        <img src={"img/product/"+top.src} alt=""/>
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
            </Box>
            <Box>
                <div className="flow-container">
                    {
                        shoes.map((shoe) => {
                            return (
                                <div className="scroll" key={shoe.id}>
                                    <Link onClick={(event) => navigate('/product', {
                                        state: {
                                            id: shoe.id,
                                            src: "img/product/"+shoe.src
                                        }
                                    })}>
                                        <img src={"img/product/"+shoe.src} alt=""/>
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
            </Box>
        </div>
    );
}
