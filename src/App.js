import { BrowserRouter, Routes,Route  } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login"
import { Dashbord } from "./Pages/Dashbord";
import Register from "./Pages/Register";
import ForgetPassword from "./Pages/ForgetPassword";

function App() {
  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="login" element={<Login/>} />
          <Route path="forgetpassword" element={<ForgetPassword/>} />
          <Route path="dashbord" element={<Dashbord/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
