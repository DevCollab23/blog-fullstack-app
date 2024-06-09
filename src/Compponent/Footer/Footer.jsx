import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer_container">
            <h2>Finsweet</h2>
            <ul className='footer_menu'>
                <li className='li'><Link className='linkk'>Home</Link> </li>
                <li className='li'><Link className='linkk'>Blog</Link> </li>
                <li className='li'><Link className='linkk'>About Us</Link> </li>
                <li className='li'><Link className='linkk'>Contact us</Link> </li>
                <li className='li'><Link className='linkk'>Privacy Policy</Link> </li>
            </ul>
        </div>
        <div className='footer_subscribe'>
            <div className='subscribe'>
                Subscribe to our news letter 
                to get latest update and news
            </div>
            <input type="email" placeholder='Enter your email address' />
            <button>Subscibe</button>
        </div>
        <div className='footer_socials'>
            <FaFacebook className='f_social'/>
            <FaInstagram className='f_social'/>
            <FaTwitter className='f_social'/>
            <FaLinkedin className='f_social'/>
        </div>
    </div>
  )
}

export default Footer