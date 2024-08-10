import React from 'react';
import './ProductList.css'
import Pizza from '../../img/ketopizza.webp'
import Taco from '../../img/taco2.jpg'
import Chicken from '../../img/chicken2.webp'
import Fries from '../../img/fries.webp'
import Hotdog from'../../img/hot-dogs.jpg'
import Milkshake from '../../img/coffee-milkshake-square.jpg'
import Product from '../Product/Product';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ProductList = () => {
  return (
    <div className='products'>
      <div className="top">
        <Product
          img={Pizza}
          name="Cheese Pizza"
          price="$3.76"
          icon={[
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStar />
          ]}
        />
        
        <Product
          img={Taco}
          name="Spicy Taco"
          price="$2.00"
          icon={[
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStar/>,
            <FaStar />
          ]}
        />

      <Product
          img={Chicken}
          name="Crispy Chicken"
          price="$1.14"
          icon={[
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStarHalfAlt className='goldStar'/>,
            <FaStar />
          ]}
        />
      </div>
      
      <div className="bottom">
        <Product
          img={Fries}
          name="Salted Fries"
          price="$1.56"
          icon={[
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStarHalfAlt className='goldStar'/>,
            <FaStar/>,
            <FaStar />
          ]}
        />

        <Product
          img={Milkshake}
          name="Coffee Milkshake"
          price="$4.14"
          icon={[
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStarHalfAlt className='goldStar'/>,
            <FaStar />
          ]}
        />

        <Product
          img={Hotdog}
          name="Chili Hotdogs"
          price="$2.46"
          icon={[
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStar className='goldStar'/>,
            <FaStar />
          ]}
        />
      </div>
      
      
    </div>
  );
}

export default ProductList;
