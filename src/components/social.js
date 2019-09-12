import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <FontAwesomeIcon icon={faFacebook} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faPinterest} />
        </li>
      </ul>
    </div>
  )
}

export default Footer
