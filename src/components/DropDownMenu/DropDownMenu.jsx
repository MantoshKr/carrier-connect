import React, { useContext } from "react";

import "../Navbar/Navbar.css";

import { BsFillSquareFill } from "react-icons/bs";
import { AiFillSetting, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import {
  BiSolidBriefcase,
  BiSolidHelpCircle,
  BiSolidMessageAltDetail,
} from "react-icons/bi";
import { HiMiniLanguage } from "react-icons/hi2";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import user from "../../assets/images/user.png";

const DropDownMenu = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

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
    <>
      {currentUser ? (
        <div className="profile-menu-wrap">
          <div className="profile-menu">
            <div className="user-info">
              <img src={currentUser?.photoURL} alt="" />
              <div className="user-info1">
                <h3>{currentUser?.displayName}</h3>
                <Link to="/editprofile">
                  <label className="edit-profile-btn">Edit Profile</label>
                </Link>
              </div>
            </div>
            <hr />
            <h3>Account</h3>
            <Link to="/trypremium">
              <label className="profile-menu-link">
                <BsFillSquareFill
                  style={{ color: "goldenrod", fontSize: "15px" }}
                  className="feedbackicon"
                />

                <p>Try Premium for free</p>

                <span> </span>
              </label>
            </Link>
            <label className="profile-menu-link">
              <AiFillSetting
                style={{ color: "green", fontSize: "17px" }}
                className="feedbackicon"
              />
              <p>Setting & Privacy</p>
              <span> </span>
            </label>
            <label className="profile-menu-link">
              <BiSolidHelpCircle
                style={{ color: "green", fontSize: "17px" }}
                className="feedbackicon"
              />
              <p>Help</p>
              <span> </span>
            </label>
            <label className="profile-menu-link">
              <HiMiniLanguage
                style={{ color: "green", fontSize: "17px" }}
                className="feedbackicon"
              />
              <p>Language</p>
              <span> </span>
            </label>

            <hr />

            <h3>Manage</h3>

            <label className="profile-menu-link">
              <BiSolidMessageAltDetail
                style={{ color: "green", fontSize: "17px" }}
                className="feedbackicon"
              />
              <p>Posts & Activity</p>
              <span> </span>
            </label>

            <label className="profile-menu-link">
              <BiSolidBriefcase
                style={{ color: "green", fontSize: "17px" }}
                className="feedbackicon"
              />
              <p>Job Posting Account</p>
              <span> </span>
            </label>

            <hr />

            <label className="profile-menu-link">
              <AiOutlineLogout
                style={{ color: "red", fontSize: "17px" }}
                className="feedbackicon"
              />
              <p onClick={handleSignOut}>Sign Out</p>
            </label>
          </div>
        </div>
      ) : (
        <div className="profile-menu-wrap">
          <div className="profile-menu">
            <div className="user-info">
              <img src={user} alt="" />
            </div>
            <hr />

            <Link to="/">
              <label className="profile-menu-link">
                <AiOutlineLogin
                  style={{ color: "green", fontSize: "17px" }}
                  className="feedbackicon"
                />
                <p>Login</p>
              </label>
            </Link>

            <Link to="/signup">
              <label className="profile-menu-link">
                <FaUserTie
                  style={{ color: "green", fontSize: "17px" }}
                  className="feedbackicon"
                />
                <p>Signup</p>
              </label>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default DropDownMenu;
