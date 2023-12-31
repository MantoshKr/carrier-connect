import React, { useContext } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import carrierconnectlogo from "../../assets/images/carrier-connect-logo.png";
import trading from "../../assets/images/trading.webp";
import { AuthContext } from "../../context/AuthContext";

const RightSidebar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="">
      <div className="overflow-hidden rounded-xl bg-white text-slate-500 shadow-lg shadow-slate-200 mb-6 ">
        <div className="p-6">
          <header className="flex gap-4">
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                Job seeker guidance
              </h3>
              <p className="text-sm text-slate-400">
                {" "}
                Recommended based on your activity
              </p>
            </div>
          </header>
        </div>

        <div className="p-6">
          <p>
            Explore our curated guide of expert-led courses, such as how to
            improve your resume and grow your network, to help you land your
            next opportunity.
          </p>
        </div>
        {/* btn */}
        <div className="flex gap-2 p-2 pt-0">
          <button
            className="rounded-full bg-white flex  py-1.5 text-xl font-bold items-center gap-2 justify-start text-green-600 ml-4 cursor-pointer"
            href="/trypremium"
          >
            Show more
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="right-sidebar">
        <div className="sidebar-news">
          <AiOutlineExclamationCircle className="AiOutlineExclamationCircle" />
          <h3>Trending News</h3>
          <label>
            React Native Dominates Mobile App Development: Cross-Platform
            Success
          </label>
          <span>10h ago &middot; 10,657 readers</span>

          <label>
            Web Design Trends 2023: Embracing Minimalism and Dark Mode
          </label>
          <span>1d ago &middot; 8,549 readers</span>

          <label>
            React Context API: Simplifying State Management and Global Data
          </label>
          <span>12 ago &middot; 12,235 readers</span>

          <label>Tech Giants Hiring: IT Career Opportunities</label>
          <span>16h ago &middot; 22,347 readers</span>

          <label>Remote Work Trends: Web Developers Thrive</label>
          <span>7h ago &middot; 16,142 readers</span>

          <label className="read-more-link">Read More</label>
        </div>

        <div className="sidebar-ad">
          <label>Ad &middot; &middot; </label>
          <p className="ad1">Discover the Power of Data Science</p>
          <div className="flex items-center justify-center mt-2 gap-4">
            <img src={currentUser.photoURL} alt="" />
            <img src={trading} alt="" />
          </div>
          <p className="ad2">Invest Smart: Stock Market Insights and Tips</p>
          <div className="ad-link">Learn More</div>
        </div>

        <div className="sidebar-useful-links">
          <p>About</p>
          <p>Accessibility</p>
          <p>Help Center</p>
          <p>Privacy & Terms</p>
          <p>Ad Choices</p>
          <p>Advertising</p>
          <p>Business Services</p>
          <p>Get the CarrierConnect app</p>
          <p>More</p>

          <div className="copyright-msg">
            <img src={carrierconnectlogo} alt="" />
            <label> CarrierConnect Corporation © 2023</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
