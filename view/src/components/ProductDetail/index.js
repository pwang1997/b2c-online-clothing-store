import React from "react";
import "./style.css";
import {useLocation} from "react-router-dom";


export default function Products() {

    const products =[
        {id:"1", url:"product-big-2.png"},
    ];

    const location = useLocation();


    return (
        <div className="slide-container">
                {
                    products.map((product) => {
                        return(
                            <div key={product.id}>
                                {/*<img src={"img/shop-details/"+product.url} alt=""/>*/}
                                <img src={location.state.src}/>
                            </div>
                        );
                    })
                }
            <div className="product__details__content">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <div className="product__details__text">
                                <h4>Hooded thermal anorak</h4>
                                <h3>$270.00 <span>70.00</span></h3>
                                <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with
                                    adjustable
                                    cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip
                                    fastening
                                    with placket.</p>
                                <div className="product__details__option">
                                </div>
                                <div className="product__details__cart__option">
                                    <a href="view/src/components/ProductDetail/index#" className="primary-btn">add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
