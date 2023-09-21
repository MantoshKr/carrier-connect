import React, { useState, useRef, useEffect, useContext } from "react";
import ReactDOM from "react-dom";

import { useNavigate } from "react-router-dom";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import ChangeImage from "../../components/ChangeImage";



export default function NewEditProfile() {
  const [isShowing, setIsShowing] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    let html = document.querySelector("html");

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const modal = document.querySelector("#modal"); // select the modal by it's id

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false);
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9;

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus(); // add focus for the last focusable element
              e.preventDefault();
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus(); // add focus for the first focusable element
              e.preventDefault();
            }
          }
        });

        firstFocusableElement.focus();
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing]);

  const [error, setError] = useState(false);
  const [data, setData] = useState({
    headline: "",
    industry: "",
    college: "",
    degree: "",
    fieldofstudy: "",
    grade: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    skills: "",
    activities: "",
    description: "",
  });
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, "users", currentUser.uid);
        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          setData(userData);
        } else {
          console.log("User data not found in Firestore");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // await updateProfile(currentUser, {
    //   displayName: data.name,
    //   email: data.newEmail,
    // });

    await updateDoc(doc(db, "users", currentUser.uid), {
      uid: currentUser.uid,
      displayName: currentUser.displayName,
      email: currentUser.email,
      headline: data.headline,
      industry: data.industry,
      college: data.college,
      degree: data.degree,
      fieldofstudy: data.fieldofstudy,
      grade: data.grade,
      phone: data.phone,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      skills: data.skills,
      activities: data.activities,
      description: data.description,

      createdAt: serverTimestamp(),
    });

    // const credential = EmailAuthProvider.credential(
    //   currentUser.email,
    //   data.oldPassword
    // );

    // await reauthenticateWithCredential(currentUser, credential).then(
    //   async () => {
    //     //User reauthenticate
    //     await updateEmail(currentUser, data.newEmail);
    //   }
    // );

    navigate("/");
  };

  // const userPhotoURL = currentUser && currentUser.photoURL ? currentUser.photoURL : "";
  // console.log(data);
  // console.log(data.skills);

  return (
    <>
<div className="flex  relative">
    <div className="absolute left-28 top-52">
      <ChangeImage />
     
    </div>
    <p className="">{""}</p>
  
      <button
        onClick={() => setIsShowing(true)}
        className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none ml-44 mt-20"
      >
        <span>Edit Profile</span>
      </button>
      </div>

      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm "
              aria-labelledby="header-4a content-4a"
              aria-modal="true"
              tabindex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                ref={wrapperRef}
                className="flex flex-col gap-4 overflow-hidden rounded bg-white p-0 text-slate-500 shadow-xl shadow-slate-700/10 max-h-[80vh] overflow-y-auto scrollbar "
                id="modal"
                role="document"
              >
                {/*        <!-- Modal header --> */}

                {/*        <!-- Modal body --> */}
                <section className="p-0 max-w-5xl bg-white dark:text-white">
                  <form
                    onSubmit={handleUpdate}
                    novalidate=""
                    action=""
                    className="container flex flex-col mx-auto space-y-0"
                  >

                  <h3 className="font-bold text-lg ">
                    Hello <span className="font-bold text-lg text-green-600 capitalize">{currentUser?.displayName} </span> , you can edit your setting below .
                   
                  </h3>
                  <div> * means required field</div>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  f0f2f5': '#f0f2f5">
                      <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">{""}</p>
                      </div>
                      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full">
                          <label for="firstname" className="text-sm">
                            Headline*
                          </label>
                          <input
                            id="Headline"
                            name="headline"
                            value={data.headline}
                            type="text"
                            placeholder=""
                            onChange={handleChange}
                            required
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  f0f2f5': '#f0f2f5 ">
                      <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Current Position </p>
                      </div>
                      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full">
                          <label for="firstname" className="text-sm">
                            Industry*
                          </label>
                          <input
                            id="Headline"
                            name="industry"
                            value={data.industry}
                            type="text"
                            placeholder="Ex. Reliance"
                            onChange={handleChange}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          />
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  f0f2f5': '#f0f2f5 ">
                      <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Education</p>
                      </div>
                      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full">
                          <label for="firstname" className="text-sm">
                            College
                          </label>
                          <input
                            id="Headline"
                            name="college"
                            value={data.college}
                            type="text"
                            placeholder="Ex. Boston University"
                            onChange={handleChange}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                          <label for="firstname" className="text-sm">
                            Degree
                          </label>
                          <input
                            id="Headline"
                            name="degree"
                            value={data.degree}
                            type="text"
                            placeholder="Ex. Bachelor's"
                            onChange={handleChange}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                          <label for="firstname" className="text-sm">
                            Field of Study
                          </label>
                          <input
                            id="Headline"
                            name="fieldofstudy"
                            value={data.fieldofstudy}
                            type="text"
                            placeholder="Ex. Business"
                            onChange={handleChange}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                          <label for="firstname" className="text-sm">
                            Grade
                          </label>
                          <input
                            id="Headline"
                            name="grade"
                            value={data.grade}
                            type="text"
                            placeholder="Ex. 9.2"
                            onChange={handleChange}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  f0f2f5': '#f0f2f5 ">
                      <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Personal Inormation</p>
                        <p className="text-xs"></p>
                      </div>
                      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                          <label for="address" className="text-sm">
                            Phone number
                          </label>
                          <input
                            id="address"
                            name="phone"
                            value={data.phone}
                            type="text"
                            placeholder=""
                            onChange={handleChange}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          />
                        </div>

                        <div className="col-span-full">
                          <label for="address" className="text-sm">
                            Address
                          </label>
                          <input
                            id="address"
                            name="address"
                            value={data.address}
                            type="text"
                            placeholder=""
                            onChange={handleChange}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                          <label for="city" className="text-sm">
                            City
                          </label>
                          <input
                            id="city"
                            name="city"
                            value={data.city}
                            type="text"
                            placeholder=""
                            onChange={handleChange}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                          <label for="state" className="text-sm">
                            State / Province
                          </label>
                          <input
                            id="state"
                            name="state"
                            value={data.state}
                            type="text"
                            placeholder=""
                            onChange={handleChange}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                          <label for="zip" className="text-sm">
                            ZIP / Postal
                          </label>
                          <input
                            id="zip"
                            name="zip"
                            value={data.zip}
                            type="text"
                            placeholder=""
                            onChange={handleChange}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          />
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md f0f2f5': '#f0f2f5  ">
                      <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Skills</p>
                        <p className="text-xs">
                          We recommend adding your top 5 used in this
                          experience. They’ll also appear in your Skills
                          section.
                        </p>
                      </div>
                      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full ">
                          <label for="username" className="text-sm">
                            Skills
                          </label>
                          <input
                            id="username"
                            name="skills"
                            value={data.skills}
                            type="text"
                            placeholder="Ex. Web Development, Python, Java,..."
                            onChange={handleChange}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          />
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md f0f2f5': '#f0f2f5  ">
                      <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">More</p>
                        <p className="text-xs"></p>
                      </div>
                      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full">
                          <label for="bio" className="text-sm">
                            Activities and societies
                          </label>
                          <textarea
                            id="bio"
                            name="activities"
                            value={data.activities}
                            placeholder="Ex. Alpha Phi Omega , Marching Band, ,Volleyball"
                            onChange={handleChange}
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          ></textarea>
                        </div>
                        <div className="col-span-full">
                          <label for="bio" className="text-sm">
                            Description
                          </label>
                          <textarea
                            id="bio"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            placeholder=""
                            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                          ></textarea>
                        </div>
                      </div>
                    </fieldset>
                    <div className="flex justify-center">
                        <div>
                           {""}
                        </div>
                        <button
                      type="submit"
                      class="flex w-20 rounded-full justify-center border border-indigo-600 bg-indigo-600 px-12 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                      save
                    </button>

                    </div>
                    
                  </form>
                </section>
                {/*        <!-- Modal actions --> */}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
