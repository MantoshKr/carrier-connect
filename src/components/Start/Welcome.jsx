import React from "react";
import cclogo from "../../assets/images/cclogo1.png";
import transparentimg1 from "../../assets/images/transparentimg1.png";
import { BsBriefcaseFill, BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { GoVideo } from "react-icons/go";

const Welcome = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#f0f2f5] text-black">
        <div className="p-6  space-y-8">
          <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded bg-[#f0f2f5]">
            <div className="cursor-pointer">
              <img src={cclogo} alt="" className="h-16" />
            </div>
            <div className="items-center hidden space-x-8 lg:flex">
              <div className="space-x-4 flex items-center ">
                <div className="text-3xl px-3 hover:text-green-700 cursor-pointer flex flex-col items-center">
                  <FaRegNewspaper />
                  <p className="text-sm">Articles</p>
                </div>
                <div className="text-3xl px-3 hover:text-green-700 cursor-pointer flex flex-col items-center">
                  <BsFillPeopleFill />
                  <p className="text-sm">People</p>
                </div>
                <div className="text-3xl px-3 hover:text-green-700 cursor-pointer flex flex-col items-center">
                  <GoVideo />
                  <p className="text-sm">Learning</p>
                </div>
                <div className="text-3xl px-3 hover:text-green-700 cursor-pointer flex flex-col items-center">
                  <BsBriefcaseFill />
                  <p className="text-sm">Jobs</p>
                </div>
              </div>
              <button
                type="button"
                className="px-8 py-3 text-xl font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800 hover:bg-gray-200"
              >
                Join Now
              </button>
              <button
                type="button"
                className="px-8 py-3 text-xl font-semibold border border-green-600 rounded-full dark:bg-gray-100 dark:text-gray-800 hover:bg-green-50"
              >
                Sign in
              </button>
            </div>
            <button className="flex items-center justify-center p-2 lg:hidden">
              <AiOutlineMenu className="w-6 h-6 dark:text-gray-800" />
            </button>
          </header>
          <main>
            <div className="container min-w-full mx-auto space-y-16">
              <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 bg-[#f0f2f5] text-black">
                  <h1 className=" text-5xl text-green-700 mb-7  dark:text-red uppercase text-left">
                    Welcome to your
                  </h1>
                  <h1 className=" text-5xl text-green-700 mb-7  dark:text-red uppercase text-left">
                    professional
                  </h1>
                  <h1 className=" text-5xl text-green-700 mb-14  dark:text-red uppercase text-left">
                    community
                  </h1>

                  <form
                    novalidate=""
                    action=""
                    className="self-stretch space-y-6 mt-6 2xl:mr-14 "
                  >
                    <div>
                      <label
                        for="name"
                        className="text-lg font-bold text-gray-700 flex flex-start mb-1"
                      >
                        Email
                      </label>
                      <input
                        id="name"
                        type="email"
                        placeholder="Please enter your email address"
                        className="w-full rounded-md py-4 focus:ring focus:ri dark:border-gray-700"
                      />
                    </div>
                    <div>
                      <label
                        for="lastname"
                        className="text-lg font-bold text-gray-700 flex flex-start mb-1"
                      >
                        Password
                      </label>
                      <input
                        id="lastname"
                        type="password"
                        placeholder="Please enter your password"
                        className="w-full rounded-md py-4 focus:ring focus:ri dark:border-gray-700"
                      />
                    </div>
                    <div className="flex flex-start text-green-600 font-bold text-lg">
                      Forgot password?
                    </div>
                    <button className="w-full py-4 rounded-full font-semibold  dark:bg-green-600 dark:text-white hover:bg-green-700">
                      Sign in
                    </button>
                  </form>
                  {/* sign up option */}

                  <div className="relative flex items-center justify-center m-16 ">
                    <span className="block w-full h-px bg-gray-500"></span>
                    <p className="inline-block w-fit text-lg bg-[#f0f2f5] px-2 absolute -top-[14px] inset-x-0 mx-auto ">
                      Or continue with
                    </p>
                  </div>
                  <div className="text-left mb-2">
                    By clicking Continue, you agree to CarrrierConnect’s{" "}
                    <span className="font-bold text-green-600 cursor-pointer">
                      User Agreement, Privacy Policy, and Cookie Policy.
                    </span>
                  </div>
                  <div className="space-y-5 text-md font-bold text-gray-600 mr-10">
                    <button className="w-full flex items-center justify-center gap-x-3 py-3 border  hover:bg-gray-200 duration-150 active:bg-gray-100 border-gray-800 rounded-full text-lg mr-10">
                      New to Carrier Connect? Join Now
                    </button>
                  </div>
                </div>
                <img
                  src={transparentimg1}
                  alt=""
                  className="object-cover w-full h-full rounded-md xl:col-span-3  bg-transparent"
                />
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
