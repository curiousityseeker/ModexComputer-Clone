import React from 'react'
import './Navbar.css'
import Logo from '../assets/asset 0.png'
import UserIcon from '../assets/user.png'
import WhishListIcon from '../assets/heart.png'
import CartIcon from '../assets/cart.png'
const Navbar = () => {
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
                </ul>
                <div className="icon-section">
                    <img src={UserIcon} alt="" />
                    <img src={WhishListIcon} alt="" />
                    <img src={CartIcon} alt="" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar