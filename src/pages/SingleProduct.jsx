import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style/SingleProduct.css'
const SingleProduct = () => {

    let { id } = useParams();
    // console.log(id);
    let [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then((res) => {
                // console.log(res)
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    console.log(product);

    const [quantity, setQuantity] = useState(1);

    const changeQuantity = (delta) => {
        setQuantity((prevQuantity) => Math.max(0, prevQuantity + delta));
    };


    return (
        <div className='single-product-Application'>
            {product &&
                <div className='single-product-container'>
                    <div className='single-product-img'>
                        <img src="https://modxcomputers.com/wp-content/uploads/2024/02/AMD-Ryzen-7-8700G-Processor-With-Radeon-Graphics.webp" alt="" />
                    </div>
                    <div className='single-product-content'>
                        <h1>{product.name}</h1>
                        <div className="single-product-info">
                            <span>  <h6>Brand</h6> <p>{product.brand}</p> </span>
                            <span> <h6>Socket</h6> <p>{product.socket}</p></span>
                            <span> <h6>Integrated Graphics
                            </h6> <p>{product.Integrated_Graphics}</p></span>
                            <span> <h6>Cores</h6> <p>{product.Cors}</p></span>
                            <span> <h6>Threads</h6> <p>{product.Threads}</p></span>
                            <span> <h6>Cache</h6> <p>{product.Cache}</p></span>
                        </div>
                        <h2>₹{product.price}</h2>
                        <div className='single-product-btn-container'>
                            <div className="quantity-control">
                                <div className="input-group">
                                    <button className="button-minus" onClick={() => changeQuantity(-1)}>-</button>
                                    <input type="number" value={quantity} readOnly className="quantity-field" />
                                    <button className="button-plus" onClick={() => changeQuantity(1)}>+</button>
                                </div>
                            </div>
                            <a href="" className='add-to-cart-btn'>Add To Cart</a>
                            <a href="" id='buy-now-btn' className='add-to-cart-btn'>Buy Now</a>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default SingleProduct