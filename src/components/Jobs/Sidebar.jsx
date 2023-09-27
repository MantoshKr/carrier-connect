import React, { useContext } from "react";
import { AiFillSetting } from "react-icons/ai";
import {
  BsFillBookmarkFill,
  BsFillClipboard2CheckFill,
  BsYoutube,
} from "react-icons/bs";
import { FaBell, FaRegFile } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { PiNotePencilBold } from "react-icons/pi";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex">
      <div className="max-h-fit lg:p-3 p-1  space-y-2  bg-white text-gray-900 font-bold shadow-md rounded-lg">
        <div className="flex items-center p-2 space-x-4">
          <img
            src={currentUser.photoURL}
            alt=""
            className="lg:w-12 lg:h-12 w-16 h-16 object-cover rounded-full dark:bg-gray-500"
          />
          <div>
            <h2 className="text-lg font-semibold lg:flex hidden">
              {currentUser.displayName}
            </h2>
            <span className="flex items-center space-x-1"></span>
          </div>
        </div>
        <div className="divide-y divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-lg">
            <li className=" text-gray-900 cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md ">
                <BsFillBookmarkFill className="w-5 h-5 fill-current dark:text-gray-700 " />

                <span className="lg:flex hidden">My Jobs</span>
              </p>
            </li>
            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <FaBell className="w-5 h-5 fill-current dark:text-gray-700" />

                <span className="lg:flex hidden">My alerts</span>
              </p>
            </li>
            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <BsFillClipboard2CheckFill className="w-5 h-5 fill-current dark:text-gray-700" />

                <span className="lg:flex hidden">Skill Assessments</span>
              </p>
            </li>
            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <IoDocumentText className="w-5 h-5 fill-current dark:text-gray-700" />

                <span className="lg:flex hidden">Interview prep</span>
              </p>
            </li>
            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <FaRegFile className="w-5 h-5 fill-current dark:text-gray-700" />

                <span className="lg:flex hidden">Resume Builder</span>
              </p>
            </li>
            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <BsYoutube className="w-5 h-5 fill-current dark:text-gray-700" />

                <span className="lg:flex hidden">Job seeker guidance</span>
              </p>
            </li>
            <li className=" text-gray-900  cursor-pointer">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <AiFillSetting className="w-5 h-5 fill-current dark:text-gray-700" />

                <span className="lg:flex hidden"> Application settings</span>
              </p>
            </li>
          </ul>
        </div>
        <button
        type="button"
        className="lg:px-8 lg:py-2 px-2 py-2 text-md font-semibold rounded-full lg:border mt-4 border-green-600  hover:bg-green-100 flex  gap-2  "
      >
        <span className="text-2xl text-green-600">
          <PiNotePencilBold />
        </span>{" "}
        <span className="text-green-600 hidden lg:flex">post a free job</span>
      </button>
      </div>

      
    </div>
  );
};

export default Sidebar;
