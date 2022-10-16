import React from "react";

import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {sortList} from "../../mock/sort";
import Slideshow from "../../components/SlideShow";
import Overflow from "../../components/OverFlow";
import SeasonalProductCard from "../../components/SeasonalProductCard";

const Index = () => {
    const navigate = useNavigate();

    const tops = [
        {id: "1", src: "product-8.jpg"},
        {id: "2", src: "product-8.jpg"},
        {id: "3", src: "product-8.jpg"},
        {id: "4", src: "product-8.jpg"},
        {id: "5", src: "product-8.jpg"},
        {id: "6", src: "product-8.jpg"},
        {id: "7", src: "product-8.jpg"},
        {id: "8", src: "product-8.jpg"},
        {id: "9", src: "product-8.jpg"},
        {id: "10", src: "product-8.jpg"},
        {id: "11", src: "product-8.jpg"},
        {id: "12", src: "product-8.jpg"},
    ]
    const shoes = [
        {id: "1", src: "product-1.jpg"},
        {id: "2", src: "product-1.jpg"},
        {id: "3", src: "product-1.jpg"},
        {id: "4", src: "product-1.jpg"},
        {id: "5", src: "product-1.jpg"},
        {id: "6", src: "product-1.jpg"},
        {id: "7", src: "product-1.jpg"},
        {id: "8", src: "product-1.jpg"},
        {id: "9", src: "product-1.jpg"},
        {id: "10", src: "product-1.jpg"},
        {id: "11", src: "product-1.jpg"},
        {id: "12", src: "product-1.jpg"},
    ]
    return (
        <>
            <Slideshow/>

            <Grid container gap={2} sx={{justifyContent: "space-evenly"}}>
                {sortList?.map((item) => {
                    return (
                        <Grid key={item.id}>
                            <SeasonalProductCard {...item} />
                        </Grid>
                    );
                })}
            </Grid>

            <Overflow title={"tops"} products={tops} navigate={navigate}/>
            <Overflow title={"shoes"} products={shoes} navigate={navigate}/>
        </>
    );
}
export default Index;
