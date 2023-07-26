import React from 'react'
import './Home.css'
 
import CreatePost from '../../components/CreatePost/CreatePost'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar.jsx'




const Home = () => {
  return (
    <>
    <div className='container'>
    <LeftSidebar  />
    <CreatePost />
    <RightSidebar />
    </div>
    </>
  )
}

export default Home