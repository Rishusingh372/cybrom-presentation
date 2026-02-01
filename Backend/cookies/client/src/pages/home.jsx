import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const validateAuth = async () => {
    try {
      const api = "http://localhost:8000/employees/userauth";
      // Check if user is already logged in via cookie
      const response = await axios.post(api, {}, { withCredentials: true });
      
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("email", response.data.email);
      navigate("/dashboard");
    } catch (error) {
      // If 401, user is just not logged in. Do nothing, let them stay on Home.
      console.log("Session not found. Please login.");
    }
  };

  useEffect(() => {
    validateAuth();
  }, []);

  return (
    <h1 style={{ textAlign: "center" }}>Welcome To JWT Login (Cookie Based)</h1>
  );
};

export default Home;