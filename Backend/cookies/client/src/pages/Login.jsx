// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import "../css/login.css"
// const Login=()=>{
//   const navigate = useNavigate();
//     const [input, setInput] = useState({});
//    const handleInput=(e)=>{
//       let name=e.target.name;
//       let value=e.target.value;
//       setInput(values=>({...values, [name]:value}));
//    }
//    const handleSubmit=async()=>{
//       let api="http://localhost:8000/employees/login";
//       const response = await axios.post(api, input);
//       console.log(response);
//       localStorage.setItem("token", response.data.token);
//       alert(response.data.msg);
//       navigate("/home")
//    }
//     return(
//         <>
//          <div className="login-container">
//             <h1 className="login-title">Employee Login</h1>
            
//             <div className="form-group">
//                 <label className="form-label">Enter Email:</label>
//                 <input 
//                     type="email" 
//                     name="email" 
//                     onChange={handleInput}
//                     className="form-input"
//                 />
//             </div>
            
//             <div className="form-group">
//                 <label className="form-label">Enter Password:</label>
//                 <input 
//                     type="password" 
//                     name="password" 
//                     onChange={handleInput}
//                     className="form-input"
//                 />
//             </div>
            
//             <button onClick={handleSubmit} className="login-button">Login</button>
//         </div>
//         </>
//      )
// }
// export default Login;