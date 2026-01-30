import {BrowserRouter , Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Registration from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
const App=()=>{
  return(
    <>
    <BrowserRouter>
         <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} /> 
          <Route path="registration" element={<Registration/>}/>   
          <Route path="login" element={<Login/>}/>
          </Route>
         </Routes>

         <Routes>
          <Route path="dashboard" element={<Dashboard/>}>
          </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;