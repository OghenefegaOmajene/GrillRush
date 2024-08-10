import React from 'react';
import './ProductList.css'
import Pizza from '../../img/ketopizza.webp'
import Taco from '../../img/taco2.jpg'
import Chicken from '../../img/chicken2.webp'
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
      </div>
      
      
    </div>
  );
}

export default ProductList;
