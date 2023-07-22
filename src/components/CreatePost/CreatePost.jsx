import React from 'react'
import user1 from '../../assets/images/user1.jpg'
import './CreatePost.css'
import camera from '../../assets/images/camera.png'
import video from '../../assets/images/video.png'
import event from '../../assets/images/event.png'
import { useRef } from 'react'
import { db } from '../../firebase'
import firebase from 'firebase'
import { UserAuth } from '../../context/AuthContext'





const CreatePost = () => {
const inputRef = useRef(null);
const {user} = UserAuth();

const sendPost = (e) => {
    e.preventDefault();

    if(!inputRef.current.value) return;

    db.collection('posts').add({
        message: inputRef.current.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user.displayName,
        profilePic: user.photoURL, 
        email: user.email,
    })

}

  return (
    <div className='main-content'>
    <div className='create-post'>
        <div className='create-post-input'>
            <img src={user1} alt='' />
            {/* <textarea rows='2' placeholder='Create a post' /> */}
            <form>
                <input type='text' ref={inputRef} placeholder={`what's on your mind` } className='textarea2' />
            </form>
            <button hidden type='submit' onClick={sendPost}>submit</button>
        </div>
        <div className='create-post-links'>
        <li>
            <img src={camera} alt='' className='photoicon'/>Photo
        </li>
        <li>
            <img src={video} alt='' />Video
        </li>
        <li>
            <img src={event} alt='' />Event
        </li>

        </div>
    </div>
    </div>
  )
}

export default CreatePost