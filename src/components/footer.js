import React from 'react'
import { Link } from 'gatsby'

import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  )
}

export default Footer
