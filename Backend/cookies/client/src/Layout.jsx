import { Link, Outlet } from "react-router-dom";
// import "./css/layout.css"; // adjust path if needed

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="home">Home</Link>
        <Link to="registration">Registration</Link>
        <Link to="login">Login</Link>
      </nav>

      <div className="main-content">
        <Outlet />
      </div>

      <footer className="footer">
        © 2025 www.mycrud.com | All Rights Reserved
      </footer>
    </>
  );
};

export default Layout;