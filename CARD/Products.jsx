import ProductCard from "./Cards";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import './product.css';
import { useNavigate } from "react-router-dom";
import InputTag from "../APPlication/InputTag";

function Products() {
  const {searchWords,dispatch}=useContext(AppContext)
  const { products } = useContext(AppContext);
  const [input,setinput]=useState('');
  const navigate=useNavigate()
   
  function searchHandle(){
    if (searchWords.hasOwnProperty(input)) {
      dispatch({type:input})
    }
    else{
      alert("Not Found")
    }
  }
   

  return (
  
    <>
    
    <img src="./Images/carts.png" alt="" style={{height:60,width:60,position:'absolute',top:'3%'}} onClick={()=>navigate('/carts')} className="cartlogo"/>
    <h2 style={{color:'lightblue',position:'absolute',top:'11%',left:'2%'}} >cart</h2>
    <img src="./Images/home.png" style={{width:60,height:60,position:'absolute',left:'10%',top:'3%'}}
             onClick={()=>navigate('/')} alt="" className="login"/>

<h2 style={{color:'lightblue',position:'absolute',top:'11%',left:'10%'}} >home</h2>

<img className="search" src="./Images/search.png" alt="" style={{width:45.5,height:45.5,position:'absolute',right:'19%',top:'6.5%'}}
onClick={searchHandle}/> 

         <h1 style={{color:'gray',position:'absolute' ,top:'20%',left:'50%'}}>Products</h1><br />

         
         <input placeholder="Search product" type="text" onChange={(e)=>setinput(e.target.value)} style={{
          position:'absolute',top:'7%',left:'35%', width:'40%'}}/>



          {/* <button onClick={()=>navigate('/carts')} className="submit">cart</button> */}
        <div className="products-grid" style={{position:'absolute',top:'30%'}}>                    
      {products.map((pro) => (
      <ProductCard
      key={pro.productId}
          src={pro.SRC}
          productname={pro.productname}
          price={pro.price}
          productId={pro.productId}
        />
      ))}
    </div>
    </>

  );
}

export default Products
;
