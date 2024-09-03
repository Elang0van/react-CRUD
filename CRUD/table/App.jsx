
import { useState } from 'react';
import './App.css'
import UserTable from './table/userTable'
import AddUserForm1 from './form/addUsetForm1';
import EditUserForm from './form/editUserForm';

function App() {

  const usersData=[
    {id:1,name:"elango",username:"sparrow",phone:137262621},
    {id:2,name:"panneer",username:"rose",phone:632635523},
    {id:3,name:"Arun",username:"nila",phone:7681243321}
  ];


  const addUser =(user)=>{
    user.id=users.length+1
    setUsers([...users,user])
  }
  const deleteUser=(id)=>{
     setUsers(users.filter((user)=>user.id !==id))
     setEditing(false)
  }

  const [users,setUsers]=useState(usersData)
  const[editing,setEditing]=useState(false)
  
  const initialFormState={id:null,name:"",usrename:"",phone:"+91 "}
  
  const[currentUser,setCurrentUser]=useState(initialFormState);

  const editRow =(user)=>{
      setEditing(true);
      setCurrentUser({id:user.id,name:user.name,username:user.username,phone:user.phone})
  }
   
  const updateUser=(id,updatedUser)=>{
     setEditing(false)
     setUsers(users.map((user)=>user.id===id?updatedUser:user))
  }

  return (
 
    <div className='container'>
       <h1 style={{color: "aqua"}}>CRUD</h1>
       <div className='flex-row'>
        <div className='flex-large'>
          {editing?(<div>
            <h1 style={{color: 'chartreuse'}}>Edit User</h1>
            <EditUserForm 
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}/>
          </div>):(<div>
            <h2 style={{color: 'chartreuse'}}>Add User</h2>
            <AddUserForm1 addUser={addUser} />
          </div>)
          }
          </div>
          <div className='flex-large'>
            <h2 style={{color: 'chartreuse'}}>View User</h2>
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
          </div>
       </div>
    </div>
  )
}

export default App

