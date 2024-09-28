import { NavLink } from "react-router-dom";
import './navBar.css'
import { useDispatch, useSelector } from "react-redux";
import { LogOutUser } from "../Slice/Slice";


function NavBar() {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.userInfo.user)
    return (
        <>
            <nav>
                <ul>
                    {!user && <li ><NavLink to='/login' activeclassname ="active-link">LogIn</NavLink></li>}
                    <li><NavLink to='/signup' activeclassname="active-link">SignUp</NavLink></li>
                    {user && <li onClick={()=>dispatch(LogOutUser())}><NavLink to='/' activeclassname="active-link">LogOut</NavLink></li> }
                    
                    <li><NavLink to='/'       activeclassname="active-link">Home</NavLink></li>
                    <li><NavLink to='/products'> products</NavLink></li>
                    <li><NavLink to='/table' >table</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar