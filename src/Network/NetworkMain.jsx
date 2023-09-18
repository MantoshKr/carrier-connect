import React from "react";

import { MdCancel } from "react-icons/md";

const posts = [
  {
    title: "Gaur Gopal Das",
    desc: "Member’s occupation Carrier Connect's Top Voice, International Life Coach, Wellness Advisor, Author & Motivational Strategist",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    href: "javascript:void(0)",
    img2: "https://source.unsplash.com/40x40/?portrait?1",
    followers: "549,948 followers",
  },
  {
    title: "Gaur Gopal Das",
    desc: "Member’s occupation Carrier Connect's Top Voice, International Life Coach, Wellness Advisor, Author & Motivational Strategist",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    href: "javascript:void(0)",
    img2: "https://source.unsplash.com/40x40/?portrait?1",
    followers: "549,948 followers",
  },
  {
    title: "Gaur Gopal Das",
    desc: "Member’s occupation Carrier Connect's Top Voice, International Life Coach, Wellness Advisor, Author & Motivational Strategist",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    href: "javascript:void(0)",
    img2: "https://source.unsplash.com/40x40/?portrait?1",
    followers: "549,948 followers",
  },
  {
    title: "Gaur Gopal Das",
    desc: "Member’s occupation Carrier Connect's Top Voice, International Life Coach, Wellness Advisor, Author & Motivational Strategist",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    href: "javascript:void(0)",
    img2: "https://source.unsplash.com/40x40/?portrait?1",
    followers: "549,948 followers",
  },
  {
    title: "Gaur Gopal Das",
    desc: "Member’s occupation Carrier Connect's Top Voice, International Life Coach, Wellness Advisor, Author & Motivational Strategist",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    href: "javascript:void(0)",
    img2: "https://source.unsplash.com/40x40/?portrait?1",
    followers: "549,948 followers",
  },
  {
    title: "Gaur Gopal Das",
    desc: "Member’s occupation Carrier Connect's Top Voice, International Life Coach, Wellness Advisor, Author & Motivational Strategist",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    href: "javascript:void(0)",
    img2: "https://source.unsplash.com/40x40/?portrait?1",
    followers: "549,948 followers",
  },
  {
    title: "Gaur Gopal Das",
    desc: "Member’s occupation Carrier Connect's Top Voice, International Life Coach, Wellness Advisor, Author & Motivational Strategist",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    href: "javascript:void(0)",
    img2: "https://source.unsplash.com/40x40/?portrait?1",
    followers: "549,948 followers",
  },
  {
    title: "Gaur Gopal Das",
    desc: "Member’s occupation Carrier Connect's Top Voice, International Life Coach, Wellness Advisor, Author & Motivational Strategist",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    href: "javascript:void(0)",
    img2: "https://source.unsplash.com/40x40/?portrait?1",
    followers: "549,948 followers",
  },
  {
    title: "Gaur Gopal Das",
    desc: "Member’s occupation Carrier Connect's Top Voice, International Life Coach, Wellness Advisor, Author & Motivational Strategist",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    href: "javascript:void(0)",
    img2: "https://source.unsplash.com/40x40/?portrait?1",
    followers: "549,948 followers",
  },
  {
    title: "Gaur Gopal Das",
    desc: "Member’s occupation Carrier Connect's Top Voice, International Life Coach, Wellness Advisor, Author & Motivational Strategist",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

    href: "javascript:void(0)",
    img2: "https://source.unsplash.com/40x40/?portrait?1",
    followers: "549,948 followers",
  },
];

const NetworkMain = () => {
  return (
    <section className="py-10 rounded-xl  px-6 max-w-fit max-h-fit">
      {/* invitations */}
      <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-white rounded-lg shadow-lg text-slate-500 shadow-slate-200 sm:flex-row mb-4 ">
        <div className="flex-1 sm:mx-6 sm:px-0">
          <header className="flex justify-between mb-4 mt-6">
            <div className="flex items-center">
              <span className="text-xl font-bold text-slate-700">
                No Pending Invitations
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-bold font-bold text-xl hover:text-blue-400 text-gray-400 cursor-pointer">
                Manage
              </span>
            </div>
          </header>
        </div>
      </div>

      {/* try premium  */}

      <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-white rounded-lg shadow-lg text-slate-500 shadow-slate-200 sm:flex-row mb-6">
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex justify-between mb-4 mt-6">
            <div>
              <div className="flex gap-4 items-center justify-center">
                <p className="relative inline-flex items-center justify-center h-12 text-white ">
                  <img
                    src="https://i.pravatar.cc/48?img=24"
                    alt="user name"
                    title="user name"
                    className="max-w-full rounded-full w-20 "
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
            class="inline-block rounded-full bg-orange-300 px-10 py-1.5 text-xl font-bold text-black transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-400  ml-10"
            href="/trypremium"
          >
            Try Premium for free
          </a>
        </div>
      </div>

      {/* people */}
      <div className="max-w-screen-xl space-y-6 py-10 rounded-xl shadow-lg mx-auto px-4 md:px-8 bg-white">
        <div className="flex items-center justify-between ">
          <h1 className="text-gray-800 text-2xl font-semibold sm:text-2xl">
            People who are in India also follow these people
          </h1>
          <p className=" text-2xl text-gray-400 font-bold">see all </p>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3 ">
          {posts.map((items, key) => (
            <li
              className="w-full mx-auto group sm:max-w-sm border shadow-lg rounded-xl bg-white transition hover:scale-105 hover:shadow-2xl"
              key={key}
            >
              <a href={items.href}>
                <div className="relative">
                  <img
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className="w-full h-20 object-cover rounded-lg "
                  />

                  <img
                    src={items.img2}
                    loading="lazy"
                    alt={items.title}
                    className="rounded-full w-20 h-20 absolute -bottom-7 left-4"
                  />

                  <MdCancel className="text-4xl absolute top-2 right-2 opacity-60" />
                </div>
                <div className=" space-y-3 px-4">
                  <span className="block text-indigo-600 text-sm">{""}</span>
                  <h3 className="text-lg pt-4 text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {items.title}
                  </h3>
                  <p className="text-gray-600 text-lg duration-150 group-hover:text-gray-800">
                    {items.desc}
                  </p>
                  <p className="text-xs text-gray-400 pt-10">
                    {items.followers}
                  </p>
                  <div className="pb-10 flex justify-center">
                    <button>
                      <a
                        className="group relative inline-flex items-center overflow-hidden rounded-full border border-current px-32 py-3 text-green-600 focus:outline-none focus:ring active:text-green-500 hover:bg-green-200  "
                        href="/home "
                      >
                        <span className="absolute -end-full transition-all group-hover:end-4">
                          <svg
                            className="h-5 w-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>

                        <span className="text-sm font-medium transition-all group-hover:me-4">
                          Follow
                        </span>
                      </a>
                    </button>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NetworkMain;
