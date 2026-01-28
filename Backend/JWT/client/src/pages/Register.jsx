import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );
      setData(response.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <br />

        <input type="email" name="email" placeholder="Email" required />
        <br />

        <input type="password" name="password" placeholder="Password" required />
        <br />

        <button type="submit">Submit</button>
      </form>

      {data && <p style={{ color: "green" }}>{data.message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Register;
