import { useContext } from "react";
import { AppContext } from "../App";
import './table.css'
function TableUser() {

    const {users}=useContext(AppContext)
    
    return (  <>
           <table>
        <thead>
            <tr>
                <th>username</th>
                <th>name</th>
                <th>email</th>
                <th>password</th>
                <th>User id</th>
            </tr>
        </thead>
        <tbody>
              {users.map(user=>(
                        <tr key={user.userId}>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.userId}</td>
                    </tr>
              ))} 
        </tbody>
    </table>
    </>);
}

export default TableUser;