import React from 'react'
import './Home.css'
 
import CreatePost from '../../components/CreatePost/CreatePost'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar.jsx'
import Post from '../../components/Post/Post.jsx'
import Feed from '../../components/Feed/Feed.jsx'




const Home = () => {
  return (
    <>
    <div className='container'>
    <LeftSidebar  />
    <div className='main-content'>
    <Feed />
    </div>
    <RightSidebar />
    </div>
    </>
  )
}

export default Home