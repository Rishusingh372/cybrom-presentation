import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ check auth by calling backend (cookie-based)
    axios
      .post("http://localhost:8000/employees/userauth", {}, { withCredentials: true })
      .then((res) => {
        // optional: keep for UI
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("email", res.data.email);
      })
      .catch(() => {
        navigate("/home");
      });
  }, []);

  const logout = async (e) => {
    e.preventDefault();

    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;

    try {
      await axios.post(
        "http://localhost:8000/employees/logout",
        {},
        { withCredentials: true }
      );
      localStorage.clear();
      navigate("/home");
    } catch (error) {
      alert("Logout failed");
    }
  };
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome User</h1>
      <hr className="dashboard-divider" />

      <div className="dashboard-content">
        <div className="user-info">
          Welcome <strong>{localStorage.getItem("username")}</strong>
          <br />
          Email: <strong>{localStorage.getItem("email")}</strong>
        </div>

        <a href="#" onClick={logout} className="logout-link">
          Logout
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
