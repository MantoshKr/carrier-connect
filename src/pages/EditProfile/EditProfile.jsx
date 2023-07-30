import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { v4 as uuid } from "uuid";
import "./EditProfile.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import user3 from "../../assets/images/user3.jpg";


const EditProfile = () => {
  const [img, setImg] = useState(null);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    name: "",
    newEmail: "",
    phone: "",
    headline: "",
    country: "",
    company: "",
    website: "",
    about: "",
    skills: "",
    oldPassword: "",
  });
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (img) {
      const storageRef = ref(storage, "usersImages/" + uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      // uploadTask.on(
      //   (error) => {
      //     setError(true);
      //   },

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload progress:", progress);
        },
        (error) => {
          setError(true);
          console.log("Error during image upload:", error.message);
        },


        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(currentUser, {
              displayName: data.name,
              email: data.newEmail,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", currentUser.uid), {
              uid: currentUser.uid,
              photoURL: downloadURL,
              displayName: data.name,
              email: data.newEmail,
              phone: data.phone,
              headline: data.headline,
              country: data.country,
              company: data.company,
              website: data.website,
              about: data.about,
              skills: data.skills,
              createdAt: serverTimestamp(),
            });
          
            const credential = EmailAuthProvider.credential(
              currentUser.email,
              data.oldPassword
            );

            await reauthenticateWithCredential(currentUser, credential).then(
              async () => {
                //User reauthenticate
                await updateEmail(currentUser, data.newEmail);
              }
            );
          });
        }
      );
    } else {
      await updateProfile(currentUser, {
        displayName: data.name,
        email: data.newEmail,
      });

      await setDoc(doc(db, "users", currentUser.uid), {
        uid: currentUser.uid,

        displayName: data.name,
        email: data.newEmail,
        phone: data.phone,
        headline: data.headline,
        country: data.country,
        company: data.company,
        website: data.website,
        about: data.about,
        skills: data.skills,
        createdAt: serverTimestamp(),
      });
     
      const credential = EmailAuthProvider.credential(
        currentUser.email,
        data.oldPassword
      );

      await reauthenticateWithCredential(currentUser, credential).then(
        async () => {
          //User reauthenticate
          await updateEmail(currentUser, data.newEmail);
        }
      );
    }
    navigate("/");
  };

  // const userPhotoURL = currentUser && currentUser.photoURL ? currentUser.photoURL : "";
  // console.log(data);
  // console.log(data.skills);
  return (
    <div className="editProfile">
      <div className="editProfileWrapper">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={user3} alt="" className="profileCoverImg" />
              <img
                src={currentUser?.photoURL}
                alt=""
                className="profileUserImg"
              />

     
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{currentUser?.displayName}</h4>
              <span className="profileInfoDesc">{}</span>
            </div>
          </div>
          <div className="editprofileRightBottom">
            <div className="top">
              <h1>Edit User Profile</h1>
            </div>
            <div className="bottom">
              <div className="left">
              <label htmlFor="file">
                {/* <img
                  src={
                    img
                      ? URL.createObjectURL(img)
                      : user3
                  }
                  alt=""
                /> */}
               
                <img
                  src={
                    img
                      ? URL.createObjectURL(img)
                      : (currentUser && currentUser.photoURL) || user3
                  }
                  alt=""
                  className="profileUserImg"
                />
                </label>
              </div>
              <div className="right">
                <form onSubmit={handleUpdate}>
                  <div className="formInput">
                    <label htmlFor="file"></label>
                    <input
                      type="file"
                      id="file"
                      style={{ display: "none" }}
                      onChange={(e) => setImg(e.target.files[0])}
                    />
                  </div>
                  <div className="formInput">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      style={{ fontSize: "15px"}}
                      placeholder={currentUser.displayName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="formInput">
                    <label>Email</label>
                    <input
                      type="email"
                      name="newEmail" 
                      placeholder={currentUser.email}
                      onChange={handleChange}
                      style={{ fontSize: "15px"}}
                      required
                    />
                  </div>

                  <div className="formInput">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder={"+1 234 567 890"}
                      onChange={handleChange}
                      style={{ fontSize: "15px"}}
                      required
                    />
                  </div>

                  <div className="formInput">
                    <label>Headline</label>
                    <input
                      type="text"
                      name="headline"
                      placeholder="headline"
                      onChange={handleChange}
                      style={{ fontSize: "15px"}}
                      required
                    />
                  </div>
                  <div className="formInput">
                    <label>Country</label>
                    <input
                      type="text"
                      name="country"
                      placeholder="India"
                      onChange={handleChange}
                      style={{ fontSize: "15px"}}
                      required
                    />
                  </div>
                  <div className="formInput">
                    <label>Company</label>
                    <input
                      type="text"
                      placeholder="Company"
                      name="company"
                      onChange={handleChange}
                      style={{ fontSize: "15px"}}
                      required
                    />
                  </div>
                 
                  <div className="formInput">
                    <label>Website</label>
                    <input
                      type="text"
                      name="website"
                      placeholder="Website"
                      onChange={handleChange}
                      style={{ fontSize: "15px"}}
                      required
                    />
                  </div>
                  <div className="formInput">
                    <label>Write about yourself:</label>
                      <textarea
                        id="about"
                        name="about"
                        placeholder="Write about yourself..."
                        rows="4"
                        cols="50"
                        onChange={handleChange}
                        required
                      />

                  </div>
                  <div className="formInput">
                    <label>Skills</label>
                    <input
                      type="text"
                      name="skills"
                      placeholder="Skills"
                      onChange={handleChange}
                      style={{ fontSize: "15px"}}
                      required
                    />
                  </div>
                  <div className="formInput">
                    <label>Password</label>
                    <input
                      type="password"
                      name="oldPassword"
                      placeholder="Enter Your Password to save changes"
                      onChange={handleChange}
                      style={{ fontSize: "14px"}}
                      required
                    />
                  </div>
                  <button type="submit" className="updateButton">
                    Save & Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
