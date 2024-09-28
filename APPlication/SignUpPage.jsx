import { useState } from "react";
import InputTag from "./InputTag";
import { AppContext } from "../App";
import { useContext } from "react";
import './signup.css'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginedUser } from "../Slice/Slice";


function SignUpPage() {
    const{SignUpUser,loginUser}=useContext(AppContext)
    const navigate=useNavigate()
    const dispatch=useDispatch();

    const initialForm={
     name:"",
     username:"",
     password:"",
     email:""
    }

    const[error,setError]=useState({
      nameError:'',
      usernameError:'',
      passwordError:'',
      emailError:'',
    })

    
    const[user,setUser]=useState(initialForm)
    function handleChange(event){
         const {name,value}=event.target;
         if (name === "name") {
          const filteredValue = value.replace(/[0-9]/g, ''); // Remove digits (0-9)
          setUser({ ...user, [name]: filteredValue });
        } else {
          setUser({ ...user, [name]: value });
        }
         setError({...error,[`${[name]}Error`]:""})
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function handleSubmit(event){
      event.preventDefault();

      const isExistEmail=loginUser(user.email)

      let hasError = false;

      if (!user.name) {
        setError(prev => ({ ...prev, nameError: "name is required" }));
        hasError = true;
      } 
    
 
    if (!user.email) {
      setError(prev => ({ ...prev, emailError: "Email is required" }));
      hasError = true;
    } else if (!emailRegex.test(user.email)) {
      setError(prev => ({ ...prev, emailError: "Invalid email format" }));
      hasError = true;
    } else if(isExistEmail){
      setError(prev => ({ ...prev, emailError: "email already exist" }));   
    }

    if (!user.password) {
      setError(prev => ({ ...prev, passwordError: "Password is required" }));
      hasError = true;
    } else if (user.password.length < 4) {
      setError(prev => ({ ...prev, passwordError: "Password must be at least 4 characters" }));
      hasError = true;
    }
    
    if (!user.username) {
      setError(prev => ({ ...prev, usernameError: "Username is required" }));
      hasError = true;
    }

    if (hasError) return;

      if(user.name && user.password && user.email && user.username && !isExistEmail){
        SignUpUser(user)    
        dispatch(loginUser)   
        setUser(initialForm);
        navigate('/')

      }
      
    }

    return ( <>

    <form onSubmit={handleSubmit} style={{position:'absolute',top:'10%'}}>
      <h1>Sign Up</h1>
    <InputTag labelName={'Enter Name : '} name={'name'} onChange={handleChange} value={user.name}/>
    {error && <p>{error.nameError}</p>}
    <InputTag labelName={'Create UserName : '} name={'username'} onChange={handleChange} value={user.username}/>
    {error && <p>{error.usernameError}</p>}
    <InputTag labelName={'Create Password : '} name={'password'} onChange={handleChange} value={user.password}/>
    {error && <p>{error.passwordError}</p>}
  
    <InputTag labelName={'Enter Email : ' } name={'email'} onChange={handleChange} value={user.email} />
    {error && <p>{error.emailError}</p>}

     <br />
    <button type="submit" className="submit">SignUp</button>

    </form>
    <img src="./Mobiles/back.png" alt="" style={{position:'absolute',bottom:'13%',left:'7%',width:50,height:50}} onClick={()=>navigate('/profile')} />
    </> );
}

export default SignUpPage;