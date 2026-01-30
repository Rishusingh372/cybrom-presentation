import { useState, useEffect } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";

const Home=()=>{
  const navigate = useNavigate();

   const validateAuth=async()=>{
       const token = localStorage.getItem("token");
       try {
        const api = "http://localhost:8000/employees/userauth";
        const response = await axios.post(api , null ,{headers:{"auth_token":token}});
         console.log(response.data)
         localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", response.data.email);
        navigate("/dashboard");
       } catch (error) {
         console.log(error)
       }
   }

   useEffect(()=>{
    validateAuth();
   }, [])
 
    return(
        <>
          <h1 style={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: "2.2rem",
            letterSpacing: "0.5px",

            }}> Welcome To  JWT Login</h1>

        </>
    )
}

export default Home;