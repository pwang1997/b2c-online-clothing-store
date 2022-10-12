import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";

const images =[
    {id:"1", url:"hero-1.jpg"},
    {id:"2", url:"hero-2.jpg"}
]

export default function Slideshow() {

    return (
        <div className="slide-container">
            <Fade>
                {
                    images.map((image) => {
                        return(
                            <div>
                                <img src={image.url} height="95%" width="95%" alt=""/>
                            </div>
                        );
                    })
                }
            </Fade>
        </div>
    );
}
