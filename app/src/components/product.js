import React from 'react'
import './product.css'

const Product = ({
    title = "title",
    imgClass = "",
    desc = "",
    prices= [],
}) => {
    
    let pricingItems = prices.map(item => <div className="product__prices">
        { item.left }
        <div className="product__price_grow"/>
        { item.right }
    </div>)

    return (
        <div className="product__container">
            <div className={`product__image ${imgClass}`}></div>
            <div className="product__title">{ title }</div>
            <div className="product__desc">{ desc }</div>
            <div className="product__pricings">
                { pricingItems }
            </div>
        </div>
    )
}

export default Product