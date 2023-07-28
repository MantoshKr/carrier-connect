import "./Post.css";
import { FcIdea } from "react-icons/fc";
import { PiHandsClappingFill } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai";
import { PiChatsThin } from "react-icons/pi";
import { PiShareFat } from "react-icons/pi";
import { BsSend } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";



const Post = ({post}) => {
  

  

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
            <AiOutlineLike className="poststatsicon" />
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
          <img src={post.data?.photoURL} alt="" className="post-activity-user-icon" />
          <AiFillCaretDown className="post-activity-arrow-icon" />
          </div>

        <div className="post-acitivity-link">
          <AiOutlineLike className="post-activity-link-icon" />
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
