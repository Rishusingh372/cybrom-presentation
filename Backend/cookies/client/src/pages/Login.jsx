import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        setInput(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async () => {
        try {
            let api = "http://localhost:8000/employees/login";
            // ✅ IMPORTANT: must include withCredentials for cookies to work
            const response = await axios.post(api, input, { withCredentials: true });
            alert(response.data.msg);
            navigate("/home");
        } catch (error) {
            alert(error.response?.data?.msg || "Login Failed");
        }
    }

    return (
        <>
            <h1>Login Page</h1>
            Email: <input type="email" name="email" onChange={handleInput} /><br />
            Password: <input type="password" name="password" onChange={handleInput} /><br />
            <button onClick={handleSubmit}>Login</button>
        </>
    )
}

export default Login;