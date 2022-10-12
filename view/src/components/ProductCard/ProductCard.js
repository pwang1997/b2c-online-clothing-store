import { useState } from "react";
// import React, { useEffect, useRef } from 'react';

export default function ProductCard() {

    const [text, setText] = useState(false)
    const styles = {
    };

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="product__item sale">
                <div className="product__item__pic set-bg" data-setbg="https://m.media-amazon.com/images/I/91F7MBF+p-S._AC_UX679_.jpg">
                    <img src="https://m.media-amazon.com/images/I/71hlZVUtDuL._AC_SX679_.jpg" title="Hoodie" alt="Hoodie" height="260" />
                    <span className="label">Sale</span>
                    {/* <ul className="product__hover">
                        <li><a href="#"><img src="img/icon/heart.png" alt="" /></a></li>
                        <li><a href="#">
                            <img src="/img/icon/compare.png" alt="" /> <span>Compare</span></a>
                        </li>
                        <li><a href="#">
                            <img src="/img/icon/search.png" alt="" /></a></li>
                    </ul> */}
                </div>
                <div className="product__item__text">
                    <h6>Hoodie</h6>
                    <div style={styles.hoodieImage}>
                    </div>
                    <br />
                    <a href="#" className="add-cart"> Shopping Now</a>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <div className="rating">
                        <i className="fa fa-star" style={styles.inputText}></i>
                        <i className="fa fa-star" style={styles.inputText}></i>
                        <i className="fa fa-star" style={styles.inputText}></i>
                        <i className="fa fa-star" style={styles.inputText}></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <h5>10% OFF</h5>
                    <div className="product__color__select">
                        <label htmlFor="pc-28">
                            <input type="radio" id="pc-28" />
                        </label>
                        <label className="active black" htmlFor="pc-29">
                            <input type="radio" id="pc-29" />
                        </label>
                        <label className="grey" htmlFor="pc-30">
                            <input type="radio" id="pc-30" />
                        </label>
                    </div>
                </div>
            </div>

        </div>

    );
}