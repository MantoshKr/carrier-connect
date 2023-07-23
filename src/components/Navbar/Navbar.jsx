import React from 'react'
import './Navbar.css'
import CarrierConnect from '../../assets/images/carrier-connect-logo.png'
import { Link } from 'react-router-dom'
import home from '../../assets/images/home.png'
import network from '../../assets/images/network.png'
import job from '../../assets/images/job.png'
import message from '../../assets/images/message.png'
import notification from '../../assets/images/notification.png'
import user1 from '../../assets/images/user1.jpg'
import searchicon from '../../assets/images/searchicon.png'
import { AiFillHome } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { BiSolidBriefcase } from 'react-icons/bi'
import { IoMdChatboxes } from 'react-icons/io'
import { MdNotificationsActive } from 'react-icons/md'




const Navbar = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar-left'>
          <Link to='/' className='logo'>
            <img src={CarrierConnect} alt='' />
          </Link>

          <div className='search-box'>
          <img src={searchicon} alt='' />
            <input type='text' placeholder='Search' />
            </div>

        </div>
        <div className='navbar-center'>
          <ul>
            <li>
              <Link to='' className='icons active-link'>
                {/* <img src={home} alt='' /> */}
                <AiFillHome style={{ color: 'green', fontSize: '22px' }}  />
                <span>Home</span>
              </Link>
            </li>
            <li>
            <Link to='' className='icons'>
                {/* <img src={network} alt='' /> */}
                <FaUser style={{ color: 'green', fontSize: '21px' }}  />
                <span>My Network</span>
              </Link>
            </li>
            <li>
            <Link to=''  className='icons'>
                {/* <img src={job} alt='' /> */}
                <BiSolidBriefcase style={{ color: 'green', fontSize: '22px' }}  />
                <span>Jobs</span>
              </Link>
            </li>
            <li>
            <Link to=''  className='icons'>
                {/* <img src={message} alt='' /> */}
                <IoMdChatboxes style={{ color: 'green', fontSize: '22px' }}  />
                <span>Messaging</span>
              </Link>
            </li>
            <li>
            <Link to=''  className='icons'>
                {/* <img src={notification} alt='' /> */}
                <MdNotificationsActive style={{ color: 'green', fontSize: '22px' }}  />
                <span>Notification</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className='navbar-right'>
        <div className='online'>
          <img src={user1} alt='' className='nav-profile-img' />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar