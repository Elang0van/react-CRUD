import { useEffect, useState } from "react";
import "./form.css"

function EditUserForm(props){

const [user,setUser]=useState(props.currentUser)

useEffect(()=>{
setUser(props.currentUser)
},[props])

function handlechange(event){
    const {name,value}=event.target;
    setUser({...user , [name]:value})
  
}
return(
    <form onSubmit={(event)=>{
        event.preventDefault();
        if(!user.name || !user.username)return;
         props.updateUser(user.id,user)
    }
    }>
         <label >Name</label>
         <input   type="text" name="name" onChange={handlechange} value={user.name} />
         <label  >UserName</label>
         <input type="text" name="username" onChange={handlechange} value={user.username} />
         <label >Phone</label>
         <input type="number" name="phone" onChange={handlechange} value={user.phone} />
         <button type="submit" >User update</button>
         <button onClick={()=>{
            props.setEditing(false)
         }} >Cancel</button>
    </form>
)
}
export default EditUserForm;