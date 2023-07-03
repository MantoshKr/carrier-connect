import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";


function App() {
  return (
    <>
   
   <BrowserRouter>
    
   <AuthContextProvider>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Signup" element={<Signup />}/>
    </Routes>
    </AuthContextProvider>
  
    </BrowserRouter>
    
    </>
  );
}

export default App;
