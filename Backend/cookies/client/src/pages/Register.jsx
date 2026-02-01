import { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setData({ ...data,
       [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      let api = "http://localhost:8000/employees/registration";
      // Ensure we send 'username' to match backend controller
      const res = await axios.post(api, data);
      alert(res.data);
    } catch (err) {
      alert("Registration failed. Make sure server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Registration Page</h1>
      Enter Username: <input type="text" name="username" onChange={handleInput} /><br/>
      Enter Email: <input type="email" name="email" onChange={handleInput} /><br/>
      Enter Password: <input type="password" name="password" onChange={handleInput} /><br/>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Creating Account..." : "Create Account"}
      </button>
    </>
  );
};

export default Registration;