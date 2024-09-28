import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

function Order() {
  const { orders } = useContext(AppContext);
  const user = useSelector((state) => state.userInfo.user); // Get the logged-in user from Redux
  const navigate = useNavigate();

  // Filter orders based on the logged-in user
  const userOrders = orders.filter(order => order.userId === user?.userId);

  return (
    <div>
      <h2>{user?.name}'s Order History</h2>
      {userOrders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Order Date</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {userOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.date}</td>
                <td>
                  {order.items.map((item )=> (<div>
                    
                    <p key={item.productId}> <img src={item.SRC} style={{width:60,height:60}} alt="" />{item.productname} (Qty: {item.quantity})</p>
                     <p>₹{item.price}</p>
                  </div>
                  ))}
                </td>
                <td>₹{order.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <img src="./Mobiles/back.png" alt="" style={{position:'absolute',top:'3%',left:'20%',width:50,height:50}} onClick={()=>navigate('/')} />

    </div>
  );
}

export default Order;
