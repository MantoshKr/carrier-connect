import user1 from "../../assets/images/user1.jpg";
import "./CreatePost.css";
// import camera from '../../assets/images/camera.png';
// import video from '../../assets/images/video.png';
// import event from '../../assets/images/event.png';
import arrow from "../../assets/images/down-arrow.png";
import { FaCalendar, FaCamera, FaVideo } from "react-icons/fa";

const CreatePost = () => {
  return (
    <div className="main-content">
      <div className="create-post">
        <div className="create-post-input">
          <img src={user1} alt="" />
          {/* <textarea rows='2' placeholder='Create a post' /> */}
          <form>
            <input
              type="text"
              placeholder={`what's on your mind`}
              className="textarea2"
            />
          </form>

          {/* <button hidden type='submit' >submit</button> */}
        </div>
        <div className="create-post-links">
          <li>
            {/* <img src={camera} alt='' className='photoicon' />Photo */}
            <span>
              <FaCamera style={{ color: "green", fontSize: "18px" }} />{" "}
            </span>{" "}
            <span>Photo</span>
          </li>
          <li>
            {/* <img src={video} alt='' className='videoicon'/>Video */}
            <span>
              <FaVideo style={{ color: "green", fontSize: "18px" }} />{" "}
            </span>{" "}
            <span>Video</span>
          </li>
          <li>
            {/* <img src={event} alt='' className='eventicon'/>Event */}
            <span>
              <FaCalendar style={{ color: "green", fontSize: "18px" }} />{" "}
            </span>{" "}
            <span>Event</span>
          </li>
          <li>Post</li>
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
