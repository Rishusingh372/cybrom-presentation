import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Register />} />
        <Route path='login' element={<Login/>} />
        <Route path='dashboard' element={<Dashboard/>} />

      </Routes>
    </Router>
  );
}

export default App;