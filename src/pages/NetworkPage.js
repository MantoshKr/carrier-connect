import React from 'react'
import LeftSidebar from '../Network/LeftSidebar'
import NetworkMain from '../Network/NetworkMain'


const NetworkPage = () => {
  return (
    <div className='flex justify-center bg-[#f0f2f5]'>
       <div className='md:w-1/4 xl:w-2/12'><LeftSidebar /></div>
       <div className='md:w-3/4 xl:w-8/12 mt-4'><NetworkMain /></div>
       
        
       
    </div>
  )
}

export default NetworkPage