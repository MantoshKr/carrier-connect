import "./Post.css";
import { FcIdea } from "react-icons/fc";
import { PiHandsClappingFill } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai";
import { PiChatsThin } from "react-icons/pi";
import { PiShareFat } from "react-icons/pi";
import { BsSend } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AiFillLike } from "react-icons/ai";



const Post = ({post}) => {
  const { currentUser } = useContext(AuthContext);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);

  
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
  }, [likes, currentUser.uid]);

  const likePost = async () => {
    if (liked) {
      await deleteDoc(doc(db, "posts", post.id, "likes", currentUser.uid));
    } else {
      await setDoc(doc(db, "posts", post.id, "likes", currentUser.uid), {
        userId: currentUser.uid,
      });
    }
  };
  

  return (
    <>
      <div className="Post">
        <div className="Post-author">
          <img src={post.data?.photoURL} alt="" />
          
          
          <div>
            <h1>{post.data.displayName}</h1>
            <label>{}</label>
            <label>
            {new Date(post.data?.timestamp?.toDate()).toLocaleString()}
            </label>
          </div>
        </div>
        <p>{post.data.input}</p>
        <img src={post.data?.img} alt="" className="postimg" />

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
            {likes.length > 0 && (
              <span className="">{likes.length}</span>
            )}

            <FcIdea className="poststatsicon" />
            <PiHandsClappingFill className="poststatsicon" />
            <span className="liked-users">Rahul and 50 others</span>
          </div>
          <div>
            <span>20 comments &middot; 40 shares</span>
          </div>
        </div>
        <div className="post-activity">
        <div>
          <img src={currentUser?.photoURL} alt="" className="post-activity-user-icon" />
          <AiFillCaretDown className="post-activity-arrow-icon" />
          </div>

        <div className="post-acitivity-link"     onClick={(e) => {
              likePost();
            }}>
          {/* <AiOutlineLike className="post-activity-link-icon" /> */}

      
          
            {liked ? (
              <AiFillLike style={{ color: "#011631" }} className="footerIcon" />
            ) : (
              <AiOutlineLike className="footerIcon" />
            )}   

          <span>Like</span>
        </div>

        <div className="post-acitivity-link">
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
      </div>
    </>
  );

};


export default Post;
