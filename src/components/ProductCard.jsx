import React from 'react'
import './ProductCard.css'
const ProductCard = (props) => {
    return (
        <div className='productCard-container'>
            <div className='product-img'>
                <img src={props.img} alt="" />
            </div>
            <div className='product-info'>
                <h6>{props.title}</h6>
                <span>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </span>
            </div>
            <div className='product-price-cart'>
                <p id='price'>₹{props.price}</p>
                <a href='' id="add-to-cart-btn" className='add-to-cart-btn'>Add to Cart</a>
            </div>
        </div>
    )
}

export default ProductCard