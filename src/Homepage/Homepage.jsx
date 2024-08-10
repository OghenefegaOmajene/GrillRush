import React from 'react'
import { useState } from 'react';
import './Homepage.css'
// import { GiSmokingFinger } from "react-icons/gi";
import { MdMenuBook } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import ProductList from '../components/ProductList/ProductList'


import Logo from '../img/logo2.png'
// import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { FaConciergeBell, FaShoppingBasket, FaBars, FaTimes } from "react-icons/fa";
import { TbMessageQuestion } from "react-icons/tb";


const Homepage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div className="Homepage">


        <div className='navBar'>
            
            <div className="nav-logo">
                <img src={Logo} alt="" />
            </div>

            <div className={`navigation ${isMenuOpen ? 'open' : ''}`}>
                <a href="/"><IoIosHome /> Home</a>
                <a href="#about"><TbMessageQuestion /> About</a>
                <a href="#menu"><FaConciergeBell /> Order</a>
            </div>

            <div className="cart">
                <i><FaShoppingBasket /></i>
            </div>

            <div className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            
        </div>






        <div className='banner'>
            <div className="bannerTxt">
                <h1>Welcome to GRILLRUSH Fast Foods</h1>
                <p>Craving Something Fresh, Fast and Delicious? We've Got You Covered! Let your tastebuds run wild with our exquisite menu of the best fast foods at your disposal.</p>

                <a href="#menu"><button className='checkMenuBtn'>Check out our menu <MdMenuBook /></button></a>
            </div>
            <div className="bannerImg">
                <div className="bannerImgTxt">
                    <h1>Welcome to GRILLRUSH Fast Foods</h1>
                    <p>Craving Something Fresh, Fast and Delicious? We've Got You Covered! Let your tastebuds run wild with our exquisite menu of the best fast foods at your disposal.</p>

                    <a href="#menu"><button className='checkMenuBtn'>Check out our menu <MdMenuBook /></button></a>
                </div>
                
            </div>
        </div>

        <div id="about">
            <h1>About Us</h1>
            <p>
                Welcome to GrillRush Foods, where speed meets flavor in the most delicious way possible! Born out of a passion for great food and a desire to bring mouthwatering meals to busy lives, 
                GrillRush Foods is your go-to destination for high-quality, freshly prepared fast food that satisfies your cravings without compromising on taste.
            </p>
            <p>
                At GrillRush Foods, we believe that fast food should be more than just quick—it should be an experience. That's why we've carefully crafted a menu that combines classic favorites with innovative new dishes, all made from the freshest ingredients and grilled to perfection. 
                Whether you're in the mood for a juicy burger, a crispy chicken wing, or a cheesy pizza, we've got something to excite your taste buds.
            </p>
            <p id='giveBack'>
                We’re passionate about giving back to the neighborhoods we serve, sourcing ingredients locally whenever possible, and minimizing our environmental impact through sustainable practices.
                So here are some reasons why you should order at GrillRush:
            </p>

            <div className='whyUs'>
                <p id='whyUsTxt'><i><TiTick /></i>We use only high-quality, fresh ingredients and offer a selection of healthy menu options, including salads, grilled items, and whole grain products.</p>
                <p id='whyUsTxt'>
                    <i><TiTick /></i>
                    We pride ourselves on providing exceptional service, ensuring that every visit is as satisfying as the meal itself. 
                    From our speedy service to our welcoming atmosphere, we strive to make your experience enjoyable.
                </p>
            </div>

            
            <p id='serveu'>
                Thank you for choosing GrillRush Foods, where fresh flavors and fast service come together in perfect harmony. We can't wait to serve you!
            </p>

        </div>

        <div id="menu">
            <h1 id='Explore'>Explore our diverse menu</h1>

            <ProductList></ProductList>
            {/* <ProductList></ProductList> */}
        </div>
    </div>
    
  )
}

export default Homepage