import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";

export default function Slideshow() {
    return (
        <div className="slide-container">
            <Fade>
                <div className="each-fade">
                    <img src="hero-1.jpg" height="95%" width="95%"/>
                </div>
                <div className="each-fade">
                    <img src="hero-2.jpg" height="95%" width="95%"/>
                </div>
            </Fade>
        </div>
    );
}
