import "./CreatePost.css";
import { HiPhoto } from "react-icons/hi2";
import { ImPlay } from "react-icons/im";
import { BsCalendarDate } from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "./../../context/AuthContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../firebase";
import {
  Timestamp,
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { IoClose } from "react-icons/io5";
import ReactDOM from "react-dom";

const CreatePost = () => {
  const [error, setError] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const [img, setImg] = useState(null);
  const [isTextAreaEmpty, setIsTextAreaEmpty] = useState(true);
  const [isShowing, setIsShowing] = useState(false);
  const userId = currentUser ? currentUser.uid : null;
  const wrapperRef = useRef(null);

  const handlePost = async () => {
    if (img) {
      const storageRef = ref(storage, "Posts/" + uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload progress:", progress);
        },
        (error) => {
          setError(true);
          console.log("Error during image upload:", error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(collection(db, "posts"), {
              uid: currentUser.uid,
              photoURL: currentUser.photoURL,
              displayName: currentUser.displayName,
              input,
              img: downloadURL,
              timestamp: serverTimestamp(),
            });

            await updateDoc(doc(db, "usersPosts", currentUser.uid), {
              messages: arrayUnion({
                id: uuid(),
                uid: currentUser.uid,
                photoURL: currentUser.photoURL,
                displayName: currentUser.displayName,
                input,
                img: downloadURL,
                timestamp: Timestamp.now(),
              }),
            });
          });
        }
      );
    } else {
      await addDoc(collection(db, "posts"), {
        uid: currentUser.uid,
        photoURL: currentUser.photoURL,
        displayName: currentUser.displayName,
        input,

        timestamp: serverTimestamp(),
      });

      await updateDoc(doc(db, "usersPosts", currentUser.uid), {
        messages: arrayUnion({
          id: uuid(),
          uid: currentUser.uid,
          photoURL: currentUser.photoURL,
          displayName: currentUser.displayName,
          input,

          timestamp: Timestamp.now(),
        }),
      });
    }
    setInput("");
    setImg(null);
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      if (!input.trim()) {
        alert("Please enter some text before submitting.");
      } else {
        handlePost();
      }
    }
  };

  const handleClickModal = () => {
    handlePost();
  };

  const removeImage = () => {
    setImg(null);
  };

  const userPhotoURL =
    currentUser && currentUser.photoURL ? currentUser.photoURL : "";

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

  return (
    <>
      <button
        onClick={() => setIsShowing(true)}
        className="w-full bg-white mb-2 p-4 rounded-lg"
      >
        <span>
          <div className="w-full">
            <div className="flex">
              <div className="">
                {currentUser && (
                  <img
                    src={currentUser.photoURL}
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                )}
              </div>
              <div className="w-[90%] mr-3">
                <textarea
                  rows={1}
                  type="button"
                  style={{
                    resize: "none",
                    overflow: "hidden",
                    border: "1px solid #ccc",
                    textAlign: "left",
                    paddingBottom: "30px",
                  }}
                  placeholder={"Start a post "}
                  className="ml-4 h-8 w-full cursor-pointer rounded-full "
                />
              </div>
            </div>

            <div className="flex items-center justify-between border-t-2 pt-3 sm:px-16  mt-2">
              <label className="flex items-center justify-center gap-2 ">
                <span>
                  <HiPhoto style={{ color: "#378FE9", fontSize: "18px" }} />{" "}
                </span>{" "}
                <span className="hidden sm:flex">Media</span>
              </label>
              {/* <label className="flex items-center justify-center gap-2">
                <span>
                  <ImPlay style={{ color: "green", fontSize: "18px" }} />{" "}
                </span>{" "}
                <span className="hidden sm:flex">Video</span>
              </label> */}
              <label className="flex items-center justify-center gap-2">
                <span>
                  <BsCalendarDate
                    style={{ color: "#C37D16", fontSize: "18px" }}
                  />{" "}
                </span>{" "}
                <span className="hidden sm:flex">Event</span>
              </label>

              <label className="flex items-center justify-center gap-2">
                <span>
                  <RiArticleFill style={{ color: "red", fontSize: "18px" }} />{" "}
                </span>{" "}
                <span className="hidden sm:flex">Write article</span>
              </label>
            </div>
          </div>
        </span>
      </button>

      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-4a content-4a"
              aria-modal="true"
              tabindex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                ref={wrapperRef}
                className="flex w-[100%] sm:w-[70%] lg:w-[50%] xl:w-[30%] flex-col gap-4 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                id="modal"
                role="document"
              >
                {/*        <!-- Modal header --> */}
                <header id="header-4a" className="flex items-center">
                  <h3 className="flex-1 text-lg  font-medium text-slate-700">
                    <div className="flex items-center capitalize font-semibold">
                      <div className="photoURLimg">
                        {currentUser && (
                          <img
                            src={currentUser.photoURL}
                            alt=""
                            className="photoURLimg"
                          />
                        )}
                      </div>
                      {currentUser.displayName}
                    </div>
                  </h3>
                  <button
                    onClick={() => setIsShowing(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-79 desc-79"
                      >
                        <title id="title-79">Icon title</title>
                        <desc id="desc-79">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </header>
                <div className="main-content">
                  <div className="create-post">
                    <div className="create-post-input">
                      <div className="photoURLimg">
                        {currentUser && (
                          <img
                            src={currentUser.photoURL}
                            alt=""
                            className="photoURLimg"
                          />
                        )}
                      </div>
                      <textarea
                        rows={1}
                        type="text"
                        style={{ resize: "none", overflow: "hidden" }}
                        placeholder={"Start a post "}
                        value={input}
                        className="textarea2  rounded-full"
                        onChange={(e) => {
                          setInput(e.target.value);
                          setIsTextAreaEmpty(e.target.value === "");
                        }}
                        onKeyDown={handleKey}
                      />
                    </div>

                    {img && (
                      <div className="closeImgContainer">
                        <img
                          src={URL.createObjectURL(img)}
                          alt=""
                          className="selectedimg selectedimg 2xl:max-h-96 xl:max-h-56 lg:max-h-48 md:max-h-16 max-h-4"
                        />
                        <IoClose
                          style={{ color: "#bb0000f2", fontSize: "20px" }}
                          className="closeImg"
                          onClick={removeImage}
                        />
                      </div>
                    )}

                    <div className="create-post-links">
                      <label htmlFor="file" className="inputfile">
                        <span>
                          <HiPhoto
                            style={{ color: "#378FE9", fontSize: "18px" }}
                          />{" "}
                        </span>{" "}
                        <span className="hidden sm:flex ">Photo</span>
                        <input
                          type="file"
                          id="file"
                          accept=".png,.jpeg,.jpg"
                          style={{ display: "none" }}
                          onChange={(e) => setImg(e.target.files[0])}
                        />
                      </label>
                      {/* <label>
                        <span>
                          <ImPlay
                            style={{ color: "green", fontSize: "18px" }}
                          />{" "}
                        </span>{" "}
                        <span className="hidden sm:flex">Video</span>
                      </label> */}
                      <label>
                        <span>
                          <BsCalendarDate
                            style={{ color: "#C37D16", fontSize: "18px" }}
                          />{" "}
                        </span>{" "}
                        <span className="hidden sm:flex">Event</span>
                      </label>

                      <label>
                        <span>
                          <RiArticleFill
                            style={{ color: "red", fontSize: "18px" }}
                          />{" "}
                        </span>{" "}
                        <span className="hidden sm:flex">Write article</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/*        <!-- Modal actions --> */}
                <div className="flex justify-center gap-2">
                  <button onClick={ handleClickModal} className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>Post</span>
                  </button>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};

export default CreatePost;
