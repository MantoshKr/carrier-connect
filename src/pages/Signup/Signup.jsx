import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { ImGoogle } from "react-icons/im";
import userImage from "../../assets/images/user.png";
import user2 from "../../assets/images/user2.png";
import { FaUpload } from "react-icons/fa";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [error, setError] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions to sign up.");
      return; // Prevent form submission
    }


    const displayName = document.getElementById("displayName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Form data:", displayName, email, password);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, "usersImages/" + displayName);

      console.log("Storage reference:", storageRef);

      const uploadTask = uploadBytesResumable(storageRef, img);

      console.log("Image upload task:", uploadTask);


      
    // alert("Creating user. Please wait...");

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
            console.log("Download URL:", downloadURL);
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "usersPosts", res.user.uid), { messages: [] });
            console.log("User created successfully:", res.user);
             window.location.reload();
          });
        }
      );
    } catch (error) {
      setError(true);
      console.log("Error:", error.message);
    }


    // localStorage.setItem("userSignedUp", "true");
    navigate("/home");
   
  };
  return (
    <>
      <div className="main">
   

        <div className="sign-up-form">
          <img src={userImage} alt="user" className="userlogo" />
          <h1>Create a new account</h1>
          <p>It's quick and easy.</p>

          <hr className="divider" />

          <form onSubmit={handleSubmit}>
            <div className="top">
              <img
                src={img ? URL.createObjectURL(img) : user2}
                alt=""
                className="profileImg"
              />

              <div className="uploadImg">
                <label htmlFor="file">
                  Image:{" "}
                  <FaUpload
                    style={{ color: "green", fontSize: "18px" }}
                    className="icon"
                  />
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    style={{ display: "none" }}
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                </label>
              </div>
            </div>

            <input
              type="text"
              placeholder="Name"
              id="displayName"
              className="input-box"
              required
            />

            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              className="input-box"
              required
            />
            <input
              type="password"
              placeholder="Choose your password"
              id="password"
              className="input-box"
              required
            />

            <p id="terms">
              {" "}
              <span>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                />{" "}
              </span>{" "}
              By clicking Agree & Join, you agree to the CarrierConnect User
              Agreement, Privacy Policy, and Cookie Policy.
            </p>

            <button type="submit" className="signup-btn">
              Agree & Join
            </button>
            {error && <span>Something went wrong!</span>}
          </form>

          <div className="or-divider">
            <hr className="divider-line" />
            <span className="or-text">or</span>
            <hr className="divider-line" />
          </div>

          <div className="google-signup">
            <button className="google-btn">
              <span className="google-icon">
                <ImGoogle />
              </span>
              Continue with Google
            </button>
          </div>

          <Link to="/">
            <p id="login">Already on Carrier Connect? </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
