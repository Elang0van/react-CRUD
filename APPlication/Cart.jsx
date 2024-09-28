import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { AppContext } from '../App';
import './cart.css'
import { useSelector } from 'react-redux';


const Cart = () => {
  const { cart, updateQuantity, removeFromCart, proceedToCheckout } = useContext(AppContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const user = useSelector((state) => state.userInfo.user); // Get logged-in user from Redux

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleCheckout = () => {
    if (user) {
      proceedToCheckout(user.userId); // Pass userId to associate the order
      navigate('/orders'); // Navigate to the orders page
    } else {
      alert("Please log in to proceed to checkout.");
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product) => (
            
            <div key={product.productId} className="cart-item">
              <img src={product.SRC}  />
              <h3>{product.productname}</h3>
              <p>Price: ₹{product.price}</p>
              <div className="cart-item-actions">
                <button onClick={() => updateQuantity(product.productId, product.quantity + 1)}>+</button>
                <div>{product.quantity}</div>
                <button onClick={() => updateQuantity(product.productId, product.quantity - 1)}>-</button>
                <button onClick={() => removeFromCart(product.productId)}>Remove</button>
              </div>
            </div>
          ))}
          <div> <h2 style={{color:'blue'}}>Total Price: ₹{totalPrice}</h2> </div>
          <button onClick={handleCheckout}>Proceed to pay</button>
        </>
      )}
            <img src="./Mobiles/back.png" alt="" style={{position:'absolute',bottom:'13%',left:'7%',width:50,height:50}} onClick={()=>navigate('/products')} />
    </div>

  );
};

export default Cart;
