import React from "react";
import Sidebar from "../components/Jobs/Sidebar";
import Main from "../components/Jobs/Main";
import RightSidebar from "../components/Jobs/RightSidebar";

const JobsPage = () => {
  return (
    <div className="md:gap-10 sm:gap-2 gap-1 xl:px-40 md:px-10 sm:px-5 px-2 bg-[#f0f2f5] flex flex-row sm:pt-5 pt-2">
      <div className="lg:w-1/4 ">
        <Sidebar />
      </div>
      <div className="lg:w-full">
        <Main />
      </div>
      <div className="lg:w-1/4 hidden lg:flex">
        <RightSidebar />
      </div>
    </div>
  );
};

export default JobsPage;

// className="lg:flex gap-10 2xl:px-60 lg:px-40 bg-[#f0f2f5] "
