import { useState } from "react"
import "./Product.css"
import Modal from '../Modal/Modal'
import { FaShoppingBasket } from "react-icons/fa";
import Swal from "sweetalert2";



const Product = (props) => {

  const handleClick = () =>{
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "Added to Cart Successfully",
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    
    <>
      <div className="productBox">
        <div className="Block">
          <div className="productImage">
            
            <img src={props.img} alt="" />
          </div>

          <div className="productTxt">

            <h1 id='productName'><b>{props.name}</b></h1>
            <p id="price"><b>{props.price}</b></p>
            <i>{[props.icon]}</i>

            <button 
              className="addToCartBtn" 
              onClick={handleClick}
            >
              Add to Cart <FaShoppingBasket />
            </button>

            
          </div>
        </div>
      </div>
    </>
  )
}
export default Product;

// Rosemary (Rosmarinus officinalis) is an aromatic herb native to the Mediterranean region, it is an evergreen shrub with needle-like leaves and woody stems. Rosemary has a strong, fragrant aroma and a slightly bitter, astringent taste with hints of pine and lemon...often included in marinades, dressings, and herb blends, this spice enhances the flavor of roasted vegetables, adds depth to soups, stews, and broths and is commonly used to season lamb, pork, chicken, and beef.