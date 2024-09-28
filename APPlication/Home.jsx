import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate=useNavigate();
    const LogedUser=useSelector(state=>state.userInfo.user)
    const themeStyle = {
        backgroundImage: `url('./Images/welcomePage.jpg')`, // Replace with your image URL
        backgroundSize: 'cover',  // Ensures the image covers the entire div
        backgroundPosition: 'center',  // Centers the background image
        height: '100vh',  // Full height of the viewport
        width: '100%',    // Full width of the page
        display: 'flex',  // For content alignment (optional)
        justifyContent: 'center',  // Centers content horizontally
        alignItems: 'center',  // Centers content vertically
        color: 'white'  // Example of text color if needed
    };
    
    const logoProducts= {
     
        imageUrl: './Images/shopping-cart_6188167.png',
        imageUrl1: './Images/profile1.jpg',
        imageUrl2:'./Images/orders.png'
    
      };

    return (
        <div style={themeStyle}>
           <div ><img src={logoProducts.imageUrl} style={{width:60,
                                                        height:60,    
                                                        
                                                        position: 'absolute', // Change to absolute to allow placement anywhere
                                                        top: '21%',    
                                                                     // Adjust these values to move the image
                                                        right: '91%',        // top, right, bottom, left can be adjusted for position
                                                        cursor: 'pointer' }} className="logo" onClick={()=>navigate('/products')}/></div>
                       <div><img src={logoProducts.imageUrl1} alt="" className="profile" style={{
                        width:60,
                        height:60,
                        position: 'absolute', // Change to absolute to allow placement anywhere
                        top: '8%',    
                                   // Adjust these values to move the image
                        right: '91%',        // top, right, bottom, left can be adjusted for position
                        cursor: 'pointer'
                       }} onClick={()=>(navigate('/profile'))}/></div>     

                       <div><img src={logoProducts.imageUrl2} alt="" className="profile" style={{
                        width:60,
                        height:60,
                        position: 'absolute', // Change to absolute to allow placement anywhere
                        top: '34%',    
                                   // Adjust these values to move the image
                        right: '91%',        // top, right, bottom, left can be adjusted for position
                        cursor: 'pointer'
                       }} onClick={()=>(navigate('/orders'))}/> 
                       {LogedUser && <div style={{position:'absolute',top:'5%',right:'80%',gap:'2px'}}>
                       <h2>{LogedUser.username}</h2>
                       <h4>{LogedUser.name}</h4>
                       </div>}
       
                       </div>  
                       <img src="./Mobiles/table.png" alt=""   
                       onClick={()=>navigate('/table')}
                       style={{width:60,height:60,position:'absolute',right:'91%' , bottom:'30%'}}/>                           
        </div>
    );
}

export default Home;
