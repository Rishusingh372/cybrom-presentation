// import { useState } from "react";
// import axios from "axios";
// // import '../css/registration.css';

// const Registration = () => {
//     const [input, setInput] = useState({});
//     const [isLoading, setIsLoading] = useState(false);

//     const handleInput = (e) => {
//         let name = e.target.name;
//         let value = e.target.value;
//         setInput(values => ({ ...values, [name]: value }));
//     }

//     const handleSubmit = async () => {
//         if (!input.username || !input.email || !input.password) {
//             alert("Please fill in all fields");
//             return;
//         }

//         setIsLoading(true);
//         try {
//             let api = "http://localhost:8000/employees/registration";
//             const response = await axios.post(api, input);
//             console.log(response);
//             alert(response.data);

//             setInput({});
//         } catch (error) {
//             console.error("Registration error:", error);
//             alert("Registration failed. Please try again.");
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     return (
//         <div className="registration-container">
//             <div className="registration-form">
//                 <h1 className="registration-title">Create Account</h1>
//                 <p className="registration-subtitle">Join us today and get started</p>

//                 <div className="form-group">
//                     <label className="form-label">Username</label>
//                     <input
//                         type="text"
//                         name="username"
//                         value={input.username || ''}
//                         onChange={handleInput}
//                         className="form-input"
//                         placeholder="Enter your username"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={input.email || ''}
//                         onChange={handleInput}
//                         className="form-input"
//                         placeholder="Enter your email"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label">Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={input.password || ''}
//                         onChange={handleInput}
//                         className="form-input"
//                         placeholder="Create a password"
//                     />
//                 </div>

//                 <button
//                     onClick={handleSubmit}
//                     className="submit-button"
//                     disabled={isLoading}
//                 >
//                     {isLoading ? 'Creating Account...' : 'Create Account'}
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Registration;

import { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    loading(true);
    try {
      let api = "http://localhost:8000/employees/registration";
      const res = await axios.post(api, data);
      console.log(res);
      alert(res.data);
    } catch (err) {
      console.error("Registration error:", err);
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Registration Page</h1>
      Enter Name
      <input type="text" name="name" value={data.name} onChange={handleInput()} />
      Enter Email
      <input type="email" name="email" value={data.email} onChange={handleInput()} />
      Enter Password
      <input type="password" name="password" onChange={handleInput()} />
      <button onClick={handleSubmit()} disabled={loading}>
        {loading ? "Creating Account..." : "Create Account"}
      </button>
    </>
  );
};

export default Registration;
