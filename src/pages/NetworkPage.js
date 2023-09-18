import React from 'react'
import LeftSidebar from '../Network/LeftSidebar'
import NetworkMain from '../Network/NetworkMain'


const NetworkPage = () => {
  return (
    <div className='flex justify-center'>
       <div className='w-2/12'><LeftSidebar /></div>
       <div className='w-8/12/'><NetworkMain /></div>
       
        
       
    </div>
  )
}

export default NetworkPage