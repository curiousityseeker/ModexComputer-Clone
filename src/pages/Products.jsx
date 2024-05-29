import React from 'react'
import './style/Products.css'
import ProductCard from '../components/ProductCard'
import { useAuth } from '../store/Auth'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  let navigate = useNavigate();

  let { allProducts } = useAuth();
  console.log(allProducts);


  const handleClick = (id) => {
    // alert("aldsfhlkdjsah")
    navigate(`/product/${id}`);
  }

  return (
    <>
      <div className='products-Application'>
        <div className='all-products-container'>
          {allProducts && allProducts.map((item, index) => (
            <div key={index} onClick={() => handleClick(item._id)}>
              <ProductCard img="https://modxcomputers.com/wp-content/uploads/2022/11/AMD-Ryzen-7-7700X-Processor-With-AMD-Radeon-Graphics.webp" title={item.name} price={item.price} />
            </div>
          ))
          }
        </div>
      </div>
    </>
  )
}

export default Products