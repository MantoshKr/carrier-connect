import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { MdCancel } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { useUser } from "../context/UserContext";

const ConnectToUser = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState(5); // Number of users to initially display
  const usersPerPage = 5; // Number of users to load on each "View More" click
  const { setClickedUserId } = useUser();

  const handleUserClick = (userId) => {
    setClickedUserId(userId);
    console.log(`User with ID ${userId} clicked.`);
  };

  useEffect(() => {
    async function fetchUserData() {
      const usersCollection = collection(db, "users");
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
    <div>
      <ul>
        {users.slice(0, visibleUsers).map((user) => (
          <li
            key={user.uid}
            className="rounded-xl border border-gray-200 shadow-md bg-white mb-2 mt-2 p-4"
          >
            <div className="flex items-center gap-4 mb-2 cursor-pointer">
              <img
                alt="Developer"
                src={user.photoURL}
                className="h-16 w-16 rounded-full object-cover"
                // onClick={handleUserClick(user.uid)}
                onClick={() => {
                  if (handleUserClick) handleUserClick(user.uid);
                  console.log("inside the imag", user.uid);
                }}
              />

              <div>
                <h3 className="text-lg font-medium ">{user.name}</h3>

                <div className="text-gray-500 font-medium">{user.skills}</div>
              </div>
            </div>

            <button className="flex items-center justify-between gap-4 rounded-full  border border-current px-5 py-2 text-gray-500 transition-colors hover:bg-gray-100 focus:outline-none focus:ring active:bg-gray-500">
              <span className=" bg-white  ">
                <IoPersonAddSharp className=" text-gray-500 text-lg " />
              </span>
              <span className="font-bold text-gray-400 transition-colors ">
                Connect
              </span>
            </button>
          </li>
        ))}
      </ul>

      {visibleUsers < users.length && (
        <div className="flex justify-center">
          <button
            onClick={handleViewMoreClick}
            class="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 m-10"
          >
            view more
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectToUser;
