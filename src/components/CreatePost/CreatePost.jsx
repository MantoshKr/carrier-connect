import user1 from "../../assets/images/user1.jpg";
import "./CreatePost.css";
// import camera from '../../assets/images/camera.png';
// import video from '../../assets/images/video.png';
// import event from '../../assets/images/event.png';
import arrow from "../../assets/images/down-arrow.png";
import { FaCalendar, FaCamera, FaVideo } from "react-icons/fa";
import { HiPhoto } from "react-icons/hi2";
import { ImPlay } from "react-icons/im";
import { BsCalendarDate } from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";



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
              <HiPhoto style={{ color: '#378FE9' , fontSize: "18px" }} />{" "}
            </span>{" "}
            <span>Photo</span>
          </li>
          <li>
            {/* <img src={video} alt='' className='videoicon'/>Video */}
            <span>
              <ImPlay style={{ color: "green", fontSize: "18px" }} />{" "}
            </span>{" "}
            <span>Video</span>
          </li>
          <li>
            {/* <img src={event} alt='' className='eventicon'/>Event */}
            <span>
              <BsCalendarDate style={{ color: "#C37D16", fontSize: "18px" }} />{" "}
            </span>{" "}
            <span>Event</span>
          </li>
          {/* <li>Post</li> */}
          <li>
            <span>
              <RiArticleFill style={{ color: "red", fontSize: "18px" }} />{" "}
            </span>{" "}
            <span>Write article</span>
          </li>
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
