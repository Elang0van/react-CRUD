// import React, { useState } from 'react';
// import { AppContext } from '../App';
// import { useContext } from 'react';

// const ProductCard = ({src,productname,price,productId,cart}) => {

//     const {isAdd,addToCart}=useContext(AppContext)
//     const isAdded = cart.some((product) => product.productId === productId);

//   return (
//     <>
//     <div className="card">
//       <img 
//         src={src}
//         alt="Product" 
//         className="card-img"
//       />
//       <h3 className="card-title">{productname}</h3>
//       <p className="card-price">{price}</p>
//       <button className="add-to-cart-btn" onClick={()=>addToCart(productId)} >
//          {isAdded ?'Added':'Add to cart'}
//       </button>
//     </div>
//     </>
//   );
// };

// export default ProductCard;




import React, { useContext } from 'react';
import { AppContext } from '../App';
import './card.css'

const ProductCard = ({ src, productname, price, productId }) => {
  const { addToCart, cart } = useContext(AppContext);

  // Check if the product is already in the cart
  const isAdded = cart.some((product) => product.productId === productId);

  return (
    <div className="card">
      <img src={src} alt="Product" className="card-img" />
      <h3 className="card-title">{productname}</h3>
      <p className="card-price">{price} ₹</p>
      <button
        className="add-to-cart-btn"
        onClick={() => addToCart(productId)}
        disabled={isAdded}  // Disable button if the product is already added
      >
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
