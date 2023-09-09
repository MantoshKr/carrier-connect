import "./CreatePost.css";
import arrow from "../../assets/images/down-arrow.png";
import { HiPhoto } from "react-icons/hi2";
import { ImPlay } from "react-icons/im";
import { BsCalendarDate } from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";
import { useContext, useState } from "react";
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

const CreatePost = () => {
  const [error, setError] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const [img, setImg] = useState(null);
  const [isTextAreaEmpty, setIsTextAreaEmpty] = useState(true);

  const userId = currentUser ? currentUser.uid : null;

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

  const removeImage = () => {
    setImg(null);
  };

  const userPhotoURL =
    currentUser && currentUser.photoURL ? currentUser.photoURL : "";

  return (
    <div className="main-content">
      <div className="create-post">
        <div className="create-post-input">
          <div className="photoURLimg">
            {currentUser && (
              <img src={currentUser.photoURL} alt="" className="photoURLimg" />
            )}
          </div>
          <textarea
            rows={1}
            type="text"
            style={{ resize: "none", overflow: "hidden" }}
            placeholder={"Start a post "}
            value={input}
            className="textarea2"
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
              className="selectedimg"
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
              <HiPhoto style={{ color: "#378FE9", fontSize: "18px" }} />{" "}
            </span>{" "}
            <span>Photo</span>
            <input
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              style={{ display: "none" }}
              onChange={(e) => setImg(e.target.files[0])}
            />
          </label>
          <label>
            <span>
              <ImPlay style={{ color: "green", fontSize: "18px" }} />{" "}
            </span>{" "}
            <span>Video</span>
          </label>
          <label>
            <span>
              <BsCalendarDate style={{ color: "#C37D16", fontSize: "18px" }} />{" "}
            </span>{" "}
            <span>Event</span>
          </label>

          <label>
            <span>
              <RiArticleFill style={{ color: "red", fontSize: "18px" }} />{" "}
            </span>{" "}
            <span>Write article</span>
          </label>
        </div>
      </div>
      <div className="sort-by">
        <hr />
        <p>
          Sort by:{" "}
          <span>
            top <img src={arrow} alt="" />{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CreatePost;
