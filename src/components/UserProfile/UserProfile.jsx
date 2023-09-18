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
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
              src={currentUser?.photoURL}
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
              <h1>{currentUser?.displayName?.toUpperCase()}</h1>
            )}
          </h3>
          <p className="text-gray-600 text-lg duration-150 group-hover:text-gray-800">
            Member’s occupation Carrier Connect's Top Voice, International Life
            Coach, Wellness Advisor, Author & Motivational Strategist
          </p>
          <p className="text-gray-600 text-lg duration-150 group-hover:text-gray-800">
            Visualizer & Lifestyle Stylist
          </p>

          <div className="pb-10">
            {clickedUserId === currentUser.uid ? (
              <button
                class="inline-block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 mr-3"
                href="/download"
              >
                Open to
              </button>
            ) : (
              <button
                class="inline-block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 mr-3"
                href="/download"
              >
                Connect
              </button>
            )}
            {clickedUserId === currentUser.uid ? (
              <Link to="/editprofile">
                <button class="inline-block rounded-full border border-bg-green border-green-600 px-12 py-3 text-sm font-medium text-green-600 hover:bg-green-100  focus:outline-none focus:ring active:bg-green-300 mr-2">
                  Edit Profile
                </button>
              </Link>
            ) : (
              <button
                class="inline-block rounded-full border border-bg-green border-green-600 px-12 py-3 text-sm font-medium text-green-600 hover:bg-green-100  focus:outline-none focus:ring active:bg-green-300 mr-2"
                href="/download"
              >
                Message
              </button>
            )}

            <button
              class="inline-block rounded-full border border-gray-600 px-12 py-3 text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring active:bg-indigo-500"
              href="/download"
            >
              More
            </button>
          </div>
        </div>
      </div>

      {clickedUserId === currentUser.uid &&
        <div>
        <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-white rounded-lg shadow-lg text-slate-500 shadow-slate-200 sm:flex-row ">
          <div className="flex-1 p-6 sm:mx-6 sm:px-0">
            <header className="flex justify-between mb-4 mt-6">
              <div>
                <div className="flex gap-4 items-center justify-center">
                  <p className="relative inline-flex items-center justify-center h-12 text-white ">
                    <img
                      src={currentUser?.photoURL}
                      loading="lazy"
                      alt=""
                      className="rounded-full object-cover w-20 h-20 -bottom-7 left-4"
                    />
                  </p>
                  <div>
                    <h3 className="text-xl  font-bold text-slate-700">
                      See the full list of jobs where you'd be a top applicant
                    </h3>
                    <div>
                      <div className="flex items-center gap-2 m-3">
                        <div className="flex -space-x-3">
                          <img
                            alt=""
                            className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                            src="https://source.unsplash.com/40x40/?portrait?1"
                          />
                          <img
                            alt=""
                            className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                            src="https://source.unsplash.com/40x40/?portrait?2"
                          />
                          <img
                            alt=""
                            className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                            src="https://source.unsplash.com/40x40/?portrait?3"
                          />
                          <img
                            alt=""
                            className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700"
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
              <p className="text-xl"></p>
            </header>
            <a
              class="inline-block rounded-full bg-orange-300 px-10 py-1.5 text-xl font-bold text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-400  ml-10"
              href="/trypremium"
            >
              Try Premium for free
            </a>
          </div>
        </div>
        <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row"></div>
      </div>
      }
      
    </div>
  );
};

export default UserProfile;
