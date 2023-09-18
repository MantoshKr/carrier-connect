import React, { useContext, useEffect, useState } from "react";
import "./LeftSidebar.css";
import sidebarprofile from "../../assets/images/sidebarprofile.jpg";
import sidebarprofileback from "../../assets/images/sidebarprofileback.jpg";
import { BsFillBookmarkFill, BsTicketFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useUser } from "../../context/UserContext";

const LeftSidebar = () => {
  const [getUserInfo, setGetUserInfo] = useState({});
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const { clickedUserId } = useUser();

  console.log("clickedUserIdddd", clickedUserId);

  useEffect(() => {
    const getInfo = () => {
      const unSub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
        setGetUserInfo(doc.data());
      });
      return () => {
        unSub();
      };
    };
    currentUser.uid && getInfo();
  }, [currentUser.uid]);

  console.log(getUserInfo);

  useEffect(() => {
    if (clickedUserId) {
      const userDocRef = doc(db, "users", clickedUserId); // Assuming your users are stored in a "users" collection

      // Fetch user data from Firebase
      getDoc(userDocRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            // Set the user data in state
            setUserData(docSnapshot.data());
          } else {
            console.log("User not found");
            setUserData(null); // Handle the case when the user is not found
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      // Clear user data when no user is clicked
      setUserData(null);
    }
  }, [clickedUserId]);
  console.log("userData", userData);

  return (
    <div className="left-sidebar">
      <div className="sidebar-profile-box">
        <img src={sidebarprofileback} alt="" width="100%" />
        <div className="sidebar-profile-info">
        {clickedUserId ? (
            <img src={userData?.photoURL} alt="" />
          ) : (
            <img src={currentUser?.photoURL} alt="" />
          )}
           
          {clickedUserId ? (
            <h1>{userData?.displayName?.toUpperCase()}</h1>
          ) : (
            <h1>{currentUser?.displayName?.toUpperCase()}</h1>
          )}
          <h3>{getUserInfo?.headline}</h3>
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
            <li>
              {getUserInfo?.skills}
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
