import React, { useContext } from "react";
import "./DropDownMenu.css";

import { BsFillSquareFill } from "react-icons/bs";
import { AiFillSetting, AiOutlineLogout } from "react-icons/ai";
import { BiSolidBriefcase, BiSolidHelpCircle, BiSolidMessageAltDetail } from "react-icons/bi";
import { HiMiniLanguage } from "react-icons/hi2";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";



const DropDownMenu = ({isMenuOpen , handleCloseMenu}) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

 

  


    const profileMenuWrapStyle = {
        position: "absolute",
        top: "100%",
        right: "5%",
        width: "270px",
        maxHeight: "0",
        overflow: "hidden",
        transition: "max-height 0.5s",
      };
    
      const openMenuStyle = {
        maxHeight: "400px",
      };
    
     
      const combinedStyle = isMenuOpen
        ? { ...profileMenuWrapStyle, ...openMenuStyle }
        : profileMenuWrapStyle;


     
        const handleSignOut = async () => {
          try {
            // Sign out the user using Firebase Authentication
            await signOut(auth);
            handleCloseMenu();
            // After the sign-out process is complete, navigate to the Home page
            navigate('/Login');
          } catch (error) {
            // Handle sign-out error, if any
            console.error('Error signing out:', error.message);
          }
        };

     



  return (
    <>
      <div style={combinedStyle} >
        <div className="profile-menu">
          <div className="user-info" >
            <img src={currentUser?.photoURL} alt="" />
            <div>
              <h3>{currentUser?.displayName}</h3>
              <label>see your profile</label>
            </div>
          </div>
          <hr />
          <h3>Account</h3>
          <label className="profile-menu-link">
            <BsFillSquareFill style={{ color: "goldenrod", fontSize: "15px"  }} className="feedbackicon" />
            <p>Try Premium for free</p>
            <span>  </span>
          </label>
          <label className="profile-menu-link">
            <AiFillSetting style={{ color: "green", fontSize: "17px"  }} className="feedbackicon" />
            <p>Setting & Privacy</p>
            <span>  </span>
          </label>
          <label className="profile-menu-link">
            <BiSolidHelpCircle style={{ color: "green", fontSize: "17px"  }} className="feedbackicon" />
            <p>Help</p>
            <span>  </span>
          </label>
          <label className="profile-menu-link">
            <HiMiniLanguage style={{ color: "green", fontSize: "17px"  }} className="feedbackicon" />
            <p>Language</p>
            <span>  </span>
          </label>

          <hr />

          <h3>Manage</h3>

          <label className="profile-menu-link">
            <BiSolidMessageAltDetail style={{ color: "green", fontSize: "17px"  }} className="feedbackicon" />
            <p>Posts & Activity</p>
            <span>  </span>
          </label>

          <label className="profile-menu-link">
            <BiSolidBriefcase style={{ color: "green", fontSize: "17px"  }} className="feedbackicon" />
            <p>Job Posting Account</p>
            <span>  </span>
          </label>

          <hr />

          <label className="profile-menu-link">
            <AiOutlineLogout style={{ color: "red", fontSize: "17px"  }} className="feedbackicon" />
            <p onClick={handleSignOut}>Sign Out</p>
          </label>


        </div>
      </div>
    </>
  );
};

export default DropDownMenu;
