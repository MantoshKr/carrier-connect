import React from 'react'
import Sidebar from '../components/Jobs/Sidebar'
import Main from '../components/Jobs/Main'

const JobsPage = () => {
  return (
    <div className='flex'>
    <Sidebar />
    <Main />
    </div>
  )
}

export default JobsPage