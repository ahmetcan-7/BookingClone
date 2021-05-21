import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-auther ">Created by Ahmet Can</div>
        <div className="footer-contact">Contact with me</div>
        <ul className="footer-icons">
          <li>
            <a href="mailto:ahmetcan423507@gmail.com">
              <MailIcon />
            </a>
          </li>

          <li>
            <a href="https://github.com/ahmetcan-7">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ahmet-can-b89a14209/">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ahmetcan7_/">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
