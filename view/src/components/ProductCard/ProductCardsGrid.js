

export default function ProductCardsGrid({cardObj}){
    return(
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="product__item sale">
                <div className="product__item__pic set-bg" data-setbg="cardObj.picurl">
                    <img src={cardObj.picurl} title={cardObj.item} alt={cardObj.item} height="280" />
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
                    <h6>{cardObj.item}</h6>
                    <div>
                    </div>
                    <br />
                    <a href="#" className="add-cart"> Shopping Now</a>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
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
    )
}