import { OverflowDetector } from 'react-overflow';
import React from "react";
import "./style.css";


export default function Overflow(){

    const images =[
        {id:"1", url:"product-1.jpg"},
        {id:"2", url:"product-2.jpg"}
    ]

    return (
           <div className="flow-container">
                <p className="scroll">
                    {
                        images.map((image) => {
                            return(
                                <div>
                                    <img src={image.url} height="95%" width="95%" alt=""/>
                                </div>
                            );
                        })
                    }
                </p>
           </div>

    );


}
