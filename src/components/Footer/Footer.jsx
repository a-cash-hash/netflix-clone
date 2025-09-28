import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png' 
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="https://www.facebook.com/Netflix" target="_blank" rel="noreferrer">
          <img src={facebook_icon} alt="Netflix on Facebook" />
        </a>
        <a href="https://www.instagram.com/netflix" target="_blank" rel="noreferrer">
          <img src={instagram_icon} alt="Netflix on Instagram" />
        </a>
        <a href="https://twitter.com/netflix" target="_blank" rel="noreferrer">
          <img src={twitter_icon} alt="Netflix on Twitter" />
        </a>
        <a href="https://www.youtube.com/Netflix" target="_blank" rel="noreferrer">
          <img src={youtube_icon} alt="Netflix on YouTube" />
        </a>
      </div>

      <ul>
        <li><a href="#">Audio Description</a></li>
        <li><a href="#">Help Centre</a></li>
        <li><a href="#">Gift Cards</a></li>
        <li><a href="#">Media Centre</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Legal Notices</a></li>
        <li><a href="#">Cookie Preferences</a></li>
        <li><a href="#">Corporate Information</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      <p className='copyright-text'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
