import React from 'react'
import Logo from '../../img/logo.png'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerLogo">
            <img src={Logo} alt="" />

            <div className="icons">
              <i><FaFacebook /></i>
              <i><FaInstagram /></i>
              <i><BsTwitterX /></i>
              <i><FaPinterestP /></i>
            </div>
        </div>

        <div className="box">
          <h1>Company</h1>
          <p>Home</p>
          <p>About us</p>
          <p>Contact Us</p>
        </div>

        <div className="box">
          <h1>Shop</h1>
          <p>Discounts</p>
          <p>Flash Sales</p>
          <p>Holiday Sales</p>
        </div>

        <div className="box">
          <h1>Legal</h1>
          <p>Privacy Policy</p>
          <p>Terms and conditions</p>
          <p>Copyright</p>
        </div>

        <div className="box">
            <h1>Payment Methods</h1>

            <div className="icons2">
              <i><FaPaypal /></i>
              <i><FaCcVisa /></i>
              <i><FaCcMastercard /></i>
            </div>
            
        </div>
        
    </div>
  )
}

export default Footer