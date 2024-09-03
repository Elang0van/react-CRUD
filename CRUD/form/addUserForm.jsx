// import { useState } from "react";
// import "./form.css"

// const AddUserForm =(props)=>{
     
//     const initialFormState={id:null,name:"",username:"",phone:"+91 "}

//     const[user,setUser]=useState(initialFormState);

//     const handlechange=(event)=>{
//         const {name,value}=event.target;
//         setUser({...user , [name]:value})

//     }

//       return(
//         <form onSubmit={(event)=>{
//             event.preventDefault();
//             if(!user.name || !user.username)return;
//              props.addUser(user)
//              setUser(initialFormState)
//         }
//         }>
//              <label htmlFor="">Name</label>
//              <input type="text" name="name" onChange={handlechange} value={user.name}/>
//              <div className="error"></div>
//              <label htmlFor="">UserName</label>
//              <input type="text" name="username" onChange={handlechange} value={user.username}/>
//              <label >Phone</label>
//              <input type="number" name="phone" onChange={handlechange} value={user.phone} />
//              <button type="submit">Add new User</button>
//         </form>
//       )
// }

// export default AddUserForm;
import { useState } from "react";
import "./form.css";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "", phone: "+91 " };
  const [user, setUser] = useState(initialFormState);
  const [errors, setErrors] = useState({ name: "", username: "", phone: "+91 " });

  const validateForm = () => {
    let valid = true;
    const errors = { name: "", username: "", phone: "" ,};

    if (!user.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }

    if (!user.username.trim()) {
      errors.username = "Username is required";
      valid = false;
    }

    if (!user.phone.trim() || !/^(\+91\s)?\d{10}$/.test(user.phone)) {
      errors.phone = "Phone number must be 10 digits and optionally start with +91 ";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   if(name==='name' && !/[^a-zA-Z/s]/.test(value)){
  //     return;
  //   }
  //   setUser({ ...user, [name]: value });
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    // Ensure name field does not contain numbers
    if (name === 'name' && /[^a-zA-Z\s]/.test(value)) {
      return; // Ignore changes that include invalid characters
    }
    
    setUser({ ...user, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      props.addUser(user);
      setUser(initialFormState);
      setErrors({ name: "", username: "", phone: "" }); // Clear errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={user.name}
      />
      {errors.name && <div className="error">{errors.name}</div>}

      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={user.username}
      />
      {errors.username && <div className="error">{errors.username}</div>}

      <label htmlFor="phone">Phone</label>
      <input
        type="text" // Changed from "number" to "text" to accommodate +91 and other formats
        name="phone"
        onChange={handleChange}
        value={user.phone}
      />
      {errors.phone && <div className="error">{errors.phone}</div>}

      <button type="submit">Add new User</button>
    </form>
  );
}; 


export default AddUserForm;
