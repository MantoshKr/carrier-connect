import React from "react";
import { RxDotFilled } from "react-icons/rx";
import cclogo1 from "../assets/images/cclogo1.png";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Career",
    price: 1567,
    features: [
      " Stand out and get in touch with hiring managers",
      "See how you compare to other applicants",
      "Learn new skills to advance your career",
    ],
  },
  {
    name: "Business",
    price: 2754,
    features: [
      "All Career features, plus:",

      "Find and contact the right people",
      "Promote and grow your business",
      "Learn new skills to enhance your professional brand",
    ],
  },
  {
    name: "Sales Navigator Core",
    price: 4900,
    features: [
      "All Business features, plus:",

      "Find leads and accounts in your target market",
      "Get real-time insights for warm outreach",
      "Build trusted relationships with customers and prospects",
    ],
  },
  {
    name: "Recruiter Lite",
    price: 7200,
    features: [
      "All Business features, plus:",

      " Find great candidates, faster",
      " Contact top talent directly",
      " Build relationships with prospective hires",
    ],
  },
];

const TryPremium = () => {
  return (
    <section className="py-32 relative">
  <Link to="/home">
    <img src={cclogo1} alt="" className="absolute inset-0  w-20 top-5 left-20 cursor-pointer" />
    </Link>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative  mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl right-0 font-semibold sm:text-4xl">
            Join the millions of Connect's members using Premium to get ahead.
          </h3>
          <div>
            <div className="flex items-center justify-center gap-2 m-3">
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
              <span className="text-lg font-semibold">
                Millions of members use Premium
              </span>
            </div>
          </div>
          <div className="mt-3 text-lg">
            <p>
              Start your free 1-month trial today. Cancel anytime. We'll send
              you a reminder 7 days before your trial ends.
            </p>
          </div>
        </div>
        <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-4">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white shadow-md flex-1 flex items-stretch flex-col p-8 rounded-xl border-t-8 border-t-green-700 transition hover:scale-105 hover:shadow-2xl"
            >
              <div>
                <span className=" text-green-600 font-bold text-2xl">
                  {item.name}
                </span>
                <div className="mt-2 mb-2 text-gray-800 text-3xl font-semibold flex justify-center">
                  <span className="text-xl text-gray-600 font-medium">Rs {item.price}* / month</span>
                </div>
              </div>
              <hr />
              <ul className="py-8 space-y-3">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex gap-5">
                   <span> <RxDotFilled
                      className=" text-gray-800 text-xl"
                      
                    />
                     </span>
                    
                    {featureItem}
                  </li>
                ))}
              </ul>
              <div className="flex-1 flex items-end">
                <button className="px-3 py-2 w-full font-semibold rounded-full border border-green-500 text-sm duration-150 text-green-500  bg-white hover:bg-green-100  active:bg-green-200">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TryPremium;
