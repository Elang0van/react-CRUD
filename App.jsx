import { useState, createContext, useMemo, useReducer, useCallback } from 'react';

import Products from './CARD/Products';
import SignUpPage from './APPlication/SignUpPage';
import Cart from './APPlication/Cart';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './APPlication/LoginPage';
import Home from './APPlication/Home';
import NavBar from './APPlication/NavBar';
import TableUser from './APPlication/userTable';
import Profile from './APPlication/profile';
import Order from './APPlication/Orders';

export const AppContext = createContext();

function App() {
  const productsDetails = useMemo(()=> [
    { productname: 'Apple-watch', SRC: './Images/appleWatch.jpg', productId: 1, price: 15699 },
    { productname: 'Boat-watch', SRC: './Images/boat.jpg', productId: 2, price: 4999 },
    { productname: 'Digital-watch', SRC: './Images/digitalWatch.jpg', productId: 3, price: 2000 },
    { productname: 'Google-Pixel', SRC: './Images/googlePixel.jpg', productId: 4, price: 3999 },
    { productname: 'pTron-SmartWatch', SRC: './Images/pTronWatch.jpg', productId: 5, price: 1499 },
    { productname: 'lether-RistWatch', SRC: './Images/letherWahtch.jpg', productId: 6, price: 1400 },
    { productname: 'Mac-Steel', SRC: './Images/macSteel.jpg', productId: 7, price: 17499 },
    { productname: 'Mac-watch', SRC: './Images/macWatch.jpg', productId: 8, price: 4999 },
    { productname: 'Normal-Ristwatch', SRC: './Images/ristWatch.jpg', productId: 9, price: 499 },
    { productname: 'Samsung-Watch', SRC: './Images/samsungWatch.jpg', productId: 10, price: 3999 },
    { productname: 'Smart-watch', SRC: './Images/smart-watch.jpg', productId: 11, price: 2999 },
    { productname: 'Noel-Leeming', SRC: './Images/noelLeeming.jpg', productId: 12, price: 2999 }
  ],[]);

  const mobiles=useMemo(()=>[
    { productname: 'IPhone', SRC: './Mobiles/apple1.jpg', productId:13 , price:75000  },
    { productname: 'IPhone10', SRC: './Mobiles/applel2.jpg', productId:14 , price: 95999  },
    { productname: 'GalaxyA55', SRC: './Mobiles/galaxyA55.jpg', productId:15 , price: 45000  },
    { productname: 'IQOO12', SRC: './Mobiles/iqoo12.jpg', productId: 16, price:  34000},
    { productname: 'Notepad', SRC: './Mobiles/notepad.jpg', productId: 17, price:25000  },
    { productname: 'OnePlus-Edge', SRC: './Mobiles/onePlusE.jpg', productId: 18, price: 30000 },
    { productname: 'OPPO Z10', SRC: './Mobiles/oppo1.jpg', productId: 19, price: 23999 },
    { productname: 'OPPO K12x', SRC: './Mobiles/oppoK12X.jpg', productId: 20, price:  17999},
    { productname: 'Redmi A3', SRC: './Mobiles/redmeA3.jpg', productId: 21, price:15000  },
    { productname: 'VIVO S6', SRC: './Mobiles/vivo1.jpg', productId:22 , price:14000  },
    { productname: 'VIVO Y17', SRC: './Mobiles/vivoY17.jpg', productId:23 , price: 17999 },
    { productname: 'VIVO Y20S', SRC: './Mobiles/vivoY20s.jpg', productId:24 , price:2000  }
  ],[]);

  const userData=useMemo(()=>[
    {userId:'a775cc01-4665-4cd1-90f7-6fbb444f06ad',name:"elango",username:"sparrow",password:"123123",email:"ace@gmail.com"},
    {userId:'ed82df64-de87-46dc-bbf6-4b8c05b8a00c',name:"panneer",username:"rose",password:"33112",email:"rose@gmail.com"},
    {userId:'e53d965d-3ea3-4606-a1df-f70ca9d9f242',name:"arun",username:"KDnila",password:"009",email:"kdnila@gmail"}
  ],[]);

    const searchWords={
      watch:'watch',
      mobile:'mobile'
    }

 const reducer=useCallback((state,action)=>{
  switch(action.type){
    case searchWords.watch:
     return productsDetails
     case searchWords.mobile:
       return mobiles
       default:
       return state
 }
 },[])

 const [products,dispatch]=useReducer(reducer,[])
  const [cart, setCart] = useState([]);
  const [users,setUsers]=useState(userData)
  const [orders, setOrders] = useState([]); 

  function addToCart(productId) {
    const isProductInCart = cart.some((product) => product.productId === productId);
    if (!isProductInCart) {
      const product = products.find((p) => p.productId === productId);
      setCart([...cart, { ...product, quantity: 1 }]);  // Set default quantity to 1
    }
  }

  const proceedToCheckout = (userId) => {
    if (cart.length > 0) {
      const newOrder = {
        userId, // Attach the logged-in user ID
        items: cart,
        date: new Date().toLocaleString(),
        totalPrice: cart.reduce((total, product) => total + product.price * product.quantity, 0),
      };
      setOrders([...orders, newOrder]); // Add the order to the orders array
      setCart([]); // Clear the cart after checkout
    }
  };

  function createUser(user){
    user.userId=crypto.randomUUID();
    setUsers([...users,user])
  }

  function updateQuantity(productId, newQuantity) {
    setCart(prevCart => 
      prevCart.map(product =>
        product.productId === productId
          ? { ...product, quantity: Math.max(newQuantity, 1) } // Ensure quantity is at least 1
          : product
      )
    );
  }

    // Update quantity of products in cart
    // function updateQuantity(productId, newQuantity) {
    //    console.log(cart)
    //   setCart((prevCart) =>
    //     prevCart.map((product) =>
    //       product.productId === productId
    //         ? { ...product, quantity: newQuantity > 0 ? newQuantity : 1 }
    //         : product
    //     )
    //   );
    // }
  

    function removeFromCart(productId) {
      const updatedCart = cart.filter((product) => product.productId !== productId);
      setCart(updatedCart);
    }

    function loginUser(email) {
      const found = users.find(user => 
          user.email === email
      );
      console.log("Found user:", found);
      return found;
  }
  
    
  function forEmail(logemail){
    const email=users.filter((user)=>user.email !== logemail)
    return email
} 
   
  function SignUpUser(user){
      user.userId=crypto.randomUUID()
      setUsers([...users,user])
      console.log("users :   :  " + users)
  }
      

  return (    
    <>
    <AppContext.Provider value={{ forEmail,orders,proceedToCheckout,searchWords,dispatch,SignUpUser,products, addToCart, cart ,createUser,removeFromCart,updateQuantity,loginUser,users} }>

      <Router>
        {/* <NavBar/> */}
        <Routes>
          <Route path='/products' element={<Products/>}/>
          <Route path='/carts' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='/table' element={<TableUser/>} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/orders' element={<Order/>}/>
        </Routes>
      </Router>
  
    </AppContext.Provider>
    </>
  );
}

export default App;

