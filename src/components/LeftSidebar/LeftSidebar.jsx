import React, { useContext, useEffect, useState } from "react";
import "./LeftSidebar.css";
import { BsFillBookmarkFill, BsTicketFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const [getUserInfo, setGetUserInfo] = useState({});
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const { clickedUserId } = useUser();
  const { setClickedUserId } = useUser();

  const handleUserClick = (userId) => {
    setClickedUserId(userId);
    console.log(`User with ID ${userId} clicked.`);
  };

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
      const userDocRef = doc(db, "users", clickedUserId);

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
  console.log("userData666666666666666", userData);

  return (
    <div className="left-sidebar">
      <div className="sidebar-profile-box">
        <img src={userData?.bgimg} alt="" width="100%" />
        <div className="sidebar-profile-info">
          {clickedUserId ? (
            <img src={userData?.photoURL} alt="" />
          ) : (
            <img
              src={currentUser?.photoURL}
              alt=""
              onClick={() => {
                if (handleUserClick) handleUserClick(currentUser.uid);
                console.log("inside the imag", currentUser.uid);
              }}
              className="cursor-pointer"
            />
          )}

          {clickedUserId ? (
            <h1 className="capitalize ">{userData?.displayName}</h1>
          ) : (
            <h1 className="capitalize ">{getUserInfo?.displayName}</h1>
          )}
          <h3>{getUserInfo?.headline}</h3>
          {/* {getUserInfo.displayName} */}
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
            <li>{getUserInfo?.skills}</li>
          </ul>
        </div>
        <div className="sidebar-profile-link">
          <Link to="/trypremium" className="hover:bg-[#f0f2f5] ">
            <label className=" flex items-center cursor-pointer">
              <BsTicketFill className="text-orange-400 text-xl" />
              <div className="flex flex-col flex-start ml-2 p-2">
                Access exclusive tools & insights{" "}
                <span className="text-md font-bold underline hover:text-sky-600">
                  Try Premium for free
                </span>
              </div>
            </label>
          </Link>
          <hr />
          <Link to="/myitems" className="hover:bg-[#f0f2f5] ">
            <label>
              <div className="p-2 flex items-center cursor-pointer">
                <BsFillBookmarkFill className="BsFillBookmarkFill" />
                My items
              </div>
            </label>
          </Link>
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
