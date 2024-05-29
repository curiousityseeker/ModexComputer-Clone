import React from 'react'
import Slider from '../components/Slider'
import ServicesCard from '../components/ServicesCard'
import ServiceImg1 from '../assets/asset 45.png'
import ServiceImg2 from '../assets/asset 46.png'
import ServiceImg3 from '../assets/asset 47.png'
import ServiceImg4 from '../assets/asset 48.png'
import About from '../components/About'
import ProductCard from '../components/ProductCard'
import Faqs from '../components/Faqs'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className="App">
            <Slider></Slider>


            <div className="services-container">
                <ServicesCard img={ServiceImg1} title="Safe Delivery" desc="All our products are safely packed and insured." />
                <ServicesCard img={ServiceImg2} title="Best Prices" desc="Get the best prices, value and deals on products." />
                <ServicesCard img={ServiceImg3} title="100% Genuine" desc="Shop with full assurance. All our products are genuine." />
                <ServicesCard img={ServiceImg4} title="Tech Support" desc="Stuck anywhere? All our customers get tech support." />
            </div>

            <About />

            <div className="product-container">
                <ProductCard img="https://modxcomputers.com/wp-content/uploads/2024/03/AMD-Ryzen-7-5700X3D.webp" title="AMD Ryzen 3 4300G Processor With Radeon" price="7490" />
                <ProductCard img="https://modxcomputers.com/wp-content/uploads/2022/02/Amd-Ryzen-5-3600-3.webp" title="AMD Ryzen 5 3600" price="9990" />
                <ProductCard img="https://modxcomputers.com/wp-content/uploads/2024/04/AMD-Ryzen-5-5600GT-Processor-With-Radeon-Graphics.webp" title="AMD Ryzen 5 5600GT Processor With Radeon Graphics" price="12590" />
                <ProductCard img="https://modxcomputers.com/wp-content/uploads/2022/02/AMD-Ryzen-5-5600G-Processor.webp" title="AMD Ryzen 5 5600G Processor With Radeon Graphics" price="10850" />
            </div>

            <div className='product-view-more-btn'>
                <Link to="/products">View More</Link>
            </div>


            <div className="faqs-container">
                <h1>FAQs</h1>
                <Faqs title="DO WE INSTALL OS AND DRIVERS?" desc="Yes all the PC Builds that we ship to our customers comes with windows and all the Drivers installed. You just need to sit back and relax we’re taking care of that." />
                <Faqs title="HOW DO WE SHIP OUR PC BUILDS?" desc="All our PC Build orders are shipped by leading courier Companies which also provides Insurance against shipping damage and lost. So you don’t need to worry about all this." />
                <Faqs title="HOW MUCH TIME DOES IT TAKE TO DELIVER A PC ORDER?" desc="A PC Build order goes through many stages which involves Components allocation, PC Assembly, Packing & Shipping. It takes around 10-12 Days to deliver an order." />
                <Faqs title="DO WE PROVIDE AFTER SALES SUPPORT?" desc="Yes all our customers are part of our family, we provide the best after sales support regarding warranty or any kind of technical support." />
            </div>
        </div>
    )
}

export default Home