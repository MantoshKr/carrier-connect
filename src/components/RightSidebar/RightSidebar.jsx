import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import './RightSidebar.css'
import datascience from '../../assets/images/datascience.jpeg'
import trading from '../../assets/images/trading.webp'
import carrierconnectlogo from '../../assets/images/carrier-connect-logo.png'

const RightSidebar = () => {
  return (
    <div className='right-sidebar'>
    <div className='sidebar-news'>
      <AiOutlineExclamationCircle className='AiOutlineExclamationCircle'/>
      <h3>Trending News</h3>
      <label>React Native Dominates Mobile App Development: Cross-Platform Success</label>
      <span>10h ago &middot; 10,657 readers</span>

      <label>Web Design Trends 2023: Embracing Minimalism and Dark Mode</label>
      <span>1d ago &middot; 8,549 readers</span>

      <label>React Context API: Simplifying State Management and Global Data</label>
      <span>12 ago &middot; 12,235 readers</span>

      <label>Tech Giants Hiring: IT Career Opportunities</label>
      <span>16h ago &middot; 22,347 readers</span>

      <label>Remote Work Trends: Web Developers Thrive</label>
      <span>7h ago &middot; 16,142 readers</span>

      <label className='read-more-link'>Read More</label>
    </div>

<div className='sidebar-ad'>
  <label>Ad  &middot;  &middot; </label>
  <p className='ad1'>Discover the Power of Data Science</p>
  <div>
    <img src={datascience} alt=''/>
    <img src={trading} alt=''/>
  </div>
  <p className='ad2'>Invest Smart: Stock Market Insights and Tips</p>
  <div className='ad-link'>Learn More</div>
</div>

<div className='sidebar-useful-links'>
  <p>About</p>
  <p>Accessibility</p>
  <p>Help Center</p>
  <p>Privacy & Terms</p>
  <p>Ad Choices</p>
  <p>Advertising</p>
  <p>Business Services</p>
  <p>Get the CarrierConnect app</p>
  <p>More</p>


  <div className='copyright-msg'>
    <img src={carrierconnectlogo} alt=''/>
    <label> CarrierConnect Corporation © 2023</label>
  </div>

</div>

    </div>
  )
}

export default RightSidebar



// AiOutlineExclamationCircle

//Invest Smart: Stock Market Insights and Tips

//Discover the Power of Data Science