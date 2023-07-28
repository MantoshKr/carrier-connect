import React from "react";
import "./DropDownMenu.css";
import user from "../../assets/images/user.png";
import { MdFeedback } from "react-icons/md";
import { BsFillSquareFill } from "react-icons/bs";
import { AiFillSetting, AiOutlineLogout } from "react-icons/ai";
import { BiSolidBriefcase, BiSolidHelpCircle, BiSolidMessageAltDetail } from "react-icons/bi";
import { HiMiniLanguage } from "react-icons/hi2";

const DropDownProfile = ({isMenuOpen}) => {
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


  return (
    <>
      <div style={combinedStyle}>
        <div className="profile-menu">
          <div className="user-info">
            <img src={user} alt="" />
            <div>
              <h3>pankaj</h3>
              <label>see your profile</label>
            </div>
          </div>
          <hr />
          <h3>Account</h3>
          <label className="profile-menu-link">
            <BsFillSquareFill style={{ color: "goldenrod", fontSize: "15px"  }} className="feedbackicon" />
            <p>Try Premium for free</p>
            <span> > </span>
          </label>
          <label className="profile-menu-link">
            <AiFillSetting style={{ color: "green", fontSize: "17px"  }} className="feedbackicon" />
            <p>Setting & Privacy</p>
            <span> > </span>
          </label>
          <label className="profile-menu-link">
            <BiSolidHelpCircle style={{ color: "orange", fontSize: "17px"  }} className="feedbackicon" />
            <p>Help</p>
            <span> > </span>
          </label>
          <label className="profile-menu-link">
            <HiMiniLanguage style={{ color: "skyblue", fontSize: "17px"  }} className="feedbackicon" />
            <p>Language</p>
            <span> > </span>
          </label>

          <hr />

          <h3>Manage</h3>

          <label className="profile-menu-link">
            <BiSolidMessageAltDetail style={{ color: "skyblue", fontSize: "17px"  }} className="feedbackicon" />
            <p>Posts & Activity</p>
            <span> > </span>
          </label>

          <label className="profile-menu-link">
            <BiSolidBriefcase style={{ color: "green", fontSize: "17px"  }} className="feedbackicon" />
            <p>Job Posting Account</p>
            <span> > </span>
          </label>

          <hr />

          <label className="profile-menu-link">
            <AiOutlineLogout style={{ color: "red", fontSize: "17px"  }} className="feedbackicon" />
            <p>Sign Out</p>
            <span> > </span>
          </label>


        </div>
      </div>
    </>
  );
};

export default DropDownProfile;
