import { useState, createContext, useMemo } from 'react';

import Products from './CARD/Products';
import SignUpPage from './APPlication/SignUpPage';
import Cart from './APPlication/Cart';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './APPlication/LoginPage';
import Home from './APPlication/Home';
import NavBar from './APPlication/NavBar';
import TableUser from './APPlication/userTable';
import Profile from './APPlication/profile';

export const AppContext = createContext();

function App() {
  const productsDetails = [
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
  ];

  const userData=[
    {userId:"1231",name:"elango",username:"sparrow",password:"123123",email:"ace@gmail.com"},
    {userId:"12312",name:"panneer",username:"rose",password:"33112",email:"rose@gmail.com"},
    {userId:"2233",name:"arun",username:"KDnila",password:"009",email:"kdnila@gmail"}
  ]



  const [products, setProducts] = useState(productsDetails);
  const [cart, setCart] = useState([]);
  const [users,setUsers]=useState(userData)


  function addToCart(productId) {
    // Check if the product is already in the cart
    const isProductInCart = cart.some((product) => product.productId === productId);
    if (!isProductInCart) {
      const product = products.find((p) => p.productId === productId);
      console.log("add cart : " + product)

      setCart([...cart, product]);

      console.log(product)
      console.log(cart)
    }
  }

  function createUser(user){
    user.userId=crypto.randomUUID();
    setUsers([...users,user])
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
    

    function updateQuantity(productId,newQuantity){
        setCart(prevCart=>
          prevCart.map(product=>
            product.productId ===productId?{...product,quantity : newQuantity >0 ? newQuantity:1 } : product
          )
        )
    }

    function removeFromCart(productId) {
      const updatedCart = cart.filter((product) => product.productId !== productId);
      setCart(updatedCart);
    }

    function loginUser(email, password) {
      console.log("Logging in with:", email, password);
      const found = users.find(user => 
          user.email === email&& 
          user.password === password
      );
      console.log("Found user:", found);
      return found; // Return the found user or undefined
  }
  
  function SignUpUser(user){
      user.userId=crypto.randomUUID()
      setUsers([...users,user])
      console.log("users :   :  " + users)
  }
      

  return (    
    <>
    <AppContext.Provider value={{ SignUpUser,products, addToCart, cart ,createUser,removeFromCart,updateQuantity,loginUser,users} }>

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
        </Routes>
      </Router>
  
    </AppContext.Provider>
    </>
  );
}

export default App;

