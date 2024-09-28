import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOutUser } from "../Slice/Slice";


// function Profile() {

//     const loginedUser=useSelector(state=>state.userInfo.user)
//     const navigate=useNavigate();
//     const dispatch=useDispatch();   
//     return (  <div style={{backgroundColor:'lightcoral',height:'100vh'}}>
       
//    {loginedUser && <div><img src="./Images/loguserprofile.jpg" alt="" style={{borderRadius:'100px',
//      height:200,width:200,position:'absolute',top:'10%'}}/>

//    <div style={{backgroundColor:'lightblue' ,borderRadius:'20px', width:'55%', position:'absolute',top:'%',left:'28%'}}>
//       <h2 style={{color:"gray"}}>UUID : {loginedUser.userId}</h2>     
//       <h2 style={{color:"gray"}}> Name : {loginedUser.name}</h2>
//       <h2 style={{color:"gray"}}>User name : {loginedUser.username}</h2>
//       <h2 style={{color:"gray"}}>Email : {loginedUser.email}</h2>

//    </div>
      


//       <img src="./Images/logout3.png" style={{width:50,height:50,position:'absolute',top:'10%',right:'7%'}}
//              onClick={()=>{dispatch(LogOutUser())
//               navigate('/')
                 
//              }} alt="" className="profile"/>
//              <h4 style={{position:'absolute',top:'17%',right:'7%',color:'darkgoldenrod'}} >LogOut</h4></div>  } 


//       {
//         !loginedUser && <div>
//             <h1>No Login user</h1>
               
          
//              <img src="./Images/login.png" style={{width:80,height:80,position:'absolute',top:'50%',right:'70%'}}
//              onClick={()=>navigate('/login')} alt="" className="login"/>
//              <h2 style={{position:'absolute',top:'60%',right:'70%',color:'lightblue'}} >LogIn</h2>

//              <img src="./Images/signup.png" style={{width:80,height:80,position:'absolute',top:'50%',right:'40%'}}
//              onClick={()=>navigate('/signup')} alt="" className="login"/>
//              <h2 style={{position:'absolute',top:'60%',right:'40%',color:'lightblue'}} >SignUp</h2>

//         </div>
//       }

//            <img src="./Images/home.png" style={{width:50,height:50,position:'absolute',top:'30%',right:'7%'}}
//              onClick={()=>navigate('/')} alt="" className="login"/>
//              <h3 style={{position:'absolute',top:'36%',right:'7%',color:'lightblue'}} >home</h3>

       
    
//     </div>);
// }

// export default Profile;

import "./profile.css"

function Profile() {
  const loginedUser = useSelector(state => state.userInfo.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();   

  return (
      <div className="profile-page">
          {loginedUser ? (
              <div className="profile-container">
                  <img src="./Images/loguserprofile.jpg" alt="User Profile" className="profile-picture" />

                  <div className="profile-details">
                      <h2>UUID: <span>{loginedUser.userId}</span></h2>
                      <h2>Name: <span>{loginedUser.name}</span></h2>
                      <h2>Username: <span>{loginedUser.username}</span></h2>
                      <h2>Email: <span>{loginedUser.email}</span></h2>
                  </div>

                  <div className="logout-btn-container" onClick={() => { dispatch(LogOutUser()); navigate('/'); }}>
                      <img src="./Images/logout3.png" alt="Logout" />
                      <h4>Logout</h4>
                  </div>

                  <div className="home-btn-container" onClick={() => navigate('/')}>
                      <img src="./Images/home.png" alt="Home" />
                      <h4>Home</h4>
                  </div>
              </div>
          ) : (
              <div className="no-login-container">
                  <h1>No Login User</h1>
                  <div className="login-signup-buttons">
                      <div onClick={() => navigate('/login')}>
                          <img src="./Images/login.png" alt="Login" />
                          <h2>Login</h2>
                      </div>
                      <div onClick={() => navigate('/signup')}>
                          <img src="./Images/signup.png" alt="Signup" />
                          <h2>SignUp</h2>
                      </div>
                  </div>
              </div>
          )}
      <img src="./Mobiles/back.png" alt="" style={{position:'absolute',bottom:'13%',left:'7%',width:50,height:50}} onClick={()=>navigate('/')} />

      </div>
  );
}

export default Profile;
