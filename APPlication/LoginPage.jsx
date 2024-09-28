import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginedUser, loginFailed } from "../Slice/Slice";
import { AppContext } from "../App";
import InputTag from "./InputTag";
import { useNavigate } from "react-router-dom";

import './login.css'



function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginUser, forEmail } = useContext(AppContext);
  const [logUser, setLoginUser] = useState({ email: "", password: "" });
  const user = useSelector(state => state.userInfo.user);
  const [showPass,setShowpass]=useState(false)

  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
    generalError: ""
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginUser({ ...logUser, [name]: value });
    setError({ ...error, [`${name}Error`]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
 
    if (!logUser.email) {
      setError(prev => ({ ...prev, emailError: "Email is required" }));
      hasError = true;
    } else if (!emailRegex.test(logUser.email)) {
      setError(prev => ({ ...prev, emailError: "Invalid email format" }));
      hasError = true;
    }

    if (!logUser.password) {
      setError(prev => ({ ...prev, passwordError: "Password is required" }));
      hasError = true;
    } else if (logUser.password.length < 4) {
      setError(prev => ({ ...prev, passwordError: "Password must be at least 4 characters" }));
      hasError = true;
    }

    if (hasError) return;

    const foundUser = loginUser(logUser.email);

    if (foundUser) {
      if (foundUser.password === logUser.password) {
        dispatch(loginedUser(foundUser));
        setLoginUser({ email: "", password: "" });
        navigate("/");
      } else {
        setError((prev) => ({ ...prev, passwordError: "Incorrect password" }));
      }
    } else {
      setError((prev) => ({ ...prev, emailError: "Incorrect email" }));
    }
  };

  const errorMessage = useSelector(state => state.userInfo.errorMessage);

  function toggleShowPass(){
    setShowpass(pre=>!pre)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h2>Login</h2>
        <label>Email: </label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={logUser.email}
        />
        {error.emailError && <p>{error.emailError}</p>}
        
        <label>Password: </label>
        <input
          type={showPass ? 'text' : 'password'}
          name="password"
          onChange={handleChange}
          value={logUser.password}
          style={{width:'86%'}}
        />
        <img src={showPass?"./Mobiles/openEye.png":"./Mobiles/closeEye.png"} alt=""  onClick={toggleShowPass}
        style={{width:35,height:35,position:'absolute', right:'8%',bottom:'28%'}}/>
      
        {error.passwordError && <p>{error.passwordError}</p>}  



        <button type="submit" className="submit">Login</button>
        {errorMessage && <p className="general-error">{errorMessage}</p>}
      </form>

      <img src="./Mobiles/back.png" alt="" style={{position:'absolute',bottom:'13%',left:'7%',width:50,height:50}} onClick={()=>navigate('/profile')} />
    </div >


  );
}

export default Login;

