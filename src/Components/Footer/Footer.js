import React from 'react'
import Meta from '../../Assets/Meta.jpeg'
import twitter from '../../Assets/twitter.jpeg'
import gmail from '../../Assets/gmail.jpeg'
import './Footer.scss'

const Footer = () => {

  const time = new Date().getFullYear()
  
  return (
    <div className='footer-container'>
        <div className='social-links'>
           <img src={Meta} alt="Facebook-icon" className='Meta-icon'/>
            <img src={twitter} alt="Twitter" className='twitter-icon'/>
            <img src={gmail} alt="Twitter" className='twitter-icon'/>
        </div>
    <p>Made by me © {time}</p>
    </div>
  )
}

export default Footer