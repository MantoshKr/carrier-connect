import "./Post.css";
import { FcIdea } from "react-icons/fc";
import { PiHandsClappingFill } from "react-icons/pi";
import { AiFillCaretDown, AiOutlineDelete } from "react-icons/ai";
import { PiChatsThin } from "react-icons/pi";
import { PiShareFat } from "react-icons/pi";
import { BsSend } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AiFillLike } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import EditPost from "../EditPost/EditPost";
import { MdEdit } from "react-icons/md";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { FiRefreshCw } from "react-icons/fi";

const Post = ({ post }) => {
  const { currentUser } = useContext(AuthContext);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentOpen, setCommentOpen] = useState(false);
  const [commentBoxVisible, setCommentBoxVisible] = useState(false);
  const [input, setInput] = useState("");
  // const [editing, setEditing] = useState(false);
  // const [editedInput, setEditedInput] = useState(post.data.input);
  const [newImageUrl, setNewImageUrl] = useState("");
  const fileInputRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [postText, setPostText] = useState("Your initial post text here");
  const [editedInput, setEditedInput] = useState(postText);
  

  useEffect(() => {
    const unSub = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
    return () => {
      unSub();
    };
  }, [post.id]);

  useEffect(() => {
    setLiked(likes.findIndex((like) => like.id === currentUser?.uid) !== -1);
  }, [likes, currentUser]); //[likes, currentUser.uid])

  const likePost = async () => {
    if (liked) {
      await deleteDoc(doc(db, "posts", post.id, "likes", currentUser.uid));
    } else {
      await setDoc(doc(db, "posts", post.id, "likes", currentUser.uid), {
        userId: currentUser.uid,
      });
    }
  };

  // console.log(comments);

  useEffect(() => {
    const unSub = onSnapshot(
      collection(db, "posts", post.id, "comments"),
      (snapshot) => {
        setComments(
          snapshot.docs.map((snapshot) => ({
            id: snapshot.id,
            data: snapshot.data(),
          }))
        );
      }
    );
    return () => {
      unSub();
    };
  }, [post.id]);

  const handleComment = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts", post.id, "comments"), {
      comment: input,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      uid: currentUser.uid,
      timestamp: serverTimestamp(),
    });
    setCommentBoxVisible(false);
    setInput("");
  };

  const deletePost = async () => {
    await deleteDoc(doc(db, "posts", post.id));
  };

  const handleEdit = () => {
    setEditedInput(post.data.input);
    setModalVisible(true);
  
  };

  const handleSaveModal = async (editedText) => {
   
    const postUpdates = {};
  if (editedText !== post.data.input) {
    postUpdates.input = editedText; // Update the post text
  }
  if (newImageUrl && newImageUrl !== post.data.img) {
    postUpdates.img = newImageUrl; // Update the image URL
  }

  // Only update the document if there are changes
  if (Object.keys(postUpdates).length > 0) {
    await updateDoc(doc(db, "posts", post.id), postUpdates);
  }

    setModalVisible(false);
  };

  const handleCancelModal = () => {
    setModalVisible(false);
  };

  const handleOpenFilePicker = () => {
    fileInputRef.current.click();
  };

  // Function to handle the image selection from the file picker
  const handleImageChange = async (e) => {
    try {
      const selectedFile = e.target.files[0];
      const storage = getStorage();
      const imageRef = ref(
        storage,
        `post_images/${post.id}/${selectedFile.name}`
      );

      
      const snapshot = await uploadBytes(imageRef, selectedFile);

      
      const downloadURL = await getDownloadURL(snapshot.ref);

 
      setNewImageUrl(downloadURL);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    const updatePostImage = async () => {
      if (newImageUrl) {
        
        await updateDoc(doc(db, "posts", post.id), {
          img: newImageUrl,
        });
       
        setNewImageUrl("");
      }
    };

    updatePostImage();
  }, [newImageUrl, post.id]);

  const openModal = () => {
   
    setShowModal(true);
  };

  const closeModal = () => {
   
    setShowModal(false);
  };

  return (
    <>
      <div className="Post">
        <div className="postdelete">
          {currentUser?.uid === post.data.uid && (
            <button onClick={openModal} className="deleteButton">
              <FaTrashAlt />
            </button>
          )}
        </div>
{/* ----------------modal to delete post--------------- */}
        {showModal && (
        <div className="modal">
          <div className="modalContent">
            <p>Are you sure you want to delete this post?</p>
            <button onClick={deletePost}>Delete</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      

        <div className="postedit">
          {currentUser?.uid === post.data.uid && !editing && (
            <button onClick={handleEdit} className="editButton">
              <MdEdit />
            </button>
          )}
        </div>


        {modalVisible && (
        <EditPost
        originalInput={post.data.input} 
  editedInput={editedInput} 
          
          onSave={handleSaveModal}
          onCancel={handleCancelModal}
        />
      )}

      
      
        <div className="Post-author">
          <img src={post.data?.photoURL} alt="" />

          <div className="post-top">
            <h1>{post.data?.displayName}</h1>
            <label>{}</label>
            <label>
              {new Date(post.data?.timestamp?.toDate()).toLocaleString()}
            </label>
          </div>
        </div>
        {/* <p>{post.data.input}</p> */}
        {editing ? (
          <EditPost
            originalInput={post.data.input}
            onSave={handleSaveModal}
            onCancel={handleCancelModal}
          />
        ) : (
          <p>{post.data.input}</p>
        )}

        <div className="main-img-container">
          {post.data?.img && ( // Check if the image URL exists in post.data
            <>
              <img src={post.data.img} alt="" className="postimg" />
              {currentUser?.uid === post.data.uid && !editing && (
                <div className="img-update">
                  <button
                    onClick={handleOpenFilePicker}
                    className="changeImageButton"
                  >
                    <FiRefreshCw className="refreshicon" /> Change Image
                  </button>
                  {/* Hidden file input */}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                  />
                </div>
              )}
            </>
          )}
        </div>

        <div className="post-stats">
          <div>
            {/* <AiFillLike className="poststatsicon" /> */}

            <AiFillLike
              onClick={(e) => {
                likePost();
              }}
              className="poststatsicon"
              style={{ color: "#011631" }}
            />
            {likes.length > 0 && <span className="">{likes.length}</span>}

            <FcIdea className="poststatsicon" />
            <PiHandsClappingFill className="poststatsicon" />
            <span className="liked-users">Rahul and 50 others</span>
          </div>
          <div className="postBottomRight">
            <span
              className="postCommentText"
              onClick={() => setCommentOpen(!commentOpen)}
            >
              {comments.length} comments &middot; 40 shares
            </span>
          </div>
        </div>
        <div className="post-activity">
          <div>
            <img
              src={currentUser?.photoURL}
              alt=""
              className="post-activity-user-icon"
            />
            <AiFillCaretDown className="post-activity-arrow-icon" />
          </div>

          <div
            className="post-acitivity-link"
            onClick={(e) => {
              likePost();
            }}
          >
            {/* <AiOutlineLike className="post-activity-link-icon" /> */}

            {liked ? (
              <AiFillLike
                style={{ color: "#011631" }}
                className="post-activity-link-icon"
              />
            ) : (
              <AiOutlineLike className="post-activity-link-icon" />
            )}

            <span>Like</span>
          </div>

          <div
            className="post-acitivity-link"
            onClick={() => setCommentBoxVisible(!commentBoxVisible)}
          >
            <PiChatsThin className="post-activity-link-icon" />
            <span>Comment</span>
          </div>
          <div className="post-acitivity-link">
            <PiShareFat className="post-activity-link-icon" />
            <span>Share</span>
          </div>

          <div className="post-acitivity-link">
            <BsSend className="post-activity-link-icon" />
            <span>Send</span>
          </div>
        </div>

        {commentBoxVisible && (
          <form onSubmit={handleComment} className="commentBox">
            <textarea
              type="text"
              placeholder="Write a comment ..."
              className="commentInput"
              rows={1}
              style={{ resize: "none" }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" disabled={!input} className="commentPost">
              Comment
            </button>
          </form>
        )}

        {commentOpen > 0 && (
          <div className="comment">
            {comments
              .sort((a, b) => b.data.timestamp - a.data.timestamp)
              .map((c) => (
                <div>
                  <div className="commentWrapper">
                    <img
                      className="commentProfileImg"
                      src={c.data.photoURL}
                      alt=""
                    />
                    <div className="commentInfo">
                      <span className="commentUsername">
                        @{c.data.displayName.replace(/\s+/g, "").toLowerCase()}
                      </span>
                      <p className="commentText">{c.data.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
