import React from 'react'
import Sidebar from '../components/Jobs/Sidebar'
import Main from '../components/Jobs/Main'
import RightSidebar from '../components/Jobs/RightSidebar'


const JobsPage = () => {
  return (
    <div className="lg:flex gap-10 2xl:px-60 lg:px-40 bg-[#f0f2f5] ">
    <Sidebar />
    <Main />
    <RightSidebar />
    </div>
  )
}

export default JobsPage