import React, { useContext, useState } from "react";
import "./Navbar.css";
import CarrierConnect from "../../assets/images/cclogo1.png";
import { Link, useNavigate } from "react-router-dom";
import searchicon from "../../assets/images/searchicon.png";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BiSolidBriefcase } from "react-icons/bi";
import { IoMdChatboxes } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import DropDownProfile from "../DropDownMenu/DropDownMenu";
import user from "../../assets/images/user.png";
import { useUser } from "../../context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { setClickedUserId } = useUser();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setClickedUserId(null);
  };

  const handleSignOut = async () => {
    try {
      // Sign out the user using Firebase Authentication
      await signOut(auth);
      // handleCloseMenu();
      // After the sign-out process is complete, navigate to the Home page
      navigate("/");
    } catch (error) {
      // Handle sign-out error, if any
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="navcontainer">
      <div className="navbar">
        <div className="navbar-left">
          {currentUser ? (
            <Link to="/home" onClick={handleHomeClick} className="logo">
              <img src={CarrierConnect} alt="" />
            </Link>
          ) : (
            <Link to="/signup" className="logo">
              <img src={CarrierConnect} alt="" />
            </Link>
          )}

          <div className="search-box">
            <img src={searchicon} alt="" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="navbar-center">
          <ul>
            <li>
              <Link to="/home" onClick={handleHomeClick} className="icons">
                <AiFillHome style={{ color: "#5e5e5e", fontSize: "22px" }} />

                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/networkpage" className="icons">
                <FaUser style={{ color: "#5e5e5e", fontSize: "21px" }} />

                <span>My Network</span>
              </Link>
            </li>
            <li>
              <Link to="/jobspage" className="icons">
                <BiSolidBriefcase
                  style={{ color: "#5e5e5e", fontSize: "22px" }}
                />

                <span>Jobs</span>
              </Link>
            </li>
            <li>
              <Link to="/home" className="icons">
                <IoMdChatboxes style={{ color: "#5e5e5e", fontSize: "22px" }} />

                <span>Messaging</span>
              </Link>
            </li>
            <li>
              <Link to="/home" className="icons">
                <MdNotificationsActive
                  style={{ color: "#5e5e5e", fontSize: "22px" }}
                />

                <span>Notification</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="online">
            {currentUser.photoURL ? (
              <div className="dropdown-container">
                <img
                  src={currentUser.photoURL}
                  alt=""
                  className="nav-profile-img"
                />
                <DropDownProfile />
              </div>
            ) : (
              <div className="dropdown-container">
                <img src={user} alt="" className="nav-profile-img" />
                <DropDownProfile />
              </div>
            )}
           
          </div>
          <div className="profile-menu-link">
              
              <p onClick={handleSignOut} className="text-red-500 font-semibold">Sign Out</p>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
