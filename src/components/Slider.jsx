import React from 'react'
import './Slider.css'
import SliderImg1 from '../assets/asset 22.png'
import SliderImg2 from '../assets/asset 23.png'
import SliderImg3 from '../assets/asset 24.png'
import SliderImg4 from '../assets/asset 25.png'
const Slider = () => {
    return (
        <>
            <div className='slider-container'>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={SliderImg1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={SliderImg2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={SliderImg3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className='slider-right-image'>
                    <img src={SliderImg4} alt="" />
                </div>
            </div>


        </>
    )
}

export default Slider