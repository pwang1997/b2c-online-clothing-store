import React from "react";

import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {autumnList, springList, summerList, winterList} from "../../mock/product";
import {sortList} from "../../mock/sort";
import Slideshow from "../../components/SlideShow";
import Overflow from "../../components/OverFlow";
import SeasonalProductCard from "../../components/SeasonalProductCard";

const Index = () => {
    const navigate = useNavigate();

    const mockData = [
        ...springList,
        ...summerList,
        ...winterList,
        ...autumnList,
    ];

    const promotedProducts = mockData.reduce((products, product) => {
        if(product.id % 2 === 0) {
            product.promotionStatus = true;
            products.push(product);
        }
        return products;
    }, []);

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

            <Overflow title={"Promotions"} products={promotedProducts} navigate={navigate}/>
            <Overflow title={"Fall season sales"} products={[...autumnList]} navigate={navigate}/>
            <Overflow title={"More items to consider"} products={[...winterList]} navigate={navigate}/>
            <Overflow title={"Selected for you"} products={[...springList]} navigate={navigate}/>
        </>
    );
}
export default Index;
