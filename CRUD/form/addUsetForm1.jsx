// import { useState } from "react";
// import "./form.css";

// const AddUserForm1 = (props) => {
//   const initialFormState = { id: null, name: "", username: "", phone: "" };
//   const [user, setUser] = useState(initialFormState);
//   const [errors, setErrors] = useState({ name: "", username: "", phone: "" });
  

//   const validateName = (name) => {
//     if (!name.trim()) {
//       return "*Name is required";
//     } else if (/[^a-zA-Z\s]/.test(name)) {
//       return "*Name must only contain letters and spaces";
//     }
//     return "";
//   };

//   const validateUsername = (username) => {
//     if (!username.trim()) {
//       return "*Username is required";
//     }
//     return "";
//   };

//   const validatePhone = (phone) => {
//     if (!/^(\s)?\d{10}$/.test(phone)) {
//       return "*Phone number must be 10 digits and optionally start with +91";
//     }
//     return "";
//   };
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     let newErrors = { ...errors };

//     if (name === 'phone') {
//       // Allow only numbers and "+91 " (if not already present)
//       const phoneValue = value;
//       setUser({ ...user, [name]: phoneValue });
//       newErrors.phone = validatePhone(phoneValue);
//     } else {
//       setUser({ ...user, [name]: value });

//       if (name === 'name') {
//         const nameError = validateName(value);
//         newErrors.name = nameError;
//       } else if (name === 'username') {
//         const usernameError = validateUsername(value);
//         newErrors.username = usernameError;
//       }
//     }

//     // Clear the specific error if input becomes valid
//     if (!newErrors.name && name === 'name' && !name==="name") {
//       newErrors.name = value ? validateName(value) : "";
//     }  //  newErrors.phone = value ? validatePhone(value) : "";
//     else if (!newErrors.username && name === 'username') {
//       newErrors.username = value ? validateUsername(value) : "";
//     }
//     if (!newErrors.phone && name === 'phone') {
//       newErrors.phone = value ? validatePhone(value) : "";
//     }
//     setErrors(newErrors);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const nameError = validateName(user.name);
//     const usernameError = validateUsername(user.username);
//     const phoneError = validatePhone(user.phone);

//     if (!nameError && !usernameError && !phoneError) {
//       props.addUser(user);
//       setUser(initialFormState);
//       setErrors({ name: "", username: "", phone: "" }); // Clear errors
//     } else {
//       setErrors({ name: nameError, username: usernameError, phone: phoneError });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         name="name"
//         onChange={handleChange}
//         value={user.name}
//         placeholder="Enter your name"
//       />
//       {errors.name && <div className="error">{errors.name}</div>}

//       <label htmlFor="username">Username</label>
//       <input
//         type="text"
//         name="username"
//         onChange={handleChange}
//         value={user.username}
//         placeholder="Enter Username"
//       />
//       {errors.username && <div className="error">{errors.username}</div>}

//       <label htmlFor="phone">Phone</label>
//       <input
//         type="text" // Changed from "number" to "text" to accommodate +91 and other formats
//         name="phone"
//         onChange={handleChange}
//         value={user.phone}
//         placeholder="+91"
//       />
//       {errors.phone && <div className="error">{errors.phone}</div>}

//       <button type="submit">Add new User</button>
      
//     </form>
//   );
// };

// export default AddUserForm1;


import { useState } from "react";
import "./form.css";

const AddUserForm1 = (props) => {
  const initialFormState = { id: null, name: "", username: "", phone: "" };
  const [user, setUser] = useState(initialFormState);
  const [errors, setErrors] = useState({ name: "", username: "", phone: "" });

  const validateName = (name) => {
    if (!name.trim()) {
      return "*Name is required";
    } else if (/[^a-zA-Z\s]/.test(name)) {
      return "*Name must only contain letters and spaces";
    }
    return "";
  };

  const validateUsername = (username) => {
    if (!username.trim()) {
      return "*Username is required";
    }
    return "";
  };

  const validatePhone = (phone) => {
    if (!/^(\s)?\d{10}$/.test(phone)) {
      return "*Phone number must be 10 digits and optionally start with +91";
    }
    return "";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    // Ensure name field does not contain numbers
    if (name === 'name' && /[^a-zA-Z\s]/.test(value)) {
      return; // Ignore changes that include invalid characters
    }
    if (name === 'phone' && /[^0-9\s+]/.test(value)) {
      return; // Ignore changes with invalid characters
    }
    
     setUser({ ...user, [name]: value });
    // const { name, value } = event.target;
    // let newErrors = { ...errors };

    if (name === 'phone') {
      // Allow only numbers and "+91 " (if not already present)
      const phoneValue = value;
      setUser({ ...user, [name]: phoneValue });
      newErrors.phone = validatePhone(phoneValue);
    } else {
      setUser({ ...user, [name]: value });

      if (name === 'name') {
        newErrors.name = value ? validateName(value) : "";
      } else if (name === 'username') {
        newErrors.username = value ? validateUsername(value) : "";
      }
    }

    // Clear the specific error if input becomes valid or is empty
    if (name === 'phone') {
      newErrors.phone = value ? validatePhone(value) : "";
    }

    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameError = validateName(user.name);
    const usernameError = validateUsername(user.username);
    const phoneError = validatePhone(user.phone);

    if (!nameError && !usernameError && !phoneError) {
      props.addUser(user);
      setUser(initialFormState);
      setErrors({ name: "", username: "", phone: "" }); // Clear errors
    } else {
      setErrors({ name: nameError, username: usernameError, phone: phoneError });
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
        placeholder="Enter your name"
      />
      {errors.name && <div className="error">{errors.name}</div>}

      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={user.username}
        placeholder="Enter Username"
      />
      {errors.username && <div className="error">{errors.username}</div>}

      <label htmlFor="phone">Phone</label>
      <input
        type="text" // Changed from "number" to "text" to accommodate +91 and other formats
        name="phone"
        onChange={handleChange}
        value={user.phone}
        placeholder="+91"
      />
      {errors.phone && <div className="error">{errors.phone}</div>}

      <button type="submit">Add new User</button>
    </form>
  );
};

export default AddUserForm1;
