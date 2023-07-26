import React from "react";
import "./LeftSidebar.css";
import sidebarprofile from "../../assets/images/sidebarprofile.jpg";
import sidebarprofileback from "../../assets/images/sidebarprofileback.jpg";
import { BsFillBookmarkFill, BsTicketFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="sidebar-profile-box">
        <img src={sidebarprofileback} alt="" width="100%" />
        <div className="sidebar-profile-info">
          <img src={sidebarprofile} alt="" />
          <h1>John Doe</h1>
          <h3>Software engineer</h3>
          <ul>
            <li>
              Your profile views <span>234</span>
            </li>
            <li>
              Your Post views<span>567</span>
            </li>
            <li>
              Your connections<span>456</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-profile-link">
          <label>
            <BsFillBookmarkFill className="BsFillBookmarkFill" />
            My items
          </label>
          <label>
            <BsTicketFill className="BsTicketFill" />
            Try Premium
          </label>
        </div>
      </div>
      <div className="sidebar-activity">
        <h3>RECENT</h3>
        <label>
          <AiOutlineFieldTime className="icons2" />
          Front End Development
        </label>
        <label>
          <AiOutlineFieldTime className="icons2" />
          React
        </label>
        <label>
          <AiOutlineFieldTime className="icons2" />
          Bootstrap
        </label>
        <label>
          <AiOutlineFieldTime className="icons2" />
          Learn Online
        </label>
        <label>
          <AiOutlineFieldTime className="icons2" />
          SAAS
        </label>
        <label>
          <AiOutlineFieldTime className="icons2" />
          Python
        </label>
    
      <h3>GROUPS</h3>
      <label>
        <MdGroups className="icons4" />
        Web Development Group
      </label>
      <label>
        <MdGroups className="icons4" />
        React and Angular Group
      </label>
      <label>
        <MdGroups className="icons4" />
        Python and game Development
      </label>
      <label>
        <MdGroups className="icons4" />
        Robotics
      </label>
      <h3>HASHTAG</h3>
      <label>
        <FaHashtag className="icons3" />
        fontenddev
      </label>
      <label>
        <FaHashtag className="icons3" />
        ui/ux
      </label>
      <label>
        <FaHashtag className="icons3" />
        react
      </label>
      <div className="discover-more-link">
        <label>Discover more</label>
      </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
