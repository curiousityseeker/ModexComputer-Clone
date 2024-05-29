import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../assets/asset 0.png'
import UserIcon from '../assets/user.png'
import WhishListIcon from '../assets/heart.png'
import CartIcon from '../assets/cart.png'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='main_navbar'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className="serach-bar">
                <input type="text" placeholder='Search' />
            </div>
            <nav className='navbar'>
                <ul>
                    <li><a href="">Custom PC</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">We Are Hiring</a></li>
                    {/* <div className="dropdown">
                        <button className="dropbtn" onClick={toggleMenu}>
                            <i className="fas fa-bars"></i> All Categories <i className="fas fa-chevron-down"></i>
                        </button>
                    </div>
                    <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                        <a href="#"><i className="fas fa-microchip"></i> Processor</a>
                        <a href="#"><i className="fas fa-memory"></i> Motherboard</a>
                        <a href="#"><i className="fas fa-fan"></i> CPU Cooler</a>
                        <a href="#"><i className="fas fa-server"></i> RAM</a>
                        <a href="#"><i className="fas fa-video"></i> Graphics Card</a>
                        <a href="#"><i className="fas fa-hdd"></i> SSD</a>
                        <a href="#"><i className="fas fa-database"></i> Hard Drive</a>
                        <a href="#"><i className="fas fa-plug"></i> Power Supply</a>
                        <a href="#"><i className="fas fa-box"></i> Cabinet</a>
                        <a href="#"><i className="fas fa-wind"></i> Case Fans</a>
                        <a href="#"><i className="fas fa-cable"></i> Custom Cables</a>
                    </div> */}
                </ul>

                <div className="icon-section">
                    <i class="fas fa-user"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-cart-plus"></i>
                </div>
            </nav>
        </header>
    )
}

export default Navbar