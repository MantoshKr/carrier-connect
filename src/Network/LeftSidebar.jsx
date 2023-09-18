import React from "react";

import { BsFillPeopleFill } from "react-icons/bs";
import {
  FaAngleUp,
  FaBell,
  FaRegCalendarAlt,
  FaRegFile,
  FaRegNewspaper,
  FaUserAlt,
} from "react-icons/fa";
import { FiHash } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi2";

import { PiNotePencilBold } from "react-icons/pi";
import RightSidebar from "../components/RightSidebar/RightSidebar";

const LeftSidebar = () => {
  return (
    <div className="  mb-10 mt-10">
      <div className="max-h-fit p-3  space-y-2  bg-white text-gray-900 font-bold shadow-md rounded-lg">
        <div className="flex items-center p-2 space-x-4">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-12 h-12 rounded-full dark:bg-gray-500"
          />
          <div>
            <h2 className="text-lg font-semibold">Rahul</h2>
            <span className="flex items-center space-x-1"></span>
          </div>
        </div>
        <div className="divide-y divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-lg">
            <li className=" text-gray-900 cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md ">
                <BsFillPeopleFill className="w-5 h-5 fill-current dark:text-gray-700 " />

                <span>Connections</span>
              </p>
            </li>
            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <FaUserAlt className="w-5 h-5 fill-current dark:text-gray-700" />

                <span>Following & followers</span>
              </p>
            </li>

            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <HiUserGroup className="w-5 h-5 fill-current dark:text-gray-700" />

                <span>Groups</span>
              </p>
            </li>
            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <FaRegCalendarAlt className="w-5 h-5 fill-current dark:text-gray-700" />

                <span>Events</span>
              </p>
            </li>
            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <FaRegFile className="w-5 h-5 fill-current dark:text-gray-700" />

                <span>Page</span>
              </p>
            </li>
            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <FaRegNewspaper className="w-5 h-5 fill-current dark:text-gray-700" />

                <span>Newsletters</span>
              </p>
            </li>
            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <FiHash className="w-5 h-5 fill-current dark:text-gray-700" />

                <span>Hashtags</span>
              </p>
            </li>
            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <span>Showless</span>
                <FaAngleUp className="w-5 h-5 fill-current dark:text-gray-700" />
              </p>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="max-w-container mt-4">
      <RightSidebar />
      </div>
    </div>
  );
};

export default LeftSidebar;
