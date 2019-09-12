import React from 'react'
import { Link } from 'gatsby'

import '../styles/social.css'

const Footer = () => {
  return (
    <div className="social">
      <ul>
        <li>&copy; 2020 Rocky Mountain Health Plans</li>
        <li>|</li>
        <li>
          <Link to="/terms/">Terms & Conditions</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/privacy/">Privacy & Disclosure</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/accessibility/">Accessibility</Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
