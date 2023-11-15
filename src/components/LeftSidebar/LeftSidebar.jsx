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

      window.scrollTo(0, 0);
    } else {
      // Clear user data when no user is clicked
      setUserData(null);
    }
  }, [clickedUserId]);

  return (
    <div className="left-sidebar">
      <div className="sidebar-profile-box">
        {clickedUserId ? (
          <img
            src={
              userData?.bgimg ||
              "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            }
            alt=""
            width="100%"
          />
        ) : (
          <img
            src={
              getUserInfo?.bgimg ||
              "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            }
            alt=""
            width="100%"
          />
        )}
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

          {clickedUserId ? (
            <p className="capitalize ">{userData?.headline}</p>
          ) : (
            <p className="capitalize font-medium">{getUserInfo?.headline}</p>
          )}
          <ul>
            {clickedUserId ? (
              <li>
                {userData?.followers ? (
                  <>
                    Followers <span>{userData.followers}</span>
                  </>
                ) : (
                  <>
                    Followers <span>2</span>
                  </>
                )}
              </li>
            ) : (
              <li>
                {getUserInfo?.followers ? (
                  <>
                    Followers <span>{getUserInfo.followers}</span>
                  </>
                ) : (
                  <>
                    Followers <span>2</span>
                  </>
                )}
              </li>
            )}

            {clickedUserId ? (
              <li>
                {userData?.connections ? (
                  <>
                    Connections <span>{userData.connections}</span>
                  </>
                ) : (
                  <>
                    Connections <span>2</span>
                  </>
                )}
              </li>
            ) : (
              <li>
                {getUserInfo?.connections ? (
                  <>
                    Connections <span>{getUserInfo.connections}</span>
                  </>
                ) : (
                  <>
                    Connections <span>1</span>
                  </>
                )}
              </li>
            )}
          </ul>

          {/* {getUserInfo.displayName} */}
          {/* <ul>
           
            <li>
              {userData?.followers && (
                <>
                  Followers <span>{userData.followers}</span>
                </>
              )}
            </li>
           
            <li>
              {userData?.connections && (
                <>
                  Connections <span>{userData.connections}</span>
                </>
              )}
            </li>
          </ul> */}
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
          {clickedUserId ? null : (
            <Link to="/myitems" className="hover:bg-[#f0f2f5] ">
              <label>
                <div className="p-2 flex items-center cursor-pointer">
                  <BsFillBookmarkFill className="BsFillBookmarkFill" />
                  My items
                </div>
              </label>
            </Link>
          )}
        </div>
      </div>

      {clickedUserId ? null : (
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
      )}
    </div>
  );
};

export default LeftSidebar;
