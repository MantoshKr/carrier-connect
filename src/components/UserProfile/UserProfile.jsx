import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

const UserProfile = () => {
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
  console.log("userData", userData);

  console.log("currentUseruuuuuiddddd", currentUser.uid);

  // const currentUseruid = currentUser.uid;
  return (
    <div className="mb-4">
      <div className="  border shadow-lg mb-4 rounded-xl bg-white ">
        <div className="relative">
          <img
            src={
              userData?.bgimg ||
              "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            }
            loading="lazy"
            alt=""
            className="w-full h-72 object-cover rounded-lg "
          />

          {clickedUserId ? (
            <img
              src={userData?.photoURL}
              loading="lazy"
              alt=""
              className="rounded-full object-cover w-20 h-20 absolute -bottom-7 left-4"
            />
          ) : (
            <img
              src={getUserInfo?.photoURL}
              loading="lazy"
              alt=""
              className="rounded-full object-cover w-20 h-20 absolute -bottom-7 left-4"
            />
          )}
        </div>
        <div className=" space-y-3 px-4">
          <span className="block text-indigo-600 text-sm">{""}</span>
          <h3 className="text-lg pt-4 text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
            {clickedUserId ? (
              <h1>{userData?.displayName?.toUpperCase()}</h1>
            ) : (
              <h1>{getUserInfo?.displayName?.toUpperCase()}</h1>
            )}
          </h3>
          <p>
            {clickedUserId ? (
              <h1>{userData?.headline}</h1>
            ) : (
              <h1>{getUserInfo?.headline}</h1>
            )}
          </p>
          <p>
            {clickedUserId ? (
              <h1>skills: {userData?.skills}</h1>
            ) : (
              <h1>skills:{getUserInfo?.skills}</h1>
            )}
          </p>
          <p className="text-gray-600 text-lg duration-150 group-hover:text-gray-800">
            Member’s occupation Carrier Connect's Top Voice, International Life
            Coach, Wellness Advisor, Author & Motivational Strategist
          </p>
          <p className="text-gray-600 text-lg duration-150 group-hover:text-gray-800">
            Visualizer & Lifestyle Stylist
          </p>

          <div className="pb-10">
            {clickedUserId === getUserInfo.uid ? (
              <button
                class="inline-block rounded-full border border-indigo-600 bg-indigo-600 md:px-12 md:py-3 sm:px-6 sm:py-2 px-4 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 mr-3 mb-1"
                href="/download"
              >
                Open to
              </button>
            ) : (
              <button
                class="inline-block rounded-full border border-indigo-600 bg-indigo-600 md:px-12 md:py-3 sm:px-6 sm:py-2 px-4 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 mr-3 mb-1"
                href="/download"
              >
                Connect
              </button>
            )}
            {clickedUserId === getUserInfo.uid ? (
              <Link to="/editprofile">
                <button class="inline-block rounded-full border border-bg-green border-green-600 md:px-12 md:py-3 sm:px-6 sm:py-2 px-4 py-1 text-sm font-medium text-green-600 hover:bg-green-100  focus:outline-none focus:ring active:bg-green-300 mr-2 mb-1">
                  Edit Profile
                </button>
              </Link>
            ) : (
              <button
                class="inline-block rounded-full border border-bg-green border-green-600 md:px-12 md:py-3 sm:px-6 sm:py-2 px-4 py-1 text-sm font-medium text-green-600 hover:bg-green-100  focus:outline-none focus:ring active:bg-green-300 mr-2 mb-1"
                href="/download"
              >
                Message
              </button>
            )}

            <button
              class="inline-block rounded-full border border-gray-600 md:px-12 md:py-3 sm:px-6 sm:py-2 px-4 py-1 text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring active:bg-indigo-500 mb-1"
              href="/download"
            >
              More
            </button>
          </div>
        </div>
      </div>

      {clickedUserId === getUserInfo.uid && (
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex md:gap-4 gap-2  p-2 shadow-lg items-center justify-center">
            <p className="relative inline-flex items-center justify-center h-12 text-white ">
              <img
                src={currentUser.photoURL}
                alt="user name"
                title="user name"
                className="max-w-full object-cover rounded-full w-20 h-20  "
              />
            </p>
            <div>
              <h3 className="sm:text-xl text-sm flex font-bold text-slate-700">
                See the full list of jobs where you'd be a top applicant
              </h3>
              <div>
                <div className="md:flex items-center gap-2 m-3">
                  <div className="flex md:-space-x-3 -space-x-2">
                    <img
                      alt=""
                      className="md:w-8 md:h-8 w-7 h-7 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                      src="https://source.unsplash.com/40x40/?portrait?1"
                    />
                    <img
                      alt=""
                      className="md:w-8 md:h-8 w-7 h-7 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                      src="https://source.unsplash.com/40x40/?portrait?2"
                    />
                    <img
                      alt=""
                      className="md:w-8 md:h-8 w-7 h-7 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                      src="https://source.unsplash.com/40x40/?portrait?3"
                    />
                    <img
                      alt=""
                      className="md:w-8 md:h-8 w-7 h-7 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                      src="https://source.unsplash.com/40x40/?portrait?4"
                    />
                  </div>
                  <span className="text-sm ">
                    Millions of members use Premium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
