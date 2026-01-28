import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      // ✅ Save JWT token in localStorage
      localStorage.setItem("token", response.data.token);

      // ✅ Save user (optional)
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      setMsg("Login success ✅");
      // navigate("/dashboard")
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <br />

        <input type="password" name="password" placeholder="Password" required />
        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Submit"}
        </button>
      </form>

      {msg && <p>{msg}</p>}
    </>
  );
};

export default Login;
