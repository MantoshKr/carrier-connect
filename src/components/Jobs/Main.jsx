import React, { useContext } from "react";
import cclogo from "../../assets/images/cclogo.png";
import { BiBookmark } from "react-icons/bi";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Main = () => {
  const { currentUser } = useContext(AuthContext);


  return (
    
    <div className="flex flex-col sm:gap-6 gap-2 w-full">
    {/* suggested job searches */}
      <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex justify-between md:mb-4 sm:mb-2 mb-0">
            <div>
              <div className="flex gap-4 items-center justify-center">
                <div>
                  <h3 className="sm:text-2xl font-bold text-slate-800">
                    Suggested job searches
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-xl"></p>
          </header>

          <div className="flex flex-wrap ">
            <button
              type="button"
              className="px-4 py-1 md:text-lg text-sm font-semibold rounded-full border mt-2 border-green-600 hover:bg-green-100 flex gap-2 ml-2"
            >
              <span className="md:text-2xl text-sm text-green-600 flex items-center justify-center font-bold">
                <HiSearch />
              </span>{" "}
              <span className="text-green-600">marketing manager</span>
            </button>
            <button
              type="button"
              className="px-4 py-1  md:text-lg text-sm font-semibold rounded-full border mt-2 border-green-600 hover:bg-green-100 flex gap-2 ml-2"
            >
              <span className="md:text-2xl text-sm text-green-600 flex items-center justify-center font-bold">
                <HiSearch />
              </span>{" "}
              <span className="text-green-600">hr</span>
            </button>
            <button
              type="button"
              className="px-4 py-1  md:text-lg text-sm font-semibold rounded-full border mt-2 border-green-600 hover:bg-green-100 flex gap-2 ml-2"
            >
              <span className="md:text-2xl text-sm text-green-600 flex items-center justify-center font-bold">
                <HiSearch />
              </span>{" "}
              <span className="text-green-600">legal</span>
            </button>
            <button
              type="button"
              className="px-4 py-1  md:text-lg text-sm font-semibold rounded-full border mt-2 border-green-600 hover:bg-green-100 flex gap-2 ml-2"
            >
              <span className="md:text-2xl text-sm text-green-600 flex items-center justify-center font-bold">
                <HiSearch />
              </span>{" "}
              <span className="text-green-600">sales</span>
            </button>
            <button
              type="button"
              className="px-4 py-1  md:text-lg text-sm font-semibold rounded-full border mt-2 border-green-600 hover:bg-green-100 flex gap-2 ml-2"
            >
              <span className="md:text-2xl text-sm text-green-600 flex items-center justify-center font-bold">
                <HiSearch />
              </span>{" "}
              <span className="text-green-600">amazon</span>
            </button>
            <button
              type="button"
              className="px-4 py-1  md:text-lg text-sm font-semibold rounded-full border mt-2 border-green-600 hover:bg-green-100 sm:flex hidden gap-2 ml-2"
            >
              <span className="md:text-2xl text-sm text-green-600 flex items-center justify-center font-bold">
                <HiSearch />
              </span>{" "}
              <span className="text-green-600">google</span>
            </button>
            <button
              type="button"
              className="px-4 py-1  md:text-lg text-sm font-semibold rounded-full border mt-2 border-green-600 hover:bg-green-100 sm:flex hidden gap-2 ml-2"
            >
              <span className="md:text-2xl text-sm text-green-600 flex items-center justify-center font-bold">
                <HiSearch />
              </span>{" "}
              <span className="text-green-600">analyst</span>
            </button>
          </div>
        </div>
      </div>
      {/* try premium for free */}
      <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-white rounded-lg shadow-lg text-slate-500 shadow-slate-200 sm:flex-row ">
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex justify-between mb-4 mt-6">
            <div>
              <div className="flex md:gap-4 gap-2 items-center justify-center">
                <p
                  
                  className="relative inline-flex items-center justify-center h-12 text-white "
                >
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
            <p className="text-xl"></p>
          </header>
          <a
            className="inline-block rounded-full bg-orange-300 md:px-10 px-3 py-1.5 md:text-xl text-sm font-bold text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-orange-400  sm:ml-10"
            href="/trypremium"
          >
            Try Premium for free
          </a>
        </div>
      </div>
      <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        {/* update profile */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex justify-between mb-4">
            <div>
              <div className="flex gap-4 items-center justify-center">
                <p
                  
                  className="relative inline-flex items-center justify-center h-12 text-white "
                >
                  <img
                    src={currentUser.photoURL}
                    alt="user"
                    title="user"
                    className="max-w-full rounded-full md:w-16 md:h-16 w-16 h-16 object-cover "
                  />
                </p>
                <div>
                  <h3 className="md:text-xl text-md font-medium text-slate-700">
                    Complete profiles receive 40x more opportunities
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-xl"></p>
          </header>
          <Link to="/editprofile">
          <button
            className="inline-block rounded-full bg-white border border-green-600 px-10 py-1.5 md:text-xl text-sm font-bold text-green-600 hover:bg-green-100  "
            
          >
            Update Profile
          </button>
          </Link>
        </div>
      </div>
      <div>
        {/* jobs */}
        <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
          <div className="flex-1 p-6 sm:mx-6 sm:px-0">
            <header className="flex justify-between mb-0">
              <div>
                <div className="flex gap-4 items-center justify-center">
                  <p
                    
                    className="relative inline-flex items-center justify-center h-12 text-white "
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20190612/ourmid/pngtree-hospitalbuildingclinicmedical--flat-color-icon--vector-ico-png-image_1339045.jpg"
                      alt="user name"
                      title="user name"
                      className="max-w-full w-16 "
                    />
                  </p>
                  <div>
                    <h3 className="text-xl font-bold text-sky-500 ">
                      Dermatologist
                    </h3>
                    <h3 className="text-lg font-medium text-slate-600">
                      Satya Skin & Hair care pvt ltd
                    </h3>
                    <p className="text-lg font-medium text-slate-400">
                      {" "}
                      Gurugram, Haryana, India (On-site)
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-3xl pt-5">
                <BiBookmark />
              </p>
            </header>
            <p className="text-md ml-20 flex items-center">
              <span>Promoted</span>
              <img src={cclogo} alt="logo" className="w-14" />
              <span>Easy Apply</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
          <div className="flex-1 p-6 sm:mx-6 sm:px-0">
            <header className="flex justify-between mb-0">
              <div>
                <div className="flex gap-4 items-center justify-center">
                  <p
                    href="#"
                    className="relative inline-flex items-center justify-center h-12 text-white "
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20190612/ourmid/pngtree-hospitalbuildingclinicmedical--flat-color-icon--vector-ico-png-image_1339045.jpg"
                      alt="job"
                      title="user "
                      className="max-w-full w-16 h-16 "
                    />
                  </p>
                  <div>
                    <h3 className="text-xl font-bold text-sky-500 ">
                      Dermatologist
                    </h3>
                    <h3 className="text-lg font-medium text-slate-600">
                      Satya Skin & Hair care pvt ltd
                    </h3>
                    <p className="text-lg font-medium text-slate-400">
                      {" "}
                      Gurugram, Haryana, India (On-site)
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-3xl pt-5">
                <BiBookmark />
              </p>
            </header>
            <p className="text-md ml-20 flex items-center">
              <span>Promoted</span>
              <img src={cclogo} alt="logo" className="w-14" />
              <span>Easy Apply</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
          <div className="flex-1 p-6 sm:mx-6 sm:px-0">
            <header className="flex justify-between mb-0">
              <div>
                <div className="flex gap-4 items-center justify-center">
                  <p
                    href="#"
                    className="relative inline-flex items-center justify-center h-12 text-white "
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
                      alt="user name"
                      title="user name"
                      className="max-w-full w-16 "
                    />
                  </p>
                  <div>
                    <h3 className="text-xl font-bold text-sky-500 ">
                      Dermatologist
                    </h3>
                    <h3 className="text-lg font-medium text-slate-600">
                      Satya Skin & Hair care pvt ltd
                    </h3>
                    <p className="text-lg font-medium text-slate-400">
                      {" "}
                      Gurugram, Haryana, India (On-site)
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-3xl pt-5">
                <BiBookmark />
              </p>
            </header>
            <p className="text-md ml-20 flex items-center">
              <span>Promoted</span>
              <img src={cclogo} alt="user" className="w-14" />
              <span>Easy Apply</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col max-h-fit w-full items-center justify-center overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
          <div className="flex-1 p-6 sm:mx-6 sm:px-0">
            <header className="flex justify-between mb-0">
              <div>
                <div className="flex gap-4 items-center justify-center">
                  <p
                    
                    className="relative inline-flex items-center justify-center h-12 text-white "
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
                      alt="user name"
                      title="user name"
                      className="max-w-full w-16 "
                    />
                  </p>
                  <div>
                    <h3 className="text-xl font-bold text-sky-500 ">
                      Dermatologist
                    </h3>
                    <h3 className="text-lg font-medium text-slate-600">
                      Satya Skin & Hair care pvt ltd
                    </h3>
                    <p className="text-lg font-medium text-slate-400">
                      {" "}
                      Gurugram, Haryana, India (On-site)
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-3xl pt-5">
                <BiBookmark />
              </p>
            </header>
            <p className="text-md ml-20 flex items-center">
              <span>Promoted</span>
              <img src={cclogo} alt="logo" className="w-14" />
              <span>Easy Apply</span>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Main;
