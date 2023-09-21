import "./Post.css";
import { FcIdea } from "react-icons/fc";
import { PiChats, PiChatsBold, PiHandsClappingFill } from "react-icons/pi";
import { AiFillCamera, AiFillCaretDown, AiOutlineDelete } from "react-icons/ai";
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
import {
  IoChatboxEllipsesOutline,
  IoChatboxEllipsesSharp,
} from "react-icons/io5";
import { useUser } from "../../context/UserContext";

const Post = ({ post, onClickUser }) => {
  // console.log( "onClickUser",onClickUser);
  const { currentUser } = useContext(AuthContext);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentOpen, setCommentOpen] = useState(false);
  const [commentBoxVisible, setCommentBoxVisible] = useState(false);
  const [input, setInput] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const fileInputRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [postText, setPostText] = useState("Your initial post text here");
  const [editedInput, setEditedInput] = useState(postText);
  const [userData, setUserData] = useState(null);
  const { setClickedUserId } = useUser();

  const handleUserClick = () => {
    setClickedUserId(post.data.uid);
  };

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
    // setCommentBoxVisible(false);
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
    <div className="mb-3">
      <div className="flex flex-col max-w-container p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-white dark:text-gray-900 ">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <img
              alt=""
              src={post.data?.photoURL}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500 cursor-pointer"
              // onClick={() => {
              //     if (onClickUser) onClickUser(post.data.uid);
              //     console.log("inside the imag",post.data.uid);
              //   }}
              onClick={handleUserClick}
            />
            <div className="flex flex-col space-y-0.5">
              <p
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold cursor-pointer"
              >
                {userData?.name || post.data?.displayName}
              </p>
              <span className="text-xs dark:text-gray-400">
                Textile designer and UI/UX designer
              </span>
              <span className="text-xs dark:text-gray-400">
                {new Date(post.data?.timestamp?.toDate()).toLocaleString()}
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              {currentUser?.uid === post.data.uid && !editing && (
                <button onClick={handleEdit}>
                  <MdEdit />
                </button>
              )}
            </div>
            <div>
              {currentUser?.uid === post.data.uid && (
                <button onClick={openModal}>
                  <FaTrashAlt className="text-red-600" />
                </button>
              )}
            </div>
          </div>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modalContent">
              <p>Are you sure you want to delete this post?</p>
              <button onClick={deletePost}>Delete</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        )}

        {modalVisible && (
          <EditPost
            originalInput={post.data.input}
            editedInput={editedInput}
            onSave={handleSaveModal}
            onCancel={handleCancelModal}
          />
        )}

        <div>
          <p className="text-sm dark:text-gray-400 mb-2">{post.data.input}</p>
          {post.data?.img && (
            <>
              <img
                src={post.data.img}
                alt=""
                className="object-cover w-full mb-0.5 h-60 sm:h-full dark:bg-gray-500"
              />
            </>
          )}
          <div className="flex justify-between mb-4">
            <p>{""}</p>
            <p>
              {post.data?.img && (
                <>
                  {currentUser?.uid === post.data.uid && !editing && (
                    <div>
                      <button
                        onClick={handleOpenFilePicker}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 duration-150 bg-gray-200 rounded-lg hover:text-white hover:bg-indigo-500 active:bg-indigo-700"
                      >
                        <AiFillCamera
                          fill="currentColor"
                          className="w-4 h-4 text-lg"
                        />
                        Change Image
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
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between pt-1 pb-0">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                <div className="flex">
                  <AiFillLike className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" />
                </div>
                <FcIdea
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                />
                <PiHandsClappingFill
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                />
                <PiChats
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                />
              </div>
              <span className="text-sm">
                <span className="font-semibold">
                  <span>{likes.length + comments.length}</span>
                </span>
              </span>
            </div>
            <div>
              <span>
                {" "}
                {likes.length > 0 && <span>{likes.length} Likes</span>}
                &middot; {comments.length} comments
              </span>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex flex-wrap items-center justify-between">
          <div className="">
            <button
              aria-label="Share this post"
              type="button"
              className="flex items-center p-1 space-x-1.5"
              onClick={(e) => {
                likePost();
              }}
            >
              {liked ? (
                <AiFillLike className="w-7 h-7  text-gray-600" />
              ) : (
                <AiOutlineLike className="w-7 h-7 text-gray-600" />
              )}
              {likes.length > 0 && <span>{likes.length}</span>}
            </button>
          </div>
          <div>
            {commentBoxVisible ? (
              <button
                aria-label="Bookmark this post"
                type="button"
                className="flex items-center p-1 space-x-1.5"
                onClick={() => {
                  setCommentOpen(!commentOpen);
                  setCommentBoxVisible(!commentBoxVisible);
                }}
              >
                <IoChatboxEllipsesSharp className="w-7 h-7  text-gray-600" />
                <span>
                  {comments.length > 0 && <span>{comments.length} </span>}
                </span>
              </button>
            ) : (
              <button
                aria-label="Bookmark this post"
                type="button"
                className="flex items-center p-1 space-x-1.5"
                onClick={() => {
                  setCommentOpen(!commentOpen);
                  setCommentBoxVisible(!commentBoxVisible);
                }}
              >
                <IoChatboxEllipsesOutline className="w-7 h-7  text-gray-600" />
                <span>
                  {comments.length > 0 && <span>{comments.length} </span>}
                </span>
              </button>
            )}
          </div>
          <div className="flex space-x-2 text-sm ">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <PiShareFat className="w-7 h-7  text-gray-600" />

              <span></span>
            </button>
          </div>
          <div>
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <BsSend className="w-6 h-6 fill-current text-gray-600" />

              <span>283</span>
            </button>
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
          <div>
            {comments
              .sort((a, b) => b.data.timestamp - a.data.timestamp)
              .map((c) => (
                <div className="mx-auto my-3 max-w-container rounded-xl border px-4 py-4 text-gray-700">
                  <div className="mb-2">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={c.data.photoURL}
                        alt="Simon Lewis"
                      />
                      <p className="ml-4 w-56">
                        <span className="block text-gray-700 font-bold">
                          {" "}
                          {c.data.displayName.replace(/\s+/g, "").toLowerCase()}
                        </span>
                        <span className="truncate text-sm text-gray-400">
                          2.5k followers{" "}
                          <p href="#" className="font-medium text-gray-500">
                            works at xyz company
                          </p>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-100 p-2">
                    <p className="mb-1 text-gray-500"></p>
                    <p className="">{c.data.comment}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
