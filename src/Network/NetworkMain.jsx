import React, { useContext, useEffect, useState } from "react";

import { MdCancel } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const NetworkMain = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState(15); // Number of users to initially display
  const usersPerPage = 15; // Number of users to load on each "View More" click
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchUserData() {
      const usersCollection = collection(db, "users"); // Replace "users" with your Firestore collection name
      const querySnapshot = await getDocs(usersCollection);

      const usersArray = [];

      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        const user = {
          uid: doc.id,
          name: userData.displayName,
          photoURL: userData.photoURL,
          company: userData.company,
          about: userData.about,
          country: userData.country,
          email: userData.email,
          headline: userData.headline,
          phone: userData.phone,
          website: userData.website,
          skills: userData.skills,
          bgimg: userData.bgimg,
        };
        usersArray.push(user);
      });

      setUsers(usersArray);
    }

    fetchUserData();
  }, []);

  console.log("users", users);

  const handleViewMoreClick = () => {
    setVisibleUsers((prevVisibleUsers) => prevVisibleUsers + usersPerPage);
  };

  return (
    <section className="sm:py-10 rounded-xl  sm:px-6 px-2 max-w-fit max-h-fit ">
      {/* invitations */}
      <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-[white] rounded-lg shadow-lg text-slate-500 shadow-slate-200 sm:flex-row sm:mb-4 mb-2 ">
        <div className="flex-1 mx-2 sm:mx-6 sm:px-0">
          <header className="flex justify-between mb-2 mt-2 sm:mb-4 sm:mt-6">
            <div className="flex items-center ">
              <span className=" text-lg text-md sm:text-xl font-bold text-slate-700">
                No Pending Invitations
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-bold font-bold text-xs sm:text-xl hover:text-blue-400 text-gray-400 cursor-pointer md:flex hidden">
                Manage
              </span>
            </div>
          </header>
        </div>
      </div>

      {/* try premium  */}

      <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-white rounded-lg shadow-lg text-slate-500 shadow-slate-200 sm:flex-row md:mb-6 mb-2">
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex justify-between sm:mb-4 sm:mt-6">
            <div>
              <div className="flex gap-4 items-center justify-center">
                <p className="relative inline-flex items-center justify-center h-12 text-white ">
                  <img
                    src={currentUser.photoURL}
                    alt="user name"
                    title="user name"
                    className="max-w-full rounded-full w-20 h-20 object-cover sm:flex hidden "
                  />
                </p>
                <div>
                  <h3 className="text-xl  font-bold text-slate-700 sm:flex hidden">
                    See the full list of jobs where you'd be a top applicant
                  </h3>
                  <div>
                    <div className="sm:flex items-center gap-2 m-3">
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
            className="inline-block rounded-full bg-orange-300 px-2 sm:px-10 py-1.5 text-md sm:text-xl font-bold text-black transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-400  sm:ml-10"
            href="/trypremium"
          >
            Try Premium for free
          </a>
        </div>
      </div>

      {/* people */}
      <div className="max-w-screen-xl space-y-6 py-10 rounded-xl shadow-lg mx-auto px-4 md:px-8 bg-white">
        <div className="flex items-center justify-between ">
          <h1 className="text-gray-800 text-lg font-semibold sm:text-2xl">
            People who are in India also follow these people
          </h1>
          <p className=" text-md sm:text-2xl text-gray-400 font-bold">see all </p>
        </div>
        <ul className="grid gap-x-8 sm:gap-y-10 gap-y-4 mt-16 sm:grid-cols-2 lg:grid-cols-3 ">
          {users.slice(0, visibleUsers).map((user) => (
            <li
              className="w-full mx-auto group sm:max-w-sm border shadow-lg rounded-xl bg-white transition hover:scale-105 hover:shadow-2xl"
              key={user.uid}
            >
              <div key={user.uid}>
                <div className="relative">
                  <img
                    src={user.bgimg}
                    loading="lazy"
                    alt={user.name}
                    className="w-full h-20 object-cover rounded-lg "
                  />

                  <img
                    src={user.photoURL}
                    loading="lazy"
                    alt={user.about}
                    className="rounded-full w-20 h-20 object-cover absolute -bottom-7 left-4"
                  />
                  

                  <MdCancel className="text-4xl absolute top-2 right-2 opacity-60" />
                </div>
                <div className=" space-y-3 px-4">
                  <span className="block text-indigo-600 text-sm">{""}</span>
                  <h3 className="text-lg pt-4 text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {user.name}
                  </h3>
                  <p className="text-gray-600 text-lg duration-150 group-hover:text-gray-800">
                    {user.headline}
                  </p>
                  <p className="text-xs text-gray-400 pt-10">{user.skills}</p>
                  <div className="pb-3 flex justify-center">
                    <button
                      type="button"
                      className="w-full border  border-green-400 py-1 sm:px-8 sm:py-2 font-semibold rounded-full dark:bg-green-50 dark:text-green-800 hover:bg-green-100"
                    >
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {visibleUsers < users.length && (
          <div className="flex justify-center">
            <button
              onClick={handleViewMoreClick}
              className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 m-10"
            >
              view more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NetworkMain;
