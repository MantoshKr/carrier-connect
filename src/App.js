import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import EditProfile from "./pages/EditProfile/EditProfile";
import UsersPage from "./pages/UsersPage/UsersPage";


function App() {
  return (
    <>
   
   <BrowserRouter>
    
   <AuthContextProvider>
   <Navbar/>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/" element={<Login />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/editprofile" element={<EditProfile/>}/>
      <Route path="/userspage" element={<UsersPage />}/>
    </Routes>
    </AuthContextProvider>
  
    </BrowserRouter>
    
    </>
  );
}

export default App;
