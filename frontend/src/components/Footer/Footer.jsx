import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo}/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente nisi blanditiis, dignissimos explicabo dolorum corrupti ipsa voluptates obcaecati doloribus modi necessitatibus quam, architecto hic ab repellat mollitia consequuntur veniam facilis quidem.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>+91-8320172366</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Footer
