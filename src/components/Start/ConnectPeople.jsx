import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import jobimgfreepic from "../../assets/images/jobimgfreepic.jpg";

const ConnectPeople = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full bg-gray-50 lg:max-w-screen md:px-24 lg:px-8 lg:py-20 xl:py-96 ">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10 items-center flex justify-between">
          <div className="2xl:ml-36">
            
            <h5 className="mb-4 md:text-5xl text-4xl text-red-900 leading-none">
              Let the right people know
              <br className="block" />
              you’re open to work{" "}
            </h5>
            <p className="mb-6 text-gray-600 md:text-3xl text-2xl leading-10">
              With the Open To Work feature, you can privately tell recruiters
              or publicly share with the Connect's community that you are looking
              for new job opportunities.
            </p>
          </div>
          </div>
          <div>
            <img
              className="object-cover w-full rounded-full shadow-lg "
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* 6th section  */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 bg-white lg:px-8 lg:py-20 2xl:py-52">
        <div className="grid max-w-screen-lg gap-36 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          <div className="transition duration-300 transform bg-white rounded  hover:-translate-y-1  md:text-center">
            <div className="relative">
              <img
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg?w=1380&t=st=1694750381~exp=1694750981~hmac=2fc83bce0cf491ca3851de219e3cbecc1ef16419b9da7c24143a386a56e9c036"
                alt=""
              />
              <div className="absolute " />
            </div>
            <div className="px-6 py-8 border-t-0 rounded-b sm:px-8">
              <h5 className="mb-2  text-gray-700 text-xl  leading-none sm:text-5xl">
                Connect with people who can help
              </h5>

              <p
                className="inline-block rounded-full p-[2px] bg-gray-800 mt-8  hover:text-white focus:outline-none focus:ring active:text-opacity-75 cursor-pointer m-2 "
                href="/download"
              >
                <span className="block rounded-full bg-white px-8 py-3 text-lg font-medium hover:bg-transparent">
                  Find people you know
                </span>
              </p>
            </div>
          </div>
          <div className="transition duration-300 transform bg-white rounded hover:-translate-y-1  md:text-center">
            <div className="relative">
              <img
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src={jobimgfreepic}
                alt=""
              />
              <div className="absolute" />
            </div>
            <div className="px-6 py-8  border-t-0 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl  text-gray-700 leading-none sm:text-5xl">
                Learn the skills you need to succeed
              </h5>

             

              <button
                className="group flex items-center justify-between gap-4 mt-8 rounded-lg border border-current px-16 py-4 text-green-600 transition-colors hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500 hover:text-white"
                href="/download"
              >
                <span className="font-medium transition-colors group-hover:text-white">
                  Find out more
                </span>

                <IoIosArrowDropdownCircle className="text-xl " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectPeople;
