import React from 'react'
import './Home.css'
 
import CreatePost from '../../components/CreatePost/CreatePost'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar.jsx'
import Post from '../../components/Post/Post.jsx'




const Home = () => {
  return (
    <>
    <div className='container'>
    <LeftSidebar  />
    <div className='main-content'>
    <CreatePost />
    <Post />
    </div>
    <RightSidebar />
    </div>
    </>
  )
}

export default Home