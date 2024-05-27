import React from 'react'
import './ServicesCard.css'
const ServicesCard = (props) => {
    return (
        <div className="servicescard-container">
            <div className='service-img'>
                <img src={props.img} alt="" />
            </div>
            <div className='servicecard-info'>
                <h5>{props.title}</h5>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default ServicesCard