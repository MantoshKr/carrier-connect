import React from 'react'
import Sidebar from '../components/Jobs/Sidebar'
import Main from '../components/Jobs/Main'
import RightSidebar from '../components/Jobs/RightSidebar'


const JobsPage = () => {
  return (
    <div className='gap-10 px-40 bg-[#f0f2f5] xl:flex'>
    <div className='md:w-1/4 w-full'><Sidebar /></div>
    <div className='md:w-1/2 w-full'><Main /></div>
    <div className='md:w-1/4 w-full'><RightSidebar /></div>
    
    
    
    </div>
  )
}

export default JobsPage



// className="lg:flex gap-10 2xl:px-60 lg:px-40 bg-[#f0f2f5] "