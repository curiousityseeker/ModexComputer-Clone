import React from 'react'
import './About.css'
const About = () => {
    return (
        <div className="about-container">
            <div className='about-video'>
                <iframe width="670"
                    height="377"
                    src="https://www.youtube.com/embed/iK9_Rzx_ci8?si=G3V3AeBL_eKlDIZi"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"></iframe>
            </div>
            <div className='about-container-info'>
                <h2>Why ModxComputers ?</h2>
                <p>We have Great amount of experience in Building Gaming PC, Editing PC & Workstation PC for our clients. We build with love and we know what your PC means to you.</p>
                <p>
                    Just give us a chance to serve you and get your Dream Gaming PC Build or Editing PC Build from us. So if you’re looking to buy PC online then you’re at the right place.</p>
                <p>For best Online PC Build services and prices shop ModxComputers!</p>
                <a href="">Contact Us</a>
            </div>
        </div>
    )
}

export default About