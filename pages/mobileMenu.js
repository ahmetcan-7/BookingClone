import React from 'react'
import Link from 'next/link'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined'
import ThumbsUpDownOutlinedIcon from '@material-ui/icons/ThumbsUpDownOutlined'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded'
function MobileMenu() {
  return (
    <div className="mobileMenu">
      <Link href="/">
        <a className="mobileMenu-button">
          <svg height="24" width="24" viewBox="0 0 24 24">
            <path d="M13 12l6.26-6.26a.73.73 0 0 0-1-1L12 11 5.74 4.71a.73.73 0 1 0-1 1L11 12l-6.29 6.26a.73.73 0 0 0 .52 1.24.73.73 0 0 0 .51-.21L12 13l6.26 6.26a.74.74 0 0 0 1 0 .74.74 0 0 0 0-1z"></path>
          </svg>
        </a>
      </Link>

      <ul>
        <li className="mobileMenu-title">More</li>
        <li>
          <a href="#" className="mobileMenu-item">
            <span>TRY</span>
            <span>Turkish Lira</span>
          </a>
        </li>

        <li>
          <a href="#" className="mobileMenu-item">
            <PhoneAndroidOutlinedIcon />
            <span>Download the free iPad app</span>
          </a>
        </li>
        <li>
          <a href="#" className="mobileMenu-item">
            <HomeOutlinedIcon />
            <span>List your property</span>
          </a>
        </li>

        <li className="mobileMenu-title">Help and Support</li>
        <li>
          <a href="#" className="mobileMenu-item">
            <HelpOutlineIcon /> <span>Contact Customer Service</span>
          </a>
        </li>
        <li>
          <a href="#" className="mobileMenu-item">
            <ThumbsUpDownOutlinedIcon />
            <span>Partner dispute</span>
          </a>
        </li>
        <li className="mobileMenu-title">Inspiration</li>
        <li>
          <a href="#" className="mobileMenu-item">
            <MenuBookRoundedIcon />
            <span>Travel articles</span>
          </a>
        </li>
        <li>
          <a href="#" className="mobileMenu-item">
            <InfoOutlinedIcon />
            <span>About Booking.com</span>
          </a>
        </li>
        <li>
          <a href="#" className="mobileMenu-item">
            <CheckCircleOutlineRoundedIcon />
            <span>Become an affiliate</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
