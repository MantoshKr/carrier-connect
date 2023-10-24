import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";

const ChangeImage = () => {
  const [img, setImg] = useState(null);
  const [error, setError] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [currentUserData, setCurrentUserData] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (currentUser && currentUser.uid) {
      // Create a Firestore reference to the user's document
      const userDocRef = doc(db, "users", currentUser.uid);

      // Set up a listener to watch for changes to the user's document
      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          // Update the local state with the latest user data, including photoURL
          setCurrentUserData(doc.data());
        }
      });

      return () => {
        // Unsubscribe from the listener when the component unmounts
        unsubscribe();
      };
    }
  }, [currentUser]);

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setImg(imageFile);

    // Automatically update the profile image when a new image is selected
    updateProfileImage(imageFile);
  };

  const updateProfileImage = async (imageFile) => {
    if (imageFile) {
      const storageRef = ref(storage, "usersImages/" + uuid());
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

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
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateProfile(currentUser, {
              photoURL: downloadURL,
            });
            // update the Firestore database with the new photo URL
            await updateDoc(doc(db, "users", currentUser.uid), {
              uid: currentUser.uid,
              photoURL: downloadURL,
              displayName: currentUser.displayName,
              email: currentUser.email,
            });
          } catch (error) {
            setError(true);
            console.error("Error getting download URL:", error);
          }
        },
      );
    }
  };

  return (
    <div>
      <div>
        <div className="mx-auto w-64 text-center ">
          <div
            className="relative w-64"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <img
              className="w-64 h-64 rounded-full object-cover absolute"
              src={currentUser?.photoURL}
              alt=""
            />
            <div className="w-64 h-64 group border border-black hover:bg-gray-300 bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500 ">
              <img
                className="hidden group-hover:block w-12 cover"
                src="https://www.svgrepo.com/show/33565/upload.svg"
                alt=""
              />
              <p className="font-bold">Change image</p>
            </div>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeImage;
