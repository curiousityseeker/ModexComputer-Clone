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
                <p id='price'>{props.price}</p>
            </div>
        </div>
    )
}

export default ProductCard