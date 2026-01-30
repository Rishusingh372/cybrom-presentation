import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import '../css/dashboard.css'

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("username")) {
            navigate("/home");
        }
    }, [])

    const logout = (e) => {
        e.preventDefault();
        
      
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        
        if (confirmLogout) {
            localStorage.clear();
            navigate("/home");
        }
    }

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
    )
}

export default Dashboard