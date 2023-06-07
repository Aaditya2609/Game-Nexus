import React from 'react'
import "./styles.css"
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai';

export default function 
() {
  return (
    <div className='footer-container'>
    <div className='footer'>
        <div className="footer-heading">Connect with me on</div>
        <div className='footer-icons'> 
            <p>
            <a className='Link'  href="https://www.linkedin.com/in/aadityakhantal" target="_blank"><AiFillLinkedin /></a>
            <a className='Link' href="https://github.com/Aaditya2609" target="_blank"><AiFillGithub/></a></p>
        </div>
        <p className='footer-about-us'>Unleash your gaming potential with Game Nexus - your ultimate destination for all things gaming. Join us and embark on an epic gaming journey like never before.</p>
        © 2023 GameNexus
    </div>
    </div>
  )
}
