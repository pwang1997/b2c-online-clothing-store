import { useState } from "react";
import ProductCardsGrid from "./ProductCardsGrid";
import Grid from '@mui/material/Grid';
// import React, { useEffect, useRef } from 'react';

export default function ProductCard() {
    const cards=[{item:'Hoodie', picurl:'https://m.media-amazon.com/images/I/71hlZVUtDuL._AC_SX679_.jpg'},
    {item:'Socks', picurl:'https://static.zara.net/photos///2022/I/0/1/p/3739/220/800/2/w/1126/3739220800_1_1_1.jpg?ts=1664799222795'},
    {item:'T-shirt', picurl:'https://static.zara.net/photos///2022/I/0/1/p/1165/532/800/2/w/1126/1165532800_6_1_1.jpg?ts=1665411994848'},
    {item:'Jeans', picurl:'https://static.zara.net/photos///2022/I/0/1/p/1934/243/800/2/w/1126/1934243800_2_4_1.jpg?ts=1663337327485'},
    {item:'Coats', picurl:'https://static.zara.net/photos///2022/I/0/1/p/4432/816/800/2/w/1126/4432816800_6_1_1.jpg?ts=1665474248519'},
    {item:'Boots', picurl:'https://static.zara.net/photos///2022/I/1/1/p/3110/010/040/2/w/668/3110010040_6_1_1.jpg?ts=1662104708269'},
   
]

    return (
        <Grid container spacing={2}>
        {cards.map((card)=>(
            <Grid item xs={4}>
                <ProductCardsGrid cardObj={card} />
            </Grid>
        ))}
        </Grid>
        
    );
}