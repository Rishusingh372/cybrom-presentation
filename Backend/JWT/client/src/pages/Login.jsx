import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
      );
      // ✅ Save JWT token in localStorage
      localStorage.setItem("token", res.data.token);

      // optional: user store
      if (res.data.user)
        localStorage.setItem("user", JSON.stringify(res.data.user));

      setMsg("Login success ✅");
      // navigate("/dashboard")  // if you are using react-router
    } catch (err) {
      setData(err.response?.data?.message || "Login failed");
    }finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
       <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Submit"}
        </button>
      </form>
    </>
  );
};
export default Login;
