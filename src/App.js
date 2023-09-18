import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import EditProfile from "./pages/EditProfile/EditProfile";
import UsersPage from "./pages/UsersPage/UsersPage";
import StartPage from "./pages/StartPage/StartPage";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
        <UserProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route
              path="/editprofile"
              element={
                <>
                  <Navbar />
                  <EditProfile />
                </>
              }
            />
            <Route
              path="/userspage"
              element={
                <>
                  <Navbar />
                  <UsersPage />
                </>
              }
            />
            <Route path="/" element={<StartPage />} />
          </Routes>
          </UserProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
