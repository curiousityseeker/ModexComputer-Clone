import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-img-para'>
                    <img src="https://modxcomputers.com/wp-content/uploads/2023/05/cropped-modex-final-logo222-1-1-e1684948362675.png" alt="" />
                    <p>We have Great amount of experience in Building Gaming PC, Editing PC & Workstation PC for our clients. We build with love and we know what your PC means to you.</p>
                </div>
                <div className="footer-shop-categories">
                    <h4>SHOP CATEGORIES</h4>
                    <a href="">Custome PC</a>
                    <a href="">PC Components</a>
                    <a href="">PC Peripherals</a>
                </div>
                <div className="footer-information">
                    <h4>INFORMATION</h4>
                    <a href="">Contact Us</a>
                    <a href="">About Us</a>
                    <a href="">Terms & Conditions</a>
                </div>
                <div className="footer-contact-us">
                    <h4>CONTACT US</h4>
                    <p>Store Address: 809, 8th Floor, Bhandari House -91, Nehru Place, New Delhi 110019
                        <br />
                        Phone: +91-7011805001 10am-6pm (Mon-Sat)
                        <br />
                        Mail: support@modxcomputers.com
                    </p>
                    <div className="social-media-icons">

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer